import { allData } from "@/lib/data/_generated";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = allData.coursesList.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-2 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link href="/courses">
              <ArrowLeft className="mr-2" /> সব কোর্সে ফিরে যান
            </Link>
          </Button>
        </div>

        <div className="mt-20 text-center bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-lg animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <Construction className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            এই ফিচারটি নিয়ে কাজ চলছে
          </h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            আমরা এই কোর্সের বিস্তারিত তথ্য ও ফিচারগুলো খুব শীঘ্রই আপনাদের জন্য
            নিয়ে আসছি। আমাদের সাথে থাকার জন্য ধন্যবাদ!
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/">হোম পেইজে ফিরে যান</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
