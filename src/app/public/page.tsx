
'use client';

import { useState } from 'react';
import { University, publicUniversities } from '@/lib/data/public-universities';
import { motion } from 'framer-motion';
import { University as UniversityIcon, Microscope, Briefcase, Atom, GraduationCap, Cog, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'সাধারণ': <UniversityIcon className="h-8 w-8 text-primary" />,
  'প্রকৌশল': <Cog className="h-8 w-8 text-primary" />,
  'বিজ্ঞান ও প্রযুক্তি': <Atom className="h-8 w-8 text-primary" />,
  'মেডিকেল': <Microscope className="h-8 w-8 text-primary" />,
  'কৃষি': <GraduationCap className="h-8 w-8 text-primary" />,
  'অন্যান্য': <Briefcase className="h-8 w-8 text-primary" />,
};

const categoryDescriptions: { [key: string]: string } = {
    'সাধারণ': 'দেশের প্রধান সাধারণ বিশ্ববিদ্যালয়সমূহ।',
    'প্রকৌশল': 'বাংলাদেশের প্রধান প্রকৌশল বিশ্ববিদ্যালয়সমূহ।',
    'বিজ্ঞান ও প্রযুক্তি': 'বিজ্ঞান ও প্রযুক্তি গবেষণায় দেশের সেরা বিশ্ববিদ্যালয়গুলো।',
    'মেডিকেল': 'চিকিৎসা বিজ্ঞানে উচ্চশিক্ষার জন্য বিশেষায়িত প্রতিষ্ঠান।',
    'কৃষি': 'কৃষিভিত্তিক গবেষণার জন্য দেশের সেরা বিশ্ববিদ্যালয়গুলো।',
    'অন্যান্য': 'অন্যান্য বিশেষায়িত বিশ্ববিদ্যালয় ও প্রতিষ্ঠান।',
};


export default function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = publicUniversities.filter(university =>
    university.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedUniversities = filteredUniversities.reduce((acc, university) => {
    const category = university.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(university);
    return acc;
  }, {} as Record<string, University[]>);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<UniversityIcon className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তি তথ্য জানুন।"
          stats={[]}
        />

        <motion.div 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible"
            className="mt-8 w-full"
        >
          <div className="relative">
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </motion.div>

        <div className="mt-8">
          {Object.keys(groupedUniversities).sort((a, b) => {
            const order = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'মেডিকেল', 'কৃষি', 'অন্যান্য'];
            return order.indexOf(a) - order.indexOf(b);
          }).map(category => (
            <motion.div 
                key={category} 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                {categoryIcons[category]}
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                  <p className="text-muted-foreground">{categoryDescriptions[category]}</p>
                </div>
              </div>
              <div className="space-y-4">
                {groupedUniversities[category].map(university => (
                  <UniversityCard key={university.shortName} university={university} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
