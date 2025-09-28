
'use client';

import { useState, useMemo } from 'react';
import { University, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';

function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    if (!searchTerm) return publicUniversities;
    return publicUniversities.filter(uni => 
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়, তাদের ভর্তি তথ্য, প্রশ্নব্যাংক ও অন্যান্য প্রয়োজনীয় তথ্য এখানে একসাথে পাবেন।"
          stats={[
            { value: "৪০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            { value: "একসাথে", label: "সকল তথ্য" }
          ]}
        />
        
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <h2 className="text-xl font-bold text-center mb-4 text-foreground">বিশ্ববিদ্যালয় খুঁজুন</h2>
          <div className="relative">
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 text-base"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredUniversities.map((uni, index) => (
              <UniversityCard key={uni.shortName || index} university={uni} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredUniversities.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8 p-8 bg-card border border-border rounded-xl"
          >
            <p className="text-lg text-muted-foreground">দুঃখিত, আপনার সার্চের সাথে মিলে এমন কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default PublicPage;
