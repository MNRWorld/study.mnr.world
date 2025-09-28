
'use client';

import React, { useState, useEffect } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const universitiesByCategory = filteredUniversities.reduce((acc, university) => {
    const { category } = university;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(university);
    return acc;
  }, {} as Record<string, University[]>);

  const categoryOrder = ["সাধারণ", "কৃষি", "প্রকৌশল", "বিজ্ঞান ও প্রযুক্তি", "মেডিকেল"];
  const sortedCategories = Object.keys(universitiesByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
          <p className="text-muted-foreground mt-2">
            দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, প্রশ্নব্যাংক ও সর্বশেষ আপডেট জানুন।
          </p>
        </motion.div>

        <div className="sticky top-[76px] z-40 bg-background py-3">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
                />
            </div>
        </div>

        <div className="mt-8 space-y-8">
          {sortedCategories.length > 0 ? (
            sortedCategories.map(category => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">{category}</h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {universitiesByCategory[category].map(university => (
                    <UniversityCard key={university.shortName} university={university} />
                  ))}
                </motion.div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">দুঃখিত, আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
