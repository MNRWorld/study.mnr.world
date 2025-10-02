"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";

interface User {
  name: string;
  deviceId: string;
  loginTime: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_DATA_KEY = "deviceAuthUserData";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error("Could not access localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 500));

      const deviceId =
        `device-${new Date().getTime()}-${Math.random().toString(36).substring(2, 10)}`;
      const newUser: User = {
        name: "ব্যবহারকারী",
        deviceId: deviceId,
        loginTime: new Date().toISOString(),
      };

      setUser(newUser);
      try {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(newUser));
      } catch (error) {
        console.error("Could not access localStorage", error);
        throw new Error(
          "Local storage is not accessible. Please enable it in your browser.",
        );
      }
      toast({
        title: "লগইন সফল হয়েছে",
        description: "MNR Study-তে স্বাগতম!",
      });
      router.push("/profile");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    setUser(null);
    try {
      localStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
      console.error("Could not access localStorage", error);
    }
    toast({
      title: "সফলভাবে লগ আউট হয়েছে",
    });
    setLoading(false);
    router.push("/");
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
