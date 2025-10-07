import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { contributors } from "@/lib/data/contributors";

export default function ContributorPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4 py-12">
        <SimplePageHeader
          title="আমাদের কারিগর"
          description="যারা এই প্ল্যাটফর্মটি তৈরিতে অক্লান্ত পরিশ্রম করেছেন, তাদের সাথে পরিচিত হন।"
        />

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
