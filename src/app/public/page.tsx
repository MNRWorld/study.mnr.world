
import { University as UniversityIcon, Atom, FlaskConical, Rocket } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import UniversityCard from '@/components/UniversityCard';
import { publicUniversities } from '@/lib/data/public-universities';

export default function PublicUniversitiesPage() {
  const categories = ['সাধারণ', 'প্রকৌশল', 'বিজ্ঞান ও প্রযুক্তি', 'কৃষি', 'মেডিকেল', 'অন্যান্য'];
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'সাধারণ': <UniversityIcon className="mr-2 h-5 w-5" />,
    'বিজ্ঞান ও প্রযুক্তি': <Atom className="mr-2 h-5 w-5" />,
    'কৃষি': <FlaskConical className="mr-2 h-5 w-5" />,
    'প্রকৌশল': <Rocket className="mr-2 h-5 w-5" />,
    'মেডিকেল': <FlaskConical className="mr-2 h-5 w-5" />,
    'অন্যান্য': <UniversityIcon className="mr-2 h-5 w-5" />,
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<UniversityIcon className="h-14 w-14 text-primary" />}
            title="পাবলিক বিশ্ববিদ্যালয়"
            subtitle="Public University"
            description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয় সম্পর্কে বিস্তারিত তথ্য, আসন সংখ্যা, ভর্তি পরীক্ষার মানবণ্টন ও সার্কুলার এখানে পাবেন।"
            stats={[
                { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
                { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            ]}
        />
        <div className="mt-8">
          {categories.map(category => {
            const filteredUniversities = publicUniversities.filter(uni => uni.category === category);
            if (filteredUniversities.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center">
                  {categoryIcons[category]}
                  {category} বিশ্ববিদ্যালয়
                </h2>
                <div className="space-y-4">
                  {filteredUniversities.map(university => (
                    <UniversityCard key={university.shortName} university={university} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
