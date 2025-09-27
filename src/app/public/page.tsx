
'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Filter, X } from 'lucide-react';

const categories = [
  'সব',
  'সাধারণ',
  'কৃষি',
  'প্রকৌশল',
  'বিজ্ঞান ও প্রযুক্তি',
  'মেডিকেল',
];

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(publicUniversities);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    const results = publicUniversities.filter((uni) => {
      const matchesCategory =
        selectedCategory === 'সব' || uni.category === selectedCategory;
      const matchesSearch =
        uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredUniversities(results);
  }, [searchTerm, selectedCategory]);

  const universityCount = useMemo(() => {
    return filteredUniversities.length;
  }, [filteredUniversities]);
  
  const totalUniversities = useMemo(() => {
    return publicUniversities.length;
  }, []);

  const clearFilter = () => {
    setSelectedCategory('সব');
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            পাবলিক বিশ্ববিদ্যালয়
          </h1>
          <p className="text-muted-foreground mt-2">
            বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য এক জায়গায়।
          </p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="container mx-auto flex items-center gap-2">
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
                <DropdownMenuRadioGroup
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  {categories.map((category) => (
                    <DropdownMenuRadioItem key={category} value={category}>
                      {category}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <AnimatePresence>
                {selectedCategory !== 'সব' && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="container mx-auto mt-2 flex items-center justify-start"
                    >
                        <div className="flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                            <span>ফিল্টার: {selectedCategory}</span>
                            <button onClick={clearFilter} className="rounded-full hover:bg-primary/20 p-0.5">
                                <X size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
        <div className="text-sm text-muted-foreground mt-4 text-center">
            {`মোট ${totalUniversities}টি বিশ্ববিদ্যালয়ের মধ্যে ${universityCount}টি দেখানো হচ্ছে`}
        </div>

        <motion.div
          key={selectedCategory + searchTerm}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
        >
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((uni) => (
              <UniversityCard key={uni.shortName} university={uni} />
            ))
          ) : (
            <p className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground mt-8">
              দুঃখিত, কোনো বিশ্ববিদ্যালয় খুঁজে পাওয়া যায়নি।
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
