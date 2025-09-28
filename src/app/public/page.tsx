
'use client';

import { Building2, GraduationCap, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import UniversityCard from '@/components/UniversityCard';
import { publicUniversities } from '@/lib/data/public-universities';
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredUniversities = useMemo(() => {
    return publicUniversities.filter(uni => {
      const matchesCategory = selectedCategory === 'all' || uni.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
                            uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const universityCategories = useMemo(() => {
    const categories = ['all', ...Array.from(new Set(publicUniversities.map(u => u.category)))];
    return categories.map(category => {
        let label = '';
        switch(category) {
            case 'all': label = 'সব'; break;
            case 'সাধারণ': label = 'সাধারণ'; break;
            case 'প্রকৌশল': label = 'প্রকৌশল'; break;
            case 'বিজ্ঞান ও প্রযুক্তি': label = 'বিজ্ঞান ও প্রযুক্তি'; break;
            case 'কৃষি': label = 'কৃষি'; break;
            case 'মেডিকেল': label = 'মেডিকেল'; break;
            default: label = category;
        }
        return { value: category, label };
    });
  }, []);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<Building2 className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University Admission"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও বিগত বছরের প্রশ্ন সম্পর্কে জানুন।"
          stats={[
            { value: '৫০+', label: 'বিশ্ববিদ্যালয়' },
            { value: 'বিভিন্ন', label: 'গ্রুপ' },
            { value: 'হাজারো', label: 'আসন', tooltip: 'আসন সংখ্যা পরিবর্তনশীল' },
          ]}
        />

        <div className="mt-8 p-4 sm:p-6 bg-card border border-border rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="বিশ্ববিদ্যালয়ের নাম খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
             <GraduationCap className="h-5 w-5 text-muted-foreground mr-2" />
            {universityCategories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4">
          {filteredUniversities.map((uni, index) => (
            <div 
              key={uni.shortName}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <UniversityCard university={uni} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
