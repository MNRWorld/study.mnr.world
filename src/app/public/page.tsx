
'use client';

import { useState, useMemo } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    return publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center my-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">পাবলিক বিশ্ববিদ্যালয়</h1>
          <p className="mt-2 text-muted-foreground">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তি তথ্য জানুন</p>
        </div>

        <div className="relative mb-8 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.shortName} university={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}
