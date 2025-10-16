import { allData } from "@/lib/data/_generated";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Globe,
  Send,
  Facebook,
  Youtube,
  Instagram,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Define proper TypeScript interfaces
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

interface Contributor {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: SocialLinks;
}

const socialIcons: { [key in keyof SocialLinks]: React.ElementType } = {
  globe: Globe,
  send: Send,
  facebook: Facebook,
  youtube: Youtube,
  github: Github,
  instagram: Instagram,
  mail: Mail,
  linkedin: Linkedin,
  twitter: Twitter,
};

const ContributorCard: React.FC<{ contributor: Contributor }> = ({
  contributor,
}) => (
  <div className="group relative flex flex-col items-center text-center bg-card p-6 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
    <div className="relative h-32 w-32 mb-4">
      <Image
        src={contributor.imageUrl}
        alt={contributor.name}
        width={128}
        height={128}
        className="rounded-full object-cover border-4 border-card group-hover:border-primary/50 transition-all duration-300"
      />
    </div>
    <h3 className="text-xl font-bold text-foreground">{contributor.name}</h3>
    <p className="text-primary font-medium">{contributor.role}</p>
    <p className="text-muted-foreground mt-2 text-sm flex-grow">
      {contributor.bio}
    </p>
    <div className="mt-4 flex space-x-2 flex-wrap justify-center">
      {Object.entries(contributor.social).map(([key, href]) => {
        const Icon = socialIcons[key as keyof SocialLinks];
        if (!Icon || !href) return null;
        return (
          <Link key={key} href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon className="h-5 w-5" />
            </Button>
          </Link>
        );
      })}
    </div>
  </div>
);

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
        <AccordionTrigger className="p-4 w-full flex justify-between items-center cursor-pointer hover:no-underline [&[data-state=open]>svg.chevron]:-rotate-180 text-foreground">
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

export default function AboutPage() {
  const { title, description, sections, team } = allData.aboutContent;
  const contributors = allData.contributorsList as Contributor[];
  const specialContributors = allData.specialContributorsList as Contributor[];

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2 pb-12">
        <div className="px-4">
          <SimplePageHeader title={title} description={description} />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {section.title}
              </h3>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            {team.heading}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contributors.map((contributor) => (
              <ContributorCard
                key={contributor.name}
                contributor={contributor}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
            বিশেষ ধন্যবাদ
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {specialContributors.map((contributor, index) => (
              <div
                key={contributor.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SpecialContributorCard contributor={contributor} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-foreground">
            আপনিও অবদান রাখতে চান?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            আমরা সবসময় নতুন প্রতিভাবানদের খুঁজছি। আপনি যদি আমাদের এই যাত্রায়
            অংশ নিতে আগ্রহী হন, তবে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link
              href="https://t.me/MNRfrom2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="mr-2" />
              Telegram-এ যোগ দিন
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
