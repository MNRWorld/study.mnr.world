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
        const permanentDeviceId = getOrCreateDeviceId();
        if (permanentDeviceId && parsedUser.deviceId === permanentDeviceId) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem(USER_DATA_KEY);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
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
          variant: "destructive",
          title: "ব্রাউজার সাপোর্ট সমস্যা",
          description:
            "আপনার ব্রাউজারে Local Storage চালু নেই। অনুগ্রহ করে চালু করুন।",
        });
        throw new Error("Device could not be identified.");
      }

      const storedData = localStorage.getItem(USER_DATA_KEY);
      let name = "ব্যবহারকারী";

      if (storedData) {
        try {
          const parsed = JSON.parse(storedData);
          if (parsed.deviceId === deviceId && parsed.name) {
            name = parsed.name;
          }
        } catch (e) {
          // Ignore parsing errors, default name will be used
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
        description: "আপনার প্রোফাইলে স্বাগতম!",
      });
      router.push("/profile");
    } catch (error: any) {
      console.error("Login failed:", error);
      if (!error.message.includes("Device could not be identified.")) {
        toast({
          variant: "destructive",
          title: "লগইন ব্যর্থ হয়েছে",
          description: "একটি অপ্রত্যাশিত সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        });
      }
    } finally {
      setLoading(false);
    }
  }, [router, toast]);

  const logout = useCallback(async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 300));
    try {
      localStorage.removeItem(USER_DATA_KEY);
      setUser(null);
      toast({
        title: "সফলভাবে লগআউট হয়েছেন",
      });
      router.push("/");
    } catch (error) {
      console.error("Could not access localStorage during logout", error);
      toast({
        variant: "destructive",
        title: "লগআউট ব্যর্থ হয়েছে",
        description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      });
    } finally {
      setLoading(false);
    }
  }, [router, toast]);

  const updateName = async (newName: string) => {
    if (!user) {
      throw new Error("আপনাকে অবশ্যই লগইন করতে হবে।");
    }
    const updatedUser = { ...user, name: newName };
    try {
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error) {
      console.error("Could not access localStorage", error);
      throw new Error("ডিভাইসে আপনার নাম সেভ করা যায়নি।");
    }
  };

  const deleteAccount = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    try {
      localStorage.removeItem(USER_DATA_KEY);
      localStorage.removeItem(DEVICE_ID_KEY);
      setUser(null);
    } catch (error) {
      console.error("Could not access localStorage", error);
      throw new Error("অ্যাকাউন্ট মুছে ফেলার সময় একটি সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
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
    throw new Error("useAuth অবশ্যই একটি AuthProvider এর মধ্যে ব্যবহার করতে হবে");
  }
  return context;
};
