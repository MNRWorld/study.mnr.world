
'use client';

import React, { useState, useMemo } from 'react';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search, University as UniversityIcon, Cog, FlaskConical, Atom, Leaf, Stethoscope, Star, Building } from 'lucide-react';

const categoryConfig: { [key: string]: { icon: React.ElementType, description: string } } = {
  'প্রকৌশল': { icon: Cog, description: 'বাংলাদেশের প্রধান প্রকৌশল বিশ্ববিদ্যালয়সমূহ।' },
  'সাধারণ': { icon: UniversityIcon, description: 'সাধারণ বিষয়গুলোতে উচ্চশিক্ষার জন্য বিশ্ববিদ্যালয়সমূহ।' },
  'বিজ্ঞান ও প্রযুক্তি': { icon: Atom, description: 'বিজ্ঞান ও প্রযুক্তি গবেষণায় নিবেদিত বিশ্ববিদ্যালয়সমূহ।' },
  'কৃষি': { icon: Leaf, description: 'কৃষি, ভেটেরিনারি ও সংশ্লিষ্ট বিষয়ে বিশেষায়িত বিশ্ববিদ্যালয়।' },
  'মেডিকেল': { icon: Stethoscope, description: 'মেডিকেল, ডেন্টাল ও স্বাস্থ্য বিষয়ক শিক্ষা প্রতিষ্ঠান।' },
  'অন্যান্য': { icon: Star, description: 'বিশেষায়িত ও অন্যান্য গুরুত্বপূর্ণ শিক্ষা প্রতিষ্ঠান।' },
};


export default function PublicUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    const lowercasedQuery = searchTerm.toLowerCase().trim();
    if (!lowercasedQuery) {
      return publicUniversities;
    }
    return publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(lowercasedQuery) ||
      uni.nameEn.toLowerCase().includes(lowercasedQuery) ||
      uni.shortName.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchTerm]);

  const universitiesByCategory = useMemo(() => {
    return filteredUniversities.reduce((acc, uni) => {
      const category = uni.category || 'অন্যান্য';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(uni);
      return acc;
    }, {} as Record<string, typeof publicUniversities>);
  }, [filteredUniversities]);
  
  const orderedCategories = Object.keys(categoryConfig).filter(category => universitiesByCategory[category]);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
          <p className="text-muted-foreground mt-2">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তি তথ্য জানুন।</p>
        </div>

        <div className="relative mb-8 max-w-lg mx-auto">
          <Input
            id="searchBox"
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
            className="pl-10 h-12 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        
        {orderedCategories.length > 0 ? (
          <div className="space-y-12">
            {orderedCategories.map(category => (
              <div key={category} className="box">
                <div className="flex items-center mb-4">
                    {React.createElement(categoryConfig[category]?.icon || UniversityIcon, { className: "mr-3 h-7 w-7 text-primary" })}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {category}
                        </h3>
                        <p className="text-muted-foreground text-sm">{categoryConfig[category]?.description}</p>
                    </div>
                </div>
                <div className="space-y-4">
                  {universitiesByCategory[category].map(uni => (
                    <UniversityCard key={uni.shortName} university={uni} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">দুঃখিত, আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
