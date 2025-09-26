
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = ['সব', 'সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল'];

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const filteredUniversities = useMemo(() => {
    return publicUniversities.filter((uni) => {
      const matchesCategory = selectedCategory === 'সব' || uni.category === selectedCategory;
      const matchesSearch =
        uni.nameBn.includes(searchTerm) ||
        uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="sticky top-[72px] sm:top-[88px] z-20 bg-background/80 backdrop-blur-md py-4 mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-muted-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredUniversities.map((uni) => (
              <motion.div
                key={uni.shortName}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <UniversityCard university={uni} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredUniversities.length === 0 && (
          <div className="text-center py-10 col-span-full">
            <p className="text-muted-foreground">কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
