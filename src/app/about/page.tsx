import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    { name: 'ড. জ্ঞান আলো', role: 'প্রতিষ্ঠাতা ও প্রধান নির্বাহী', image: 'https://picsum.photos/seed/team1/400/400', dataAiHint: 'male portrait' },
    { name: 'অধ্যাপক সফল বড়ুয়া', role: 'প্রধান শিক্ষা কর্মকর্তা', image: 'https://picsum.photos/seed/team2/400/400', dataAiHint: 'male portrait' },
    { name: 'প্রিয়াঙ্কা চৌধুরী', role: 'লিড ডেভেলপার', image: 'https://picsum.photos/seed/team3/400/400', dataAiHint: 'female portrait' },
    { name: 'সুমন আহমেদ', role: 'মার্কেটিং হেড', image: 'https://picsum.photos/seed/team4/400/400', dataAiHint: 'male portrait' },
  ];

  return (
    <div>
      <PageHeader
        title="আমাদের সম্পর্কে"
        description="আমরা কারা এবং কেন আমরা শিক্ষার্থীদের জন্য সেরা প্ল্যাটফর্ম তৈরি করতে প্রতিশ্রুতিবদ্ধ।"
      />
      <div className="container max-w-7xl mx-auto px-5 pb-24 space-y-24">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Target className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">লক্ষ্য</h3>
                        <p className="text-muted-foreground">
                            বাংলাদেশের প্রতিটি শিক্ষার্থীর জন্য মানসম্মত শিক্ষা সহজলভ্য করা এবং তাদের একাডেমিক ও পেশাগত জীবনে সফল হতে সাহায্য করা।
                        </p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Eye className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">উদ্দেশ্য</h3>
                        <p className="text-muted-foreground">
                           একটি ইন্টারেক্টিভ এবং ব্যবহারকারী-বান্ধব প্ল্যাটফর্মের মাধ্যমে শিক্ষার্থীদের পড়াশোনার অভিজ্ঞতাকে আরও আনন্দদায়ক ও কার্যকর করে তোলা।
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/about-main/800/600" alt="Our Mission" fill style={{objectFit: 'cover'}} data-ai-hint="team collaboration" />
            </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">আমাদের টিম</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            আমাদের টিমের সদস্যরা শিক্ষা এবং প্রযুক্তির প্রতি অনুরাগী, যারা শিক্ষার্থীদের জন্য সেরা অভিজ্ঞতা নিশ্চিত করতে কাজ করে যাচ্ছেন।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image src={member.image} alt={member.name} fill style={{objectFit: 'cover'}} data-ai-hint={member.dataAiHint} />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
