// src/hooks/use-auth.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  updateProfile,
  deleteUser,
  User as FirebaseUser,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { useFirebaseApp } from "@/firebase";

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const logout = useCallback(async () => {
    try {
      await auth.signOut();
      toast({
        title: "সফলভাবে লগআউট হয়েছেন",
      });
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        variant: "destructive",
        title: "লগআউট ব্যর্থ হয়েছে",
        description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      });
    }
  }, [auth, router, toast]);

  const value = {
    user,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth অবশ্যই একটি AuthProvider এর মধ্যে ব্যবহার করতে হবে");
  }
  return context;
};
