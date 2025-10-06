// src/components/FirebaseErrorListener.tsx
"use client";

import { useEffect } from "react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useToast } from "@/hooks/use-toast";

const isDevelopment = process.env.NODE_ENV === "development";

function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      if (isDevelopment) {
        // In development, we want to see the rich error in the Next.js overlay
        throw error;
      } else {
        // In production, show a generic toast to the user
        console.error("Firestore Permission Error:", error); // Log for debugging
        toast({
          variant: "destructive",
          title: "Permission Denied",
          description: "You do not have permission to perform this action.",
        });
      }
    };

    errorEmitter.on("permission-error", handlePermissionError);

    return () => {
      errorEmitter.off("permission-error", handlePermissionError);
    };
  }, [toast]);

  // This component does not render anything
  return null;
}

export default FirebaseErrorListener;
