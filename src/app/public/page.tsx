
'use client';

import { useState, useMemo } from 'react';
import { University, publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search, Building, Rocket, FlaskConical, Atom, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryIcons: { [key: string]: React.ReactElement } = {
  'সাধারণ': <GraduationCap className="h-6 w-6 text-primary" />,
  'প্রকৌশল': <Rocket className="h-6 w-6 text-primary" />,
  'বিজ্ঞান ও প্রযুক্তি': <Atom className="h-6 w-6 text-primary" />,
  'কৃষি': <FlaskConical className="h-6 w-6 text-primary" />,
  'মেডিকেল': <FlaskConical className="h-6 w-6 text-primary" />,
  'অন্যান্য': <Building className="h-6 w-6 text-primary" />,
};

const categoryDescriptions: { [key: string]: string } = {
  'সাধারণ': 'সাধারণ বিশ্ববিদ্যালয়সমূহ',
  'প্রকৌশল': 'বাংলাদেশের প্রধান প্রকৌশল বিশ্ববিদ্যালয়সমূহ।',
  'বিজ্ঞান ও প্রযুক্তি': 'বিজ্ঞান ও প্রযুক্তি বিষয়ক বিশ্ববিদ্যালয়সমূহ।',
  'কৃষি': 'কৃষি এবং সংশ্লিষ্ট বিষয়ে বিশেষায়িত বিশ্ববিদ্যালয়।',
  'মেডিকেল': 'মেডিকেল ও স্বাস্থ্য বিজ্ঞান বিষয়ক বিশ্ববিদ্যালয়।',
  'অন্যান্য': 'অন্যান্য বিশেষায়িত বিশ্ববিদ্যালয়সমূহ।',
}

export default function PublicUniversityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = useMemo(() => {
    if (!searchTerm) {
      return publicUniversities;
    }
    return publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedUniversities = useMemo(() => {
    return filteredUniversities.reduce((acc, university) => {
      const { category } = university;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(university);
      return acc;
    }, {} as Record<string, University[]>);
  }, [filteredUniversities]);

  const sortedCategories = useMemo(() => {
    const order = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];
    return Object.keys(groupedUniversities).sort((a, b) => {
        const indexA = order.indexOf(a);
        const indexB = order.indexOf(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
  }, [groupedUniversities]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground">পাবলিক বিশ্ববিদ্যালয়</h1>
            <p className="text-muted-foreground mt-2">আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন এবং ভর্তি তথ্য জানুন।</p>
        </div>

        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
          />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedCategories.map(category => (
            <motion.div key={category} variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                {categoryIcons[category]}
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                  <p className="text-muted-foreground">{categoryDescriptions[category]}</p>
                </div>
              </div>
              <div className="space-y-4">
                {groupedUniversities[category].map(uni => (
                  <UniversityCard key={uni.shortName} university={uni} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
