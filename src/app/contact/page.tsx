import { allData } from "@/lib/data/_generated";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { Mail, Send, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { title, description, contactPoints } = allData.contactContent;
  const icons: { [key: string]: React.ElementType } = {
    Mail,
    Send,
    Facebook,
    Instagram,
  };

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2 py-12">
        <div className="px-4">
          <SimplePageHeader title={title} description={description} />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactPoints.map((point, index) => {
            const Icon = icons[point.icon];
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full w-fit">
                    {Icon && <Icon className="h-8 w-8 text-primary" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {point.title}
                </h3>
                {point.detail && (
                  <p className="text-muted-foreground">{point.detail}</p>
                )}
                <Link
                  href={point.link}
                  className="text-primary hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {point.linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
