import { Users, Target, Eye } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section className="container max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          কেন আমরা সেরা?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          আমরা শিক্ষার্থীদের জন্য একটি সম্পূর্ণ সমাধান নিয়ে এসেছি, যা তাদের
          একাডেমিক যাত্রাকে সহজ ও সফল করতে সাহায্য করে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 rounded-lg overflow-hidden order-1 md:order-2">
          <Image
            src="https://picsum.photos/seed/about-us/800/600"
            alt="About us"
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint="students learning"
          />
        </div>

        <div className="space-y-8 order-2 md:order-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">বিশেষায়িত রিসোর্স</h3>
              <p className="text-muted-foreground">
                বিগত বছরের প্রশ্ন, এক্সক্লুসিভ কোর্স এবং আপ-টু-ডেট ভর্তি তথ্য
                একই প্ল্যাটফর্মে।
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">অভিজ্ঞ শিক্ষক</h3>
              <p className="text-muted-foreground">
                আমাদের কোর্সগুলো দেশের সেরা শিক্ষকদের দ্বারা পরিচালিত, যারা
                আপনাকে সঠিক পথ দেখাবে।
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">আধুনিক প্রযুক্তি</h3>
              <p className="text-muted-foreground">
                ইন্টারেক্টিভ কুইজ, পারফরম্যান্স ট্র্যাকিং এবং সহজবোধ্য ইন্টারফেস
                আপনার পড়াকে করবে আরও কার্যকর।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
