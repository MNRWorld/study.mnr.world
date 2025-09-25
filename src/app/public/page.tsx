
import { University } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';

function PublicUniversityPage() {
    return (
        <div className="font-bengali bg-background py-8">
            <div className="container mx-auto px-4">
                <PageHeaderCard
                    icon={<University className="h-14 w-14 text-primary" />}
                    title="পাবলিক বিশ্ববিদ্যালয়"
                    subtitle="Public Universities"
                    description="দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার ও অন্যান্য গুরুত্বপূর্ণ তথ্য এখানে পাবেন।"
                    stats={[]}
                />
                <div className="mt-8 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative">
                    <p className="text-muted-foreground">এই পেজের কনটেন্ট শীঘ্রই যুক্ত করা হবে।</p>
                </div>
            </div>
        </div>
    );
}

export default PublicUniversityPage;
