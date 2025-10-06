// src/firebase/firestore/use-collection.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import {
  collection,
  query,
  onSnapshot,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export const useCollection = <T extends DocumentData>(
  collectionName: string,
  queryString?: string, // Using a stable string for the query helps with memoization
) => {
  const firestore = useFirestore();
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | FirestorePermissionError | null>(null);

  const memoizedQuery = useMemo(() => {
    if (!firestore) return null;
    // This is a simple example. For more complex queries, you might need a more robust way
    // to construct and memoize the query based on its string representation.
    return query(collection(firestore, collectionName));
  }, [firestore, collectionName, queryString]);

  useEffect(() => {
    if (!memoizedQuery) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      memoizedQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const result: T[] = [];
        snapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(result);
        setLoading(false);
      },
      (err: FirestoreError) => {
        // Create a rich, contextual error
        const permissionError = new FirestorePermissionError({
          path: (memoizedQuery as Query).path,
          operation: 'list',
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
  }, [memoizedQuery]);

  return { data, loading, error };
};
