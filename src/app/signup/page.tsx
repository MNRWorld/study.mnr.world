
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
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
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">নাম</Label>
            <Input id="name" type="text" placeholder="আপনার নাম" required className="text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ইমেইল</Label>
            <Input id="email" type="email" placeholder="user@example.com" required className="text-base" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">পাসওয়ার্ড</Label>
            <Input id="password" type="password" placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন" required className="text-base" />
          </div>
          <Button type="submit" className="w-full join-btn text-white font-semibold text-base">
            রেজিস্টার করুন
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
