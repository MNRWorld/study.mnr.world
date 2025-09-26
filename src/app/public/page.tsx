
'use client';

import { useState } from 'react';
import { University, publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const categories = ['সব', ...Array.from(new Set(publicUniversities.map(u => u.category)))];

  const filteredUniversities = publicUniversities.filter(uni => {
    const matchesCategory = selectedCategory === 'সব' || uni.category === selectedCategory;
    const matchesSearch = uni.nameBn.includes(searchTerm) || uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) || uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-bengali bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-8 pb-4"
        >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
            <p className="text-muted-foreground mt-2">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তির সর্বশেষ তথ্য জানুন।</p>
        </motion.div>

        <div className="sticky top-[68px] sm:top-[84px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="relative mb-4 max-w-4xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full text-sm h-8"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            <AnimatePresence>
                {filteredUniversities.map((uni, index) => (
                    <motion.div
                        key={uni.shortName}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: (index % 12) * 0.05 }}
                    >
                        <UniversityCard university={uni} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
