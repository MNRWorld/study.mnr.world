
'use client';

import React, { useState, useEffect } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(publicUniversities);

  useEffect(() => {
    const results = publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(results);
  }, [searchTerm]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const groupedUniversities = filteredUniversities.reduce((acc, university) => {
    const { category } = university;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(university);
    return acc;
  }, {} as Record<string, University[]>);

  const categoryOrder: (keyof typeof groupedUniversities)[] = [
    'সাধারণ',
    'কৃষি',
    'প্রকৌশল',
    'বিজ্ঞান ও প্রযুক্তি',
    'মেডিকেল',
  ];

  const sortedCategories = categoryOrder.filter(category => groupedUniversities[category]);


  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mt-20 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
            <p className="text-muted-foreground mt-2">বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের তথ্য একসাথে</p>
        </div>

        <div className="sticky top-[76px] z-40 py-3">
          <div className="relative w-full max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                  type="text"
                  placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card rounded-full"
              />
          </div>
        </div>
        
        <div className="mt-8">
            {sortedCategories.map(category => (
                <div key={category} className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">{category} ({groupedUniversities[category].length})</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-4"
                    >
                        <AnimatePresence>
                        {groupedUniversities[category].map(uni => (
                            <UniversityCard key={uni.shortName} university={uni} />
                        ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            ))}
            {filteredUniversities.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    <p>কোনো বিশ্ববিদ্যালয় খুঁজে পাওয়া যায়নি।</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}

