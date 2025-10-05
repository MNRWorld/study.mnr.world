
"use client";
import { useState } from "react";
import { Search, University as UniversityIcon, Leaf, Cog, Atom, HeartPulse, Blocks, Sparkles } from "lucide-react";
import UniversityCard from "@/components/UniversityCard";
import { University } from "@/lib/data/universities";
import { Input } from "@/components/ui/input";
import SimplePageHeader from "./common/SimplePageHeader";
import PublicPageFloatingMenu from "./common/PublicPageFloatingMenu";
import { usePathname } from 'next/navigation';


interface PublicPageClientProps {
  universities: University[];
}

const categoryIcons: { [key: string]: React.FC<React.ComponentProps<'svg'>> } = {
    "গুচ্ছ": Blocks,
    "সাধারণ": UniversityIcon,
    "কৃষি": Leaf,
    "প্রকৌশল": Cog,
    "বিজ্ঞান ও প্রযুক্তি": Atom,
    "মেডিকেল": HeartPulse,
    "বিশেষ": Sparkles,
    "অধিভুক্ত": UniversityIcon,
};

const categoryIdMap: { [key: string]: string } = {
    "গুচ্ছ": "cluster-system",
    "সাধারণ": "general",
    "কৃষি": "agriculture",
    "প্রকৌশল": "engineering",
    "বিজ্ঞান ও প্রযুক্তি": "science-and-technology",
    "মেডিকেল": "medical",
    "বিশেষ": "special",
    "অধিভুক্ত": "affiliated",
};


export default function PublicPageClient({
  universities,
}: PublicPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const isPublicPage = pathname === '/public';

  const filteredUniversities = universities.filter((uni) => {
    if (searchTerm === "") return true;
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      uni.nameBn.toLowerCase().includes(lowercasedTerm) ||
      uni.nameEn.toLowerCase().includes(lowercasedTerm) ||
      uni.shortName.toLowerCase().includes(lowercasedTerm)
    );
  });

  const groupedUniversities = filteredUniversities.reduce(
    (acc, uni) => {
      uni.category.forEach(category => {
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(uni);
      });
      return acc;
    },
    {} as Record<string, University[]>,
  );

  const categoryOrder = [
    "গুচ্ছ",
    "সাধারণ",
    "কৃষি",
    "প্রকৌশল",
    "বিজ্ঞান ও প্রযুক্তি",
    "মেডিকেল",
    "বিশেষ",
    "অধিভুক্ত",
  ];

  const sortedCategories = Object.keys(groupedUniversities).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b),
  );

  return (
    <>
    {isPublicPage && (
      <>
        <PublicPageFloatingMenu />
        <SimplePageHeader
            title="পাবলিক বিশ্ববিদ্যালয়"
            description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার এবং প্রশ্নব্যাংক একটি মাত্র প্ল্যাটফর্মে।"
        />
        <div className="mt-8 space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
                    className="w-full pl-10 h-12 text-base bg-card"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
      </>
    )}
    

    <div className="mt-12 space-y-12">
      {sortedCategories.map((category) => {
          const Icon = categoryIcons[category];
          const categoryId = categoryIdMap[category];
          return(
            <div key={category}>
                <a href={`#${categoryId}`} id={categoryId} className="scroll-mt-24">
                <h2 
                    className="text-2xl font-bold mb-4 text-center pb-2 border-b-2 border-primary/20 flex items-center justify-center gap-2">
                    {Icon && <Icon className="h-6 w-6 text-primary/80" />}
                    {category}
                </h2>
                </a>
                <div className="space-y-4">
                {groupedUniversities[category].map((university, index) => (
                    <div
                    key={university.shortName}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                    >
                    <UniversityCard university={university} />
                    </div>
                ))}
                </div>
            </div>
          )
      })}
    </div>
    </>
  );
}
