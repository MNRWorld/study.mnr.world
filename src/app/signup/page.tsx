
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // In a real app, you would handle registration logic here.
    // For now, we'll just show a success message and redirect.

    setLoading(false);

    toast({
      title: "রেজিস্ট্রেশন সফল হয়েছে!",
      description: "অনুগ্রহ করে আপনার নতুন অ্যাকাউন্ট দিয়ে লগইন করুন।",
    });

    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali">
      <div className="w-full max-w-md p-8 space-y-8 bg-card border border-border rounded-2xl shadow-lg">
        <div className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <UserPlus className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">অ্যাকাউন্ট তৈরি করুন</h1>
            <p className="text-muted-foreground">নতুন অ্যাকাউন্ট তৈরি করে আমাদের সাথে যুক্ত হোন।</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">নাম</Label>
            <Input id="name" type="text" placeholder="আপনার নাম" required value={name} onChange={(e) => setName(e.target.value)} className="text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ইমেইল</Label>
            <Input id="email" type="email" placeholder="user@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} className="text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">পাসওয়ার্ড</Label>
            <Input id="password" type="password" placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন" required value={password} onChange={(e) => setPassword(e.target.value)} className="text-base" />
          </div>
          <Button type="submit" className="w-full join-btn text-white font-semibold text-base" disabled={loading}>
            {loading ? 'প্রসেসিং...' : 'রেজিস্টার করুন'}
          </Button>
        </form>
         <div className="text-center text-sm text-muted-foreground">
            <p>
                ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
                <Link href="/login" className="text-primary hover:underline">
                    লগইন করুন
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
