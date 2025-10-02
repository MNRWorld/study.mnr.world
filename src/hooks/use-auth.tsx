"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
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
  updateName: (newName: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_DATA_KEY = "deviceAuthUserData";
const DEVICE_ID_KEY = "deviceAuthDeviceId";

// This function now ONLY gets or creates the device ID. It is permanent.
const getOrCreateDeviceId = (): string | null => {
  if (typeof window === "undefined") return null;
  try {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    if (!deviceId) {
      deviceId = `device-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
  } catch (error) {
    console.error("Could not access localStorage", error);
    return null;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if (storedUserData) {
        const parsedUser: User = JSON.parse(storedUserData);
        const permanentDeviceId = getOrCreateDeviceId();
        if (permanentDeviceId && parsedUser.deviceId === permanentDeviceId) {
          setUser(parsedUser);
        } else {
          // Mismatch or error, clear the session for security
          localStorage.removeItem(USER_DATA_KEY);
        }
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
      localStorage.removeItem(USER_DATA_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 500));

      const deviceId = getOrCreateDeviceId();
      if (!deviceId) {
        toast({
          title: "Local Storage Error",
          description: "Could not access local storage. Please enable it in your browser settings.",
          variant: "destructive",
        });
        throw new Error("Device could not be identified.");
      }

      // If user is already logged in on this device, just go to profile.
      if (user && user.deviceId === deviceId) {
        router.push("/profile");
        return;
      }
      
      // Try to find if there was a previous user session to restore the name.
      // This is useful if they logged out but didn't delete the account.
      let name = "ব্যবহারকারী";
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if(storedUserData){
        try {
            const parsed = JSON.parse(storedUserData);
            // This case should not happen often if logout is used correctly, but it's a good fallback
            if(parsed.name && parsed.deviceId === deviceId) name = parsed.name;
        } catch(e){
            // ignore parsing errors
        }
      }

      const newUser: User = {
        name,
        deviceId: deviceId,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem(USER_DATA_KEY, JSON.stringify(newUser));
      setUser(newUser);

      toast({
        title: "লগইন সফল হয়েছে",
        description: `স্বাগতম, ${newUser.name}!`,
      });
      router.push("/profile");
    } catch (error: any) {
      console.error("Login failed:", error);
      if (error.message !== "Device could not be identified.") {
        toast({
          title: "লগইন ব্যর্থ হয়েছে",
          description: "একটি অপ্রত্যাশিত সমস্যা হয়েছে।",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  }, [user, router, toast]);

  const logout = useCallback(async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 300));
    setUser(null);
    try {
      // Only remove the session data, NOT the permanent device ID
      localStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
      console.error("Could not access localStorage during logout", error);
    }
    toast({
      title: "সফলভাবে লগ আউট হয়েছে",
    });
    setLoading(false);
    router.push("/");
  }, [router, toast]);

  const updateName = async (newName: string) => {
    if (!user) {
      throw new Error("You must be logged in to update your name.");
    }
    const updatedUser = { ...user, name: newName };
    setUser(updatedUser);
    try {
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Could not access localStorage", error);
      throw new Error("Failed to save name to device.");
    }
  };

  const deleteAccount = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    setUser(null);
    try {
      // On deletion, remove BOTH session and the permanent device ID
      localStorage.removeItem(USER_DATA_KEY);
      localStorage.removeItem(DEVICE_ID_KEY);
    } catch (error) {
      console.error("Could not access localStorage", error);
    }
    setLoading(false);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    updateName,
    deleteAccount,
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
