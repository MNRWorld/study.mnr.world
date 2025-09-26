
'use client';

import { useState } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { GraduationCap } from 'lucide-react';

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = publicUniversities.filter(uni =>
    uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedUniversities = filteredUniversities.reduce((acc, uni) => {
    const category = uni.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(uni);
    return acc;
  }, {} as Record<string, University[]>);

  const categoryOrder = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];

  return (
    <div className="font-bengali bg-background py-8">
        <div className="container mx-auto px-4">
        
        <div className="text-center mt-8 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
                পাবলিক বিশ্ববিদ্যালয়
            </h1>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
            আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তি তথ্য জানুন
            </p>
        </div>


        <div className="relative max-w-lg mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
            />
        </div>

        <div className="mt-12 space-y-8">
          {categoryOrder.map(category => {
            const universities = groupedUniversities[category];
            if (!universities || universities.length === 0) {
              return null;
            }
            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-4 text-center">{category}</h2>
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
                  {universities.map(uni => (
                    <UniversityCard key={uni.shortName} university={uni} />
                  ))}
                </div>
              </div>
            );
          })}
           {filteredUniversities.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
              আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
