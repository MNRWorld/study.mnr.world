import { PageHeader } from '@/components/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div>
      <PageHeader
        title="আমার প্রোফাইল"
        description="আপনার তথ্য পরিচালনা করুন এবং অগ্রগতি ট্র্যাক করুন।"
      />
      <div className="container max-w-4xl mx-auto px-5 pb-24">
        <Card className="mb-12">
            <CardHeader className='flex-row items-center gap-6 space-y-0'>
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Name" />
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div className='flex-grow'>
                    <CardTitle className='text-3xl'>ইউজার নেম</CardTitle>
                    <CardDescription>username@example.com</CardDescription>
                </div>
                <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">প্রোফাইল সম্পাদনা করুন</span>
                </Button>
            </CardHeader>
        </Card>
        
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-4">আমার কোর্সসমূহ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Placeholder for enrolled courses */}
                    <Card>
                        <CardHeader>
                            <CardTitle>HSC ক্র্যাশ কোর্স</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">অগ্রগতি: ৭৫%</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">অগ্রগতি: ৫০%</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

             <div>
                <h3 className="text-2xl font-bold mb-4">সংরক্ষিত প্রশ্ন</h3>
                <p className="text-muted-foreground">আপনার সংরক্ষিত প্রশ্নগুলো এখানে দেখতে পাবেন।</p>
            </div>
        </div>

      </div>
    </div>
  );
}
