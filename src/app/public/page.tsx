
'use client';

import { useState } from 'react';
import { University, BrainCircuit, FlaskConical, Atom, ShieldCheck, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { publicUniversities } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const categories = [
  { name: 'সাধারণ', icon: <University /> },
  { name: 'প্রকৌশল', icon: <BrainCircuit /> },
  { name: 'বিজ্ঞান ও প্রযুক্তি', icon: <Atom /> },
  { name: 'কৃষি', icon: <FlaskConical /> },
  { name: 'মেডিকেল', icon: <ShieldCheck /> },
  { name: 'অন্যান্য', icon: <Building /> },
];

export default function PublicUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = publicUniversities.filter(
    (uni) =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-base bg-card focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
          />
        </div>

        {categories.map((category) => {
          const universitiesInCategory = filteredUniversities.filter(
            (uni) => uni.category === category.name
          );

          if (universitiesInCategory.length === 0) return null;

          return (
            <motion.div 
              key={category.name} 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/20 flex items-center gap-2">
                {category.icon} {category.name}
              </h2>
              <div className="space-y-4">
                {universitiesInCategory.map((uni) => (
                  <UniversityCard key={uni.shortName} university={uni} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
