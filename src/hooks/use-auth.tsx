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
    setLoading(true);
    try {
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if (storedUserData) {
        const parsedUser: User = JSON.parse(storedUserData);
        const permanentDeviceId = localStorage.getItem(DEVICE_ID_KEY);
        // Ensure the stored user data corresponds to the current device
        if (permanentDeviceId && parsedUser.deviceId === permanentDeviceId) {
          setUser(parsedUser);
        } else {
          // If there's a mismatch, clear the invalid session data for security.
          localStorage.removeItem(USER_DATA_KEY);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
      // Clear potentially corrupted data
      localStorage.removeItem(USER_DATA_KEY);
      setUser(null);
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

      // Check if a user session already exists for this device.
      // This handles the case where the user is already logged in.
      if (user && user.deviceId === deviceId) {
        router.push("/profile");
        return;
      }
      
      let name = "ব্যবহারকারী";
      // Try to find if there was a previous user session on this device to restore the name.
      // This is useful if they logged out but didn't delete the account.
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if(storedUserData){
        try {
            const parsed = JSON.parse(storedUserData);
            if(parsed.name && parsed.deviceId === deviceId) {
              name = parsed.name;
            }
        } catch(e){
            // ignore parsing errors and use default name
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
