import { GraduationCap, Construction } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CoursesPage() {
  return (
    <div className="flex-grow flex items-center justify-center py-12">
      <Card className="w-full max-w-md text-center animate-fadeInUp">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="mt-4 text-3xl font-bold font-bengali gradient-text">
            কোর্স
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Construction className="h-5 w-5" />
            <p className="text-lg font-bengali">এই পৃষ্ঠাটি নির্মাণাধীন আছে।</p>
          </div>
          <p className="text-sm text-muted-foreground/70 mt-2 font-bengali">
            খুব শীঘ্রই আসছে...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
