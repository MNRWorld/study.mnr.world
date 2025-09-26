'use client';

import { useState } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = ['সব', 'সাধারণ', 'কৃষি', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'মেডিকেল'];

export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const filteredUniversities = publicUniversities.filter((uni) => {
    const matchesCategory = selectedCategory === 'সব' || uni.category === selectedCategory;
    const matchesSearch =
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
          <p className="text-muted-foreground mt-2">দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের তথ্য এক জায়গায়</p>
        </div>

        <div className="sticky top-[60px] sm:top-[76px] z-40 bg-background/80 backdrop-blur-lg py-4 -mx-4 px-4 border-b border-border">
            <div className="container mx-auto px-4 flex items-center gap-4">
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
                        <DropdownMenuLabel>ক্যাটাগরি সিলেক্ট করুন</DropdownMenuLabel>
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUniversities.map((uni) => (
            <UniversityCard key={uni.shortName} university={uni} />
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">দুঃখিত, কোনো বিশ্ববিদ্যালয় খুঁজে পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
