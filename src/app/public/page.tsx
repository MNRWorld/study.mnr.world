'use client';

import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = ["সব", "সাধারণ", "কৃষি", "প্রকৌশল", "বিজ্ঞান ও প্রযুক্তি", "মেডিকেল"];

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(publicUniversities);

  useEffect(() => {
    let universities = publicUniversities;

    if (selectedCategory !== 'সব') {
      universities = universities.filter(uni => uni.category === selectedCategory);
    }

    if (searchTerm) {
      universities = universities.filter(uni =>
        uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUniversities(universities);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center py-8">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">পাবলিক বিশ্ববিদ্যালয়</h1>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের তথ্য এক জায়গায়।</p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="flex gap-4 items-center">
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
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  ফিল্টার
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>ক্যাটাগরি</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                  {categories.map((category) => (
                    <DropdownMenuRadioItem key={category} value={category}>
                      {category}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredUniversities.map((uni, index) => (
              <motion.div
                key={uni.shortName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <UniversityCard university={uni} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">দুঃখিত, আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
