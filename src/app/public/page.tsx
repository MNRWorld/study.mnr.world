
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ListFilter } from 'lucide-react';
import UniversityCard from '@/components/UniversityCard';
import { publicUniversities, University } from '@/lib/data/public-universities';

const universityCategories = [
  'সব',
  'সাধারণ',
  'কৃষি',
  'প্রকৌশল',
  'বিজ্ঞান ও প্রযুক্তি',
  'মেডিকেল',
];

export default function PublicUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const filteredUniversities = publicUniversities.filter((uni: University) => {
    const matchesCategory =
      selectedCategory === 'সব' || uni.category === selectedCategory;
    const matchesSearch =
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            পাবলিক বিশ্ববিদ্যালয়
          </h1>
          <p className="text-muted-foreground mt-2">
            আপনার পছন্দের পাবলিক বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তির তথ্য জানুন।
          </p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <ListFilter className="h-5 w-5 text-muted-foreground" />
              {universityCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4">
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.shortName} university={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}
