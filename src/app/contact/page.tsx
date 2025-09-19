
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="যোগাযোগ করুন"
        description="আপনার যেকোনো প্রশ্ন, মতামত বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।"
      />
      <div className="container max-w-7xl mx-auto px-5 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>আমাদের মেসেজ পাঠান</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">আপনার নাম</Label>
                  <Input id="name" placeholder="আপনার নাম লিখুন" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">আপনার ইমেইল</Label>
                  <Input id="email" type="email" placeholder="আপনার ইমেইল লিখুন" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">বিষয়</Label>
                <Input id="subject" placeholder="আপনার মেসেজের বিষয়" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">মেসেজ</Label>
                <Textarea id="message" placeholder="আপনার মেসেজটি এখানে লিখুন" rows={6} />
              </div>
              <Button type="submit" className="w-full">মেসেজ পাঠান</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">যোগাযোগের তথ্য</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">আমাদের ঠিকানা</h3>
                        <p className="text-muted-foreground">১২৩ স্টাডি লেন, জ্ঞান নগর, ঢাকা-১২০৫, বাংলাদেশ</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">ইমেইল</h3>
                        <p className="text-muted-foreground">support@study.com.bd</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">ফোন</h3>
                        <p className="text-muted-foreground">+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
