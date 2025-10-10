import { allData } from "@/lib/data/_generated";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { title, description, sections, team } = allData.aboutContent;

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4 py-12">
        <SimplePageHeader title={title} description={description} />

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
            {allData.contributorsList.map((contributor) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
