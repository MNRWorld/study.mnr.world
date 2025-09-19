import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">লগইন</CardTitle>
          <CardDescription>
            আপনার অ্যাকাউন্টে প্রবেশ করতে আপনার ইমেইল লিখুন
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">ইমেইল</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">পাসওয়ার্ড</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              লগইন করুন
            </Button>
            <Button variant="outline" className="w-full">
              গুগল দিয়ে লগইন করুন
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            অ্যাকাউন্ট নেই?{' '}
            <Link href="/signup" className="underline">
              সাইন আপ
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
