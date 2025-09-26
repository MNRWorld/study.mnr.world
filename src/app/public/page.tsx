
'use client';

import { useState } from 'react';
import { University, BrainCircuit, FlaskConical, Atom, Building2, Stethoscope, Briefcase } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { Input } from '@/components/ui/input';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { motion } from 'framer-motion';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'সাধারণ': <University className="h-6 w-6" />,
  'প্রকৌশল': <BrainCircuit className="h-6 w-6" />,
  'বিজ্ঞান ও প্রযুক্তি': <Atom className="h-6 w-6" />,
  'কৃষি': <FlaskConical className="h-6 w-6" />,
  'মেডিকেল': <Stethoscope className="h-6 w-6" />,
  'অন্যান্য': <Briefcase className="h-6 w-6" />,
};

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = publicUniversities.filter(uni =>
    uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedUniversities = filteredUniversities.reduce((acc, uni) => {
    (acc[uni.category] = acc[uni.category] || []).push(uni);
    return acc;
  }, {} as { [key: string]: typeof publicUniversities });

  const categories = Object.keys(groupedUniversities).sort((a,b) => {
    const order = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];
    return order.indexOf(a) - order.indexOf(b);
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<Building2 className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয় সম্পর্কে জানুন এবং আপনার পছন্দের বিশ্ববিদ্যালয়ের ভর্তি তথ্য, প্রশ্নব্যাংক ও সার্কুলার সহজে খুঁজে নিন।"
          stats={[
            { value: '৫০+', label: 'বিশ্ববিদ্যালয়' },
            { value: 'বিভিন্ন', label: 'ক্যাটাগরি' },
            { value: 'লক্ষাধিক', label: 'শিক্ষার্থী' },
          ]}
        />

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 mb-8 sticky top-[84px] z-10"
        >
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
            />
          </div>
        </motion.div>

        <div className="space-y-12">
            {categories.map((category) => (
            <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-4 text-primary">
                    <span className="p-2 bg-primary/10 rounded-full mr-3">
                        {categoryIcons[category]}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{category}</h2>
                </div>
                <div className="space-y-4">
                {groupedUniversities[category].map((uni) => (
                    <UniversityCard key={uni.shortName} university={uni} />
                ))}
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
