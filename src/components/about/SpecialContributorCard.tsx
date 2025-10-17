import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import type { Contributor } from "@/app/about/page";
import { socialIcons } from "@/app/about/page";

interface SocialLinks {
  globe?: string;
  send?: string;
  facebook?: string;
  youtube?: string;
  github?: string;
  instagram?: string;
  mail?: string;
  linkedin?: string;
  twitter?: string;
}

const SpecialContributorCard: React.FC<{ contributor: Contributor }> = ({
  contributor,
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-card border border-border rounded-xl shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 overflow-hidden dark:hover:bg-accent"
    >
      <AccordionItem value={contributor.name} className="border-none">
        <AccordionTrigger className="p-4 w-full flex justify-between items-center cursor-pointer hover:no-underline text-foreground">
          <div className="flex items-center gap-4 text-left w-full">
            <Image
              src={contributor.imageUrl}
              alt={`${contributor.name} logo`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col flex-grow">
              <span className="font-bold text-foreground">
                {contributor.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {contributor.role}
              </span>
              <div className="mt-2 flex space-x-2 flex-wrap justify-left">
                {Object.entries(contributor.social).map(([key, href]) => {
                  const Icon = socialIcons[key as keyof SocialLinks];
                  if (!Icon || !href) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-transform hover:scale-115"
                      aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-4 pb-4 border-t border-border/50">
            <p className="text-muted-foreground my-3 text-sm">
              {contributor.bio}
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SpecialContributorCard;
