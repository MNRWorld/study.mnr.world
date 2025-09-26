
'use client';

import { useState } from 'react';
import { University as UniversityIcon, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import UniversityCard from '@/components/UniversityCard';
import { publicUniversities, University } from '@/lib/data/public-universities';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('সব');

  const categories = ['সব', 'সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল'];

  const filteredUniversities = publicUniversities.filter(university => {
    const matchesCategory = selectedCategory === 'সব' || university.category === selectedCategory;
    const matchesSearch = university.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          university.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          university.shortName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<UniversityIcon className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয় সম্পর্কে বিস্তারিত তথ্য, আসন সংখ্যা ও ভর্তি সহায়িকা এখানে পাবেন।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "৬+", label: "ক্যাটাগরি" },
            { value: "হাজারো", label: "আসন", tooltip: "আসন সংখ্যা পরিবর্তনশীল" },
          ]}
        />

        <div className="mt-8 sticky top-[88px] z-30 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4">
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

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
                {filteredUniversities.map((uni, index) => (
                    <motion.div
                        key={uni.shortName}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <UniversityCard university={uni} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        {filteredUniversities.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">
                কোনো বিশ্ববিদ্যালয় খুঁজে পাওয়া যায়নি।
            </p>
        )}
      </div>
    </div>
  );
}

export default PublicUniversityPage;
