
'use client';
import { useState, useMemo } from 'react';
import { publicUniversities, University } from '@/lib/data/public-universities';
import { University as UniversityIcon, Search, Cog, FlaskConical, Atom, Trees } from 'lucide-react';
import UniversityCard from '@/components/UniversityCard';

const categoryConfig: { [key: string]: { icon: React.ElementType, plural: string } } = {
  'প্রকৌশল': { icon: Cog, plural: 'প্রকৌশল বিশ্ববিদ্যালয়' },
  'সাধারণ': { icon: UniversityIcon, plural: 'সাধারণ বিশ্ববিদ্যালয়' },
  'বিজ্ঞান ও প্রযুক্তি': { icon: Atom, plural: 'বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়' },
  'কৃষি': { icon: Trees, plural: 'কৃষি বিশ্ববিদ্যালয়' },
  'মেডিকেল': { icon: FlaskConical, plural: 'মেডিকেল বিশ্ববিদ্যালয়' },
  'অন্যান্য': { icon: Atom, plural: 'অন্যান্য প্রতিষ্ঠান' },
};


export default function PublicUniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndGroupedUniversities = useMemo(() => {
    const filtered = publicUniversities.filter(uni =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.reduce((acc, uni) => {
      (acc[uni.category] = acc[uni.category] || []).push(uni);
      return acc;
    }, {} as Record<string, University[]>);
  }, [searchTerm]);

  const sortedCategories = Object.keys(filteredAndGroupedUniversities).sort((a, b) => {
    const order = ['প্রকৌশল', 'সাধারণ', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];
    return order.indexOf(a) - order.indexOf(b);
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            id="searchBox"
            type="text"
            placeholder="বিশ্ববিদ্যালয়ের নাম খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border bg-card rounded-full shadow-md focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
          />
        </div>

        {sortedCategories.map(category => (
          <div key={category} className="mb-10 box">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center">
              {React.createElement(categoryConfig[category]?.icon || UniversityIcon, { className: "mr-3 text-primary" })}
              {category}
            </h3>
             <p className="text-muted-foreground mb-4">
               বাংলাদেশে {categoryConfig[category]?.plural || category} মোট {filteredAndGroupedUniversities[category].length}টি
            </p>
            <div className="space-y-4">
              {filteredAndGroupedUniversities[category].map(uni => (
                <UniversityCard key={uni.shortName} university={uni} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
