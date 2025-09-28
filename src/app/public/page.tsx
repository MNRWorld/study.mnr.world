
'use client';

import { useState } from 'react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { publicUniversities, University } from '@/lib/data/public-universities';
import UniversityCard from '@/components/UniversityCard';
import { University as UniversityIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

function PublicPage() {
  const [filter, setFilter] = useState('সব');

  const categories = ['সব', ...Array.from(new Set(publicUniversities.map(u => u.category)))];

  const filteredUniversities = filter === 'সব'
    ? publicUniversities
    : publicUniversities.filter(u => u.category === filter);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<UniversityIcon className="h-14 w-14 text-primary" />}
            title="পাবলিক বিশ্ববিদ্যালয় ভর্তি"
            subtitle="Public University Admission"
            description="দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, প্রশ্নব্যাংক ও সর্বশেষ আপডেট এক জায়গায়।"
            stats={[
                { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
                { value: "বিভিন্ন", label: "ক্যাটাগরি" },
                { value: "হাজারো", label: "আসন", tooltip: "আসন সংখ্যা পরিবর্তনশীল" }
            ]}
        />

        <div className="my-8 flex justify-center flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground border border-border hover:bg-accent'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni, index) => (
             <div
              key={uni.shortName}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            >
                <UniversityCard university={uni} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicPage;
