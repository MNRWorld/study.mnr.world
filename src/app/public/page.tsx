
'use client';

import { useState } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ListFilter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const categories = ['সব', 'সাধারণ', 'কৃষি', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'মেডিকেল'];

  const filteredUniversities = publicUniversities
    .filter((uni) =>
      selectedCategory === 'সব' ? true : uni.category === selectedCategory
    )
    .filter((uni) =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center pt-8 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            পাবলিক বিশ্ববিদ্যালয়
          </h1>
          <p className="text-muted-foreground mt-2 text-base">
            বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার ও প্রশ্নব্যাংক খুঁজুন।
          </p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/90 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
          <div className="max-w-5xl mx-auto flex items-center gap-2">
            <div className="relative flex-grow">
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
                  <ListFilter className="mr-2 h-4 w-4" />
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

        <div className="mt-8 grid grid-cols-1 gap-4">
          {filteredUniversities.map((university) => (
            <UniversityCard key={university.shortName} university={university} />
          ))}
        </div>
        {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
                <p className="text-muted-foreground">দুঃখিত, আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
            </div>
        )}
      </div>
    </div>
  );
}
