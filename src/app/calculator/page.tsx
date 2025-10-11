
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calculator as CalculatorIcon, Eraser } from "lucide-react";

const GpaCalculatorPage = () => {
  const [sscGpa, setSscGpa] = useState("");
  const [hscGpa, setHscGpa] = useState("");
  const [includeSsc4th, setIncludeSsc4th] = useState(true);
  const [includeHsc4th, setIncludeHsc4th] = useState(true);
  const [result, setResult] = useState<{
    ssc: number;
    hsc: number;
    total: number;
  } | null>(null);

  const calculateGpa = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);

    if (isNaN(ssc) || isNaN(hsc) || ssc > 5 || hsc > 5 || ssc < 1 || hsc < 1) {
      alert("অনুগ্রহ করে ১ থেকে ৫ এর মধ্যে সঠিক GPA ইনপুট দিন।");
      return;
    }

    const finalSscGpa = includeSsc4th ? ssc : Math.min(5, ssc);
    const finalHscGpa = includeHsc4th ? hsc : Math.min(5, hsc);

    setResult({
      ssc: finalSscGpa,
      hsc: finalHscGpa,
      total: finalSscGpa + finalHscGpa,
    });
  };

  const clearFields = () => {
    setSscGpa("");
    setHscGpa("");
    setResult(null);
  };

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="animate-fade-in-up">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full w-fit">
                <CalculatorIcon className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              GPA ক্যালকুলেটর
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              আপনার SSC ও HSC পরীক্ষার GPA দিয়ে মোট স্কোর হিসাব করুন।
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="sscGpa">SSC GPA (Out of 5)</Label>
                <Input
                  id="sscGpa"
                  type="number"
                  placeholder="যেমন: 5.00"
                  value={sscGpa}
                  onChange={(e) => setSscGpa(e.target.value)}
                  max="5"
                  step="0.01"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="includeSsc4th"
                  checked={includeSsc4th}
                  onCheckedChange={setIncludeSsc4th}
                />
                <Label htmlFor="includeSsc4th">
                  ৪র্থ বিষয় সহ?
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="hscGpa">HSC GPA (Out of 5)</Label>
                <Input
                  id="hscGpa"
                  type="number"
                  placeholder="যেমন: 5.00"
                  value={hscGpa}
                  onChange={(e) => setHscGpa(e.target.value)}
                  max="5"
                  step="0.01"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="includeHsc4th"
                  checked={includeHsc4th}
                  onCheckedChange={setIncludeHsc4th}
                />
                <Label htmlFor="includeHsc4th">
                  ৪র্থ বিষয় সহ?
                </Label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={calculateGpa} className="w-full">
                <CalculatorIcon className="mr-2" /> হিসাব করুন
              </Button>
              <Button
                onClick={clearFields}
                variant="outline"
                className="w-full"
              >
                <Eraser className="mr-2" /> মুছে ফেলুন
              </Button>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card className="mt-8 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-center">ফলাফল</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">SSC GPA</p>
                  <p className="text-2xl font-bold">{result.ssc.toFixed(2)}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">HSC GPA</p>
                  <p className="text-2xl font-bold">{result.hsc.toFixed(2)}</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-primary">মোট GPA</p>
                  <p className="text-2xl font-bold text-primary">
                    {result.total.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground pt-4">
                *বিভিন্ন বিশ্ববিদ্যালয়ে GPA হিসাবের পদ্ধতি ভিন্ন হতে পারে।
                সঠিক তথ্যের জন্য নিজ নিজ বিশ্ববিদ্যালয়ের সার্কুলার দেখুন।
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GpaCalculatorPage;
