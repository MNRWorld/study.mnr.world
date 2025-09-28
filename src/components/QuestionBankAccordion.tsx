
import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { File } from 'lucide-react';
import Link from 'next/link';

interface LinkItem {
  title: string;
  url: string;
}

interface ContentItem {
    title?: string;
    links: LinkItem[];
    placeholder?: string;
}

interface QuestionBankAccordionProps {
  value: string;
  title: string;
  items: ContentItem[];
}

const QuestionBankAccordion: React.FC<QuestionBankAccordionProps> = ({ value, title, items }) => {
  const hasContent = items.some(item => item.links.length > 0 || item.placeholder);

  return (
    <AccordionItem value={value} className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-all duration-300">
      <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline">
        <File className="inline-block mr-2" /> {title}
      </AccordionTrigger>
      <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
        {hasContent ? (
          items.map((item, index) => (
            <div key={index} className="mb-2 last:mb-0">
              {item.title && <b className="text-foreground">{item.title}</b>}
              {item.links.length > 0 ? (
                item.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    ● <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {link.title}
                    </a>
                  </div>
                ))
              ) : (
                <p>{item.placeholder}</p>
              )}
            </div>
          ))
        ) : (
          <p>শীঘ্রই আসছে...</p>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default QuestionBankAccordion;
