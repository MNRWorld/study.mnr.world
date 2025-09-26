
'use client';

import { useState } from 'react';
import { Building, Info, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';

function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredUniversities = publicUniversities.filter(uni => {
    const matchesSearch = uni.nameBn.includes(searchTerm) || uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || uni.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(publicUniversities.map(u => u.category)))];

  const categoryNames: { [key: string]: string } = {
    'all': 'সব',
    'সাধারণ': 'সাধারণ',
    'প্রকৌশল': 'প্রকৌশল',
    'বিজ্ঞান ও প্রযুক্তি': 'বিজ্ঞান ও প্রযুক্তি',
    'কৃষি': 'কৃষি',
    'মেডিকেল': 'মেডিকেল'
  };


  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<Building className="h-14 w-14 text-primary" />}
            title="পাবলিক বিশ্ববিদ্যালয় ভর্তি"
            subtitle="Public University Admission"
            description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও গুরুত্বপূর্ণ লিঙ্ক এখানে পাবেন।"
            stats={[
                { value: "۵০+", label: "বিশ্ববিদ্যালয়" },
                { value: "বিভিন্ন", label: "ক্যাটাগরি" },
                { value: "আপডেটেড", label: "তথ্য", tooltip: "সর্বশেষ তথ্য অনুযায়ী" }
            ]}
            button={{ href: "#Info", label: "মূল তথ্য", icon: <Info size={16} /> }}
        />

        <div className="mt-8">
          <div className="relative w-full mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm bg-card"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {categories.map(category => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${selectedCategory === category ? 'bg-primary text-primary-foreground shadow-md' : 'bg-card text-muted-foreground hover:bg-accent'}`}
                >
                {categoryNames[category] || category}
                </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUniversities.map((uni) => (
              <UniversityCard key={uni.shortName} university={uni} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default PublicPage;
