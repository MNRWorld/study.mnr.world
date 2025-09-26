
'use client';

import React, { useState, useMemo } from 'react';
import { School, Search, University as UniversityIcon, FlaskConical, Rocket, Atom } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { publicUniversities, University } from '@/lib/data/public-universities';

function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const filtered = publicUniversities.filter(
      (uni) =>
        uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const grouped: { [key: string]: University[] } = {
      'সাধারণ': [],
      'প্রকৌশল': [],
      'বিজ্ঞান ও প্রযুক্তি': [],
      'কৃষি': [],
      'মেডিকেল': [],
      'অন্যান্য': [],
    };

    filtered.forEach((uni) => {
      if (grouped[uni.category]) {
        grouped[uni.category].push(uni);
      } else {
        grouped['অন্যান্য'].push(uni);
      }
    });
    return grouped;
  }, [searchTerm]);

  const categoryOrder: (keyof typeof categories)[] = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];
  
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'সাধারণ': <UniversityIcon className="mr-2 h-6 w-6 text-primary" />,
    'প্রকৌশল': <Rocket className="mr-2 h-6 w-6 text-primary" />,
    'বিজ্ঞান ও প্রযুক্তি': <Atom className="mr-2 h-6 w-6 text-primary" />,
    'কৃষি': <FlaskConical className="mr-2 h-6 w-6 text-primary" />,
    'মেডিকেল': <FlaskConical className="mr-2 h-6 w-6 text-primary" />,
    'অন্যান্য': <School className="mr-2 h-6 w-6 text-primary" />,
  }

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<School className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও প্রয়োজনীয় লিঙ্ক এখানে পাবেন।"
          stats={[
            { value: '৫০+', label: 'বিশ্ববিদ্যালয়' },
            { value: '৫০০+', label: 'বিষয়' },
            { value: 'লক্ষাধিক', label: 'আসন', tooltip: 'প্রতি বছর আসন সংখ্যা পরিবর্তন সাপেক্ষ' },
          ]}
        />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
            />
          </div>

          <div className="space-y-8">
            {categoryOrder.map((category) =>
              categories[category].length > 0 ? (
                <div key={category}>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/20 flex items-center">
                    {categoryIcons[category]}
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {categories[category].map((uni) => (
                      <UniversityCard key={uni.shortName} university={uni} />
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicPage;
