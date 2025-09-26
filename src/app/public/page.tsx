
'use client'

import { BookOpenText } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export default function PublicUniversitiesPage() {
  const categories = [...new Set(publicUniversities.map((u) => u.category))];
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<BookOpenText className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public Universities"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও বিগত বছরের প্রশ্নব্যাংক একসাথে।"
          stats={[
            { value: '৫০+', label: 'বিশ্ববিদ্যালয়' },
            { value: 'গুচ্ছভুক্ত', label: '২২টি' },
            { value: 'সরাসরি', label: 'ভর্তি' },
          ]}
        />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto bg-muted/50">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mt-6 md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0">
                  {publicUniversities
                    .filter((u) => u.category === category)
                    .map((university) => (
                      <UniversityCard
                        key={university.shortName}
                        university={university}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
