// src/firebase/firestore/use-doc.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import {
  doc,
  onSnapshot,
  DocumentData,
  FirestoreError,
  DocumentSnapshot,
} from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export const useDoc = <T extends DocumentData>(
  collectionName: string,
  docId: string,
) => {
  const firestore = useFirestore();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | FirestorePermissionError | null>(null);

  const memoizedDocRef = useMemo(() => {
    if (!firestore || !docId || docId === 'dummy') return null;
    return doc(firestore, collectionName, docId);
  }, [firestore, collectionName, docId]);

  useEffect(() => {
    if (!memoizedDocRef) {
      setLoading(false);
      setData(null);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      memoizedDocRef,
      (docSnap: DocumentSnapshot<DocumentData>) => {
        if (docSnap.exists()) {
          setData({ id: docSnap.id, ...docSnap.data() } as T);
        } else {
          setData(null); // Document does not exist
        }
        setLoading(false);
      },
      (err: FirestoreError) => {
         // Create a rich, contextual error
         const permissionError = new FirestorePermissionError({
          path: memoizedDocRef.path,
          operation: 'get',
          cause: err,
        });

        // Emit the error for global handling (e.g., dev overlay)
        errorEmitter.emit('permission-error', permissionError);
        
        // Also set local error state for component-specific UI
        setError(permissionError);
        setLoading(false);
      },
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [memoizedDocRef]);

  return { data, loading, error };
};

    