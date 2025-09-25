
'use client';

import { useState } from 'react';
import { University, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { Input } from '@/components/ui/input';
import { publicUniversities } from '@/lib/data/public-universities';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PublicUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUniversities = publicUniversities.filter(uni =>
    uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.07,
        },
    },
  };

  const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
          y: 0,
          opacity: 1,
          transition: {
              type: 'spring',
              stiffness: 100,
          },
      },
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<University className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public Universities"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়গুলোর তালিকা ও তাদের ভর্তি সংক্রান্ত তথ্য এখানে পাবেন।"
          stats={[]}
        />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    id="searchBox"
                    type="text"
                    placeholder="বিশ্ববিদ্যালয়ের নাম লিখে খুঁজুন..."
                    className="w-full pl-10 text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredUniversities.map((uni) => (
            <motion.div key={uni.shortName} variants={itemVariants} className="box">
              <Link href={uni.link} className="block bg-card border border-border rounded-xl p-5 shadow-lg hover:shadow-primary/20 hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-foreground">{uni.nameBn}</h3>
                  <h4 className="text-sm text-muted-foreground">{uni.nameEn} ({uni.shortName})</h4>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {filteredUniversities.length === 0 && (
            <div className="text-center mt-8 text-muted-foreground">
                কোনো ফলাফল পাওয়া যায়নি।
            </div>
        )}
      </div>
    </div>
  );
}
