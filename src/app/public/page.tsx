
'use client';

import React, { useState } from 'react';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { University as UniversityIcon, Atom, FlaskConical, Rocket, BookHeart } from 'lucide-react';

const categoryConfig: { [key: string]: { description: string; icon: React.ElementType } } = {
  'সাধারণ': {
    description: 'দেশের প্রধান বিশ্ববিদ্যালয়গুলো এখানে পাওয়া যাবে।',
    icon: UniversityIcon
  },
  'প্রকৌশল': {
    description: 'প্রকৌশল ও প্রযুক্তি শিক্ষার জন্য বিশেষায়িত বিশ্ববিদ্যালয়।',
    icon: Rocket
  },
  'বিজ্ঞান ও প্রযুক্তি': {
    description: 'বিজ্ঞান ও প্রযুক্তি গবেষণায় দেশের অন্যতম সেরা বিশ্ববিদ্যালয়গুলো।',
    icon: Atom
  },
  'কৃষি': {
    description: 'কৃষি বিষয়ক উচ্চশিক্ষার সেরা প্রতিষ্ঠানসমূহ।',
    icon: FlaskConical
  },
  'মেডিকেল': {
    description: 'চিকিৎসাশাস্ত্রে উচ্চতর গবেষণা ও ডিগ্রির জন্য দেশের প্রধান প্রতিষ্ঠান।',
    icon: BookHeart
  },
  'অন্যান্য': {
    description: 'অন্যান্য বিশেষায়িত বিশ্ববিদ্যালয়সমূহ।',
    icon: UniversityIcon
  }
};

export default function PublicUniversitiesPage() {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  const filteredUniversities = publicUniversities.filter(u =>
    u.nameBn.includes(query) ||
    u.nameEn.toLowerCase().includes(query) ||
    u.shortName.toLowerCase().includes(query)
  );

  const universitiesByCategory = filteredUniversities.reduce((acc, university) => {
    const { category } = university;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(university);
    return acc;
  }, {} as { [key: string]: typeof publicUniversities });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          id="searchBox"
          type="text"
          placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে সার্চ করুন..."
          onChange={handleSearch}
          className="w-full max-w-lg mx-auto"
        />
      </div>

      <div className="space-y-12">
        {Object.keys(universitiesByCategory).map(category => (
          <div key={category} className="mb-10 box">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center">
              {React.createElement(categoryConfig[category]?.icon || UniversityIcon, { className: "mr-3 text-primary" })}
              {category}
            </h3>
             <p className="text-muted-foreground mb-4">
              {categoryConfig[category]?.description || ''}
             </p>
            <div className="space-y-4">
              {universitiesByCategory[category].map(uni => (
                <UniversityCard key={uni.shortName} university={uni} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
