// src/firebase/client-provider.tsx
"use client";

import { useEffect, useState } from "react";
import { initializeFirebase } from ".";
import { FirebaseProvider, FirebaseProviderProps } from "./provider";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

// Helper component to initialize Firebase on the client
function FirebaseClientInitializer({
  setFirebase,
}: {
  setFirebase: (props: FirebaseProviderProps) => void;
}) {
  useEffect(() => {
    const { app, firestore, auth } = initializeFirebase();
    setFirebase({ app, firestore, auth });
  }, [setFirebase]);

  return null; // This component doesn't render anything
}

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firebase, setFirebase] = useState<{
    app: FirebaseApp;
    firestore: Firestore;
    auth: Auth;
  } | null>(null);

  if (!firebase) {
    return (
      <>
        <FirebaseClientInitializer setFirebase={setFirebase} />
        {/* You can show a loading spinner here if needed */}
      </>
    );
  }

  return (
    <FirebaseProvider
      app={firebase.app}
      firestore={firebase.firestore}
      auth={firebase.auth}
    >
      {children}
    </FirebaseProvider>
  );
}
