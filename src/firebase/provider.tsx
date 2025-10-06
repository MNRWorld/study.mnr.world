// src/firebase/provider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import FirebaseErrorListener from "@/components/FirebaseErrorListener";

export interface FirebaseProviderProps {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  children?: ReactNode;
}

interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseContextValue | undefined>(
  undefined,
);

export function FirebaseProvider({
  app,
  auth,
  firestore,
  children,
}: FirebaseProviderProps) {
  const contextValue = { app, auth, firestore };
  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
      <FirebaseErrorListener />
    </FirebaseContext.Provider>
  );
}

// --- Hooks ---

export const useFirebase = (): FirebaseContextValue => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

export const useFirebaseApp = (): FirebaseApp => {
  return useFirebase().app;
};

export const useAuth = (): Auth => {
  return useFirebase().auth;
};

export const useFirestore = (): Firestore => {
  return useFirebase().firestore;
};
