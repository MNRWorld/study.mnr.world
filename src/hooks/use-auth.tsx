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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const getDeviceId = useCallback(() => {
    try {
      let deviceId = localStorage.getItem(DEVICE_ID_KEY);
      if (!deviceId) {
        deviceId = `device-${new Date().getTime()}-${Math.random().toString(36).substring(2, 10)}`;
        localStorage.setItem(DEVICE_ID_KEY, deviceId);
      }
      return deviceId;
    } catch (error) {
      console.error("Could not access localStorage", error);
      toast({
        title: "Local Storage Error",
        description:
          "Could not access local storage. Please enable it in your browser settings.",
        variant: "destructive",
      });
      return null;
    }
  }, [toast]);

  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if (storedUserData) {
        const parsedUser = JSON.parse(storedUserData);
        // Ensure deviceId is consistent
        const deviceId = getDeviceId();
        if (deviceId && parsedUser.deviceId === deviceId) {
          setUser(parsedUser);
        } else {
          // Clear inconsistent data
          localStorage.removeItem(USER_DATA_KEY);
        }
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
      localStorage.removeItem(USER_DATA_KEY);
    } finally {
      setLoading(false);
    }
  }, [getDeviceId]);

  const login = async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 500));

      const deviceId = getDeviceId();
      if (!deviceId) {
        throw new Error("Device could not be identified.");
      }

      // Check if user data already exists for this deviceId
      const storedUserData = localStorage.getItem(USER_DATA_KEY);
      if (storedUserData) {
        const parsedUser = JSON.parse(storedUserData);
        if (parsedUser.deviceId === deviceId) {
          setUser({ ...parsedUser, loginTime: new Date().toISOString() });
          localStorage.setItem(
            USER_DATA_KEY,
            JSON.stringify({ ...parsedUser, loginTime: new Date().toISOString() }),
          );
          toast({
            title: "লগইন সফল হয়েছে",
            description: `আবারো স্বাগতম, ${parsedUser.name}!`,
          });
          router.push("/profile");
          setLoading(false);
          return;
        }
      }

      const newUser: User = {
        name: "ব্যবহারকারী",
        deviceId: deviceId,
        loginTime: new Date().toISOString(),
      };

      setUser(newUser);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(newUser));

      toast({
        title: "লগইন সফল হয়েছে",
        description: "MNR Study-তে স্বাগতম!",
      });
      router.push("/profile");
    } catch (error: any) {
      console.error("Login failed:", error);
      toast({
        title: "লগইন ব্যর্থ হয়েছে",
        description: error.message || "একটি অপ্রত্যাশিত সমস্যা হয়েছে।",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    setUser(null);
    try {
      // We only remove the session data, not the device ID
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
      localStorage.removeItem(USER_DATA_KEY);
      localStorage.removeItem(DEVICE_ID_KEY); // Permanently delete device id
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
