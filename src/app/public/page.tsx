
'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    return publicUniversities.filter((uni) =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const universitiesByCategory = useMemo(() => {
    return filteredUniversities.reduce((acc, university) => {
      const { category } = university;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(university);
      return acc;
    }, {} as Record<string, University[]>);
  }, [filteredUniversities]);

  const categories = ['সাধারণ', 'কৃষি', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'মেডিকেল'];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
            <p className="text-muted-foreground mt-2 text-base">বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের তথ্য এক জায়গায়।</p>
        </div>

        <div className="sticky top-[76px] z-40">
          <div className="relative w-full max-w-lg mx-auto bg-card/80 backdrop-blur-lg border rounded-full shadow-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                  type="text"
                  placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 h-12 text-base focus-visible:ring-primary focus-visible:ring-offset-2 bg-transparent border-none rounded-full"
              />
          </div>
        </div>

        {filteredUniversities.length > 0 ? (
            categories.map(category => (
                universitiesByCategory[category] && universitiesByCategory[category].length > 0 && (
                    <div key={category} className="mt-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary/50 inline-block">{category}</h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {universitiesByCategory[category].map(university => (
                                <UniversityCard key={university.shortName} university={university} />
                            ))}
                        </motion.div>
                    </div>
                )
            ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
