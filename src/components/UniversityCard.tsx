
'use client';
import { University } from '@/lib/data/public-universities';
import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface UniversityCardProps {
  university: University;
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <details className="group bg-card border border-border rounded-xl shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg open:shadow-xl open:border-primary/50">
      <summary className="p-4 list-none flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-4">
          <Image src={university.logo} alt={`${university.nameEn} logo`} width={40} height={40} className="object-contain" />
          <div className="flex flex-col">
            <span className="font-bold text-foreground">{university.nameBn} ({university.shortName})</span>
            <span className="text-sm text-muted-foreground">{university.nameEn}</span>
          </div>
        </div>
        <ChevronDown className="text-muted-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-4 pb-4 border-t border-border/50">
        <p className="text-muted-foreground my-3 text-sm">{university.description}</p>
        <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" size="sm">
                <Link href={`${university.link}#Circular`}><FileText/> সার্কুলার</Link>
            </Button>
             <Button asChild variant="outline" size="sm">
                <Link href={`${university.link}#QuestionBank`}><BookOpen/> প্রশ্নব্যাংক</Link>
            </Button>
             <Button asChild variant="default" size="sm">
                <Link href={university.link}>বিস্তারিত <ArrowRight/></Link>
            </Button>
        </div>
      </div>
    </details>
  );
}
