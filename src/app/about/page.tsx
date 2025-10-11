import { allData } from "@/lib/data/_generated";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const { title, description, sections, team } = allData.aboutContent;
  const contributors = allData.contributorsList;

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2 py-12">
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
              <div
                key={contributor.name}
                className="group relative flex flex-col items-center text-center bg-card p-6 rounded-2xl border border-border shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="relative h-32 w-32 mb-4">
                  <Image
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    width={128}
                    height={128}
                    className="rounded-full object-cover border-4 border-card group-hover:border-primary/50 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {contributor.name}
                </h3>
                <p className="text-primary font-medium">{contributor.role}</p>
                <p className="text-muted-foreground mt-2 text-sm flex-grow">
                  {contributor.bio}
                </p>
                <div className="mt-4 flex space-x-4">
                  {contributor.social.github && (
                    <Link
                      href={contributor.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                  {contributor.social.linkedin && (
                    <Link
                      href={contributor.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                  {contributor.social.twitter && (
                    <Link
                      href={contributor.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>
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
              href="https://github.com/MNRfrom2020/Study-Platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" />
              GitHub-এ যোগ দিন
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
