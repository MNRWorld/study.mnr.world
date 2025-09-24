'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// A simple mock of a User object
interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded credentials for demonstration
const MOCK_EMAIL = 'user@example.com';
const MOCK_PASSWORD = 'password123';
const MOCK_USER = { email: MOCK_EMAIL };
const AUTH_TOKEN_KEY = 'authToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for a token in localStorage on initial load
    try {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      if (token) {
        // In a real app, you'd validate the token with a server
        // For this mock, we'll just assume the token is valid
        setUser(MOCK_USER);
      }
    } catch (error) {
        console.error("Could not access localStorage", error);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    // Simulate an API call
    await new Promise(res => setTimeout(res, 500));

    if (email === MOCK_EMAIL && pass === MOCK_PASSWORD) {
      setUser(MOCK_USER);
      try {
        // Store a mock token
        localStorage.setItem(AUTH_TOKEN_KEY, 'mock-jwt-token');
      } catch (error) {
        console.error("Could not access localStorage", error);
      }
    } else {
      setLoading(false);
      throw new Error('Invalid email or password');
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    // Simulate an API call
    await new Promise(res => setTimeout(res, 500));
    setUser(null);
     try {
        localStorage.removeItem(AUTH_TOKEN_KEY);
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
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
