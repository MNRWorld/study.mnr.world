
'use client';

import React, { useState, useMemo } from 'react';
import { University, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { Input } from '@/components/ui/input';
import { publicUniversities, University as UniversityType } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { motion, AnimatePresence } from 'framer-motion';

const PublicUniversityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    if (!searchTerm) return publicUniversities;
    return publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedUniversities = useMemo(() => {
    return filteredUniversities.reduce((acc, uni) => {
      const category = uni.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(uni);
      return acc;
    }, {} as Record<string, UniversityType[]>);
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
        <PageHeaderCard
          icon={<University className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়, মেডিকেল কলেজ, এবং প্রকৌশল বিশ্ববিদ্যালয়ের তথ্য ও ভর্তি সহায়িকা এখানে পাবেন।"
          stats={[
            { value: '৫০+', label: 'বিশ্ববিদ্যালয়' },
            { value: '১০০০+', label: 'বিষয়' },
            { value: 'লক্ষাধিক', label: 'আসন', tooltip: 'প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়' },
          ]}
        />

        <div className="sticky top-[76px] z-40">
          <div className="relative mt-8">
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
          <AnimatePresence>
            {categories.map(category => (
              groupedUniversities[category] && groupedUniversities[category].length > 0 && (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                    {category}
                  </h2>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {groupedUniversities[category].map(uni => (
                      <UniversityCard key={uni.shortName} university={uni} />
                    ))}
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PublicUniversityPage;
