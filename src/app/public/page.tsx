
'use client';

import { useState } from 'react';
import { Building, University, FlaskConical, Rocket, Atom, Search } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { publicUniversities, University as UniversityType } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { Input } from '@/components/ui/input';

function PublicPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'সাধারণ', icon: <University className="mr-2" />, category: 'সাধারণ' },
    { name: 'প্রকৌশল', icon: <Rocket className="mr-2" />, category: 'প্রকৌশল' },
    { name: 'বিজ্ঞান ও প্রযুক্তি', icon: <Atom className="mr-2" />, category: 'বিজ্ঞান ও প্রযুক্তি' },
    { name: 'মেডিকেল', icon: <FlaskConical className="mr-2" />, category: 'মেডিকেল' },
    { name: 'কৃষি', icon: <Building className="mr-2" />, category: 'কৃষি' },
    { name: 'অন্যান্য', icon: <Building className="mr-2" />, category: 'অন্যান্য' },
  ];

  const filteredUniversities = publicUniversities.filter(uni =>
    uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<University className="h-14 w-14 text-primary" />}
            title="পাবলিক বিশ্ববিদ্যালয়"
            subtitle="Public University"
            description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও প্রয়োজনীয় লিঙ্ক এখানে পাবেন।"
            stats={[
                { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
                { value: "বিভিন্ন", label: "ক্যাটাগরি" },
                { value: "লক্ষাধিক", label: "শিক্ষার্থী" }
            ]}
        />

        <div className="mt-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
                type="text"
                placeholder="বিশ্ববিদ্যালয়ের নাম দিয়ে খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-base focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm"
            />
        </div>
        
        {categories.map(cat => {
          const universitiesInCategory = filteredUniversities.filter(uni => uni.category === cat.category);
          if (universitiesInCategory.length === 0 && searchTerm) return null;

          return (
            <div key={cat.category} className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    {cat.icon} {cat.name}
                </h2>
                <div className="space-y-4">
                    {universitiesInCategory.map(uni => (
                        <UniversityCard key={uni.shortName} university={uni} />
                    ))}
                    {universitiesInCategory.length === 0 && !searchTerm && publicUniversities.filter(uni => uni.category === cat.category).map(uni => (
                        <UniversityCard key={uni.shortName} university={uni} />
                    ))}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PublicPage;
