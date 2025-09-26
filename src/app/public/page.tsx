
'use client';

import { useState, useMemo } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import UniversityCard from '@/components/UniversityCard';

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    if (!searchTerm) return publicUniversities;
    return publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const categorizedUniversities = useMemo(() => {
    return filteredUniversities.reduce((acc, uni) => {
      const category = uni.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(uni);
      return acc;
    }, {} as Record<string, University[]>);
  }, [filteredUniversities]);

  const categories = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-bengali gradient-text">
            পাবলিক বিশ্ববিদ্যালয়
          </h1>
          <p className="text-muted-foreground mt-2">
            আপনার পছন্দের বিশ্ববিদ্যালয় সম্পর্কে জানুন এবং ভর্তি পরীক্ষার জন্য প্রস্তুতি নিন।
          </p>
        </div>

        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-base bg-card focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
          />
        </div>

        <div className="space-y-8">
          {categories.map(category => {
            const universities = categorizedUniversities[category];
            if (!universities || universities.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary/20">{category}</h2>
                <div className="space-y-4">
                  {universities.map(uni => (
                    <UniversityCard key={uni.shortName} university={uni} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
