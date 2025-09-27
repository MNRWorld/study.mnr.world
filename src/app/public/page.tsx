
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from 'lucide-react';

const categories = ['সব', 'সাধারণ', 'কৃষি', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'মেডিকেল'];

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(publicUniversities);

  useEffect(() => {
    const results = publicUniversities.filter((uni) => {
      const matchesCategory = selectedCategory === 'সব' || uni.category === selectedCategory;
      const matchesSearch =
        uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredUniversities(results);
  }, [searchTerm, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
          <p className="text-muted-foreground mt-2">দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের তথ্য এক জায়গায়।</p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="container mx-auto flex gap-2 sm:gap-4 items-center">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <Filter className="mr-2 h-4 w-4" />
                  ফিল্টার
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
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

        <div className="text-sm text-muted-foreground my-4">
          মোট {publicUniversities.length}টি বিশ্ববিদ্যালয়ের মধ্যে {filteredUniversities.length}টি দেখানো হচ্ছে
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.shortName} university={uni} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
