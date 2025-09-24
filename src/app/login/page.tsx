
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Success toast and redirect are now handled by the useAuth hook.
    } catch (error: any) {
      console.error(error);
      toast({
        title: "লগইন ব্যর্থ হয়েছে",
        description: error.message || "একটি অপ্রত্যাশিত সমস্যা হয়েছে।",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali">
      <div className="w-full max-w-md p-8 space-y-8 bg-card border border-border rounded-2xl shadow-lg">
        <div className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <LogIn className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">লগইন করুন</h1>
            <p className="text-muted-foreground">আপনার অ্যাকাউন্টে প্রবেশ করে শুরু করুন।</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">ইমেইল</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">পাসওয়ার্ড</Label>
            <Input
              id="password"
              type="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-base"
            />
          </div>
          <Button type="submit" className="w-full join-btn text-white font-semibold text-base" disabled={loading}>
            {loading ? 'প্রসেসিং...' : 'লগইন'}
          </Button>
        </form>
         <div className="text-center text-sm text-muted-foreground">
            <p>
                কোনো অ্যাকাউন্ট নেই?{' '}
                <a href="#" className="text-primary hover:underline">
                    এখনি তৈরি করুন
                </a>
            </p>
        </div>
      </div>
    </div>
  );
}
