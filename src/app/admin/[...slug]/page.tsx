"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Form from "@rjsf/shadcn";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RjsfEditPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [schema, setSchema] = useState(null);
  const [formData, setFormData] = useState<any | null>(null);
  const [initialData, setInitialData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filePath, setFilePath] = useState("");
  const [isNew, setIsNew] = useState(false);

  const slug = Array.isArray(params.slug) ? params.slug.join("/") : "";

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "ত্রুটি",
        description: "কোনো ফাইলের পাথ পাওয়া যায়নি।",
      });
      return;
    }

    const pathParts = slug.split("/");
    const dataType = pathParts[0];
    const dataId = pathParts[1];

    let dataPath: string = "";
    let schemaPath: string = "src/lib/schemas/universityInfoSchema.json";

    if (dataType === "universities") {
      dataPath = `src/lib/data/universities/${dataId}/info.json`;
    } else {
      toast({
        variant: "destructive",
        title: "অসমর্থিত প্রকার",
        description: `'${dataType}' প্রকারের জন্য সম্পাদনা এখনও সমর্থিত নয়।`,
      });
      setLoading(false);
      return;
    }

    setFilePath(dataPath);

    const fetchData = async () => {
      setLoading(true);
      try {
        const [dataRes, schemaRes] = await Promise.all([
          fetch(`/api/admin/files/${dataPath}`),
          fetch(`/api/admin/files/${schemaPath}`),
        ]);

        if (dataRes.status === 404) {
          setIsNew(true);
          const name = searchParams.get('name') || dataId;
          const category = searchParams.get('category') || 'public';
          const newUniData = {
            id: dataId,
            nameBn: name,
            nameEn: "",
            shortName: dataId.toUpperCase(),
            category: [category],
            description: "",
            link: `/${dataId}`,
            logo: "",
            admissionInfo: {},
            historyAndMap: {},
            links: [],
            questionBanks: {},
            subjects: {},
          };
          setFormData(newUniData);
          setInitialData(newUniData);
        } else if (dataRes.ok) {
          setIsNew(false);
          const dataJson = await dataRes.json();
          setFormData(dataJson.content);
          setInitialData(dataJson.content);
        } else {
          const errorData = await dataRes.json();
          throw new Error(errorData.error || `ডেটা আনতে ব্যর্থ: ${dataRes.statusText}`);
        }

        if (!schemaRes.ok) throw new Error(`স্কিমা আনতে ব্যর্থ: ${schemaRes.statusText}`);
        const schemaJson = await schemaRes.json();
        setSchema(schemaJson.content);

      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "ডেটা লোড করতে ত্রুটি",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, router, toast, searchParams]);

  const triggerRebuild = async () => {
    try {
      const res = await fetch('/api/admin/rebuild', { method: 'POST' });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'রি-বিল্ড ট্রিগার করতে ব্যর্থ');
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "ডেটা রি-বিল্ড করতে ত্রুটি",
        description: `_generated.ts ফাইলটি রি-বিল্ড করা যায়নি। অনুগ্রহ করে ম্যানুয়ালি 'npm run prebuild' চালান। ত্রুটি: ${error.message}`,
      });
      return false;
    }
  }

  const handleSave = async (data: IChangeEvent) => {
    if (!filePath) return;
    setSaving(true);
    const updatedData = data.formData;

    try {
      if (isNew) {
        const category = updatedData.category.includes('প্রাইভেট') ? 'private' : 'public';
        const listUpdateRes = await fetch(`/api/admin/files`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            university: {
              nameBn: updatedData.nameBn,
              nameEn: updatedData.nameEn,
              shortName: updatedData.shortName,
              id: updatedData.id,
              category: updatedData.category,
              description: updatedData.description,
              link: updatedData.link,
              logo: updatedData.logo,
            },
            type: category
          }),
        });
        if (!listUpdateRes.ok) {
           const errorResult = await listUpdateRes.json();
           throw new Error(errorResult.error || 'বিশ্ববিদ্যালয় তালিকা আপডেট করতে ব্যর্থ');
        }
      }

      const res = await fetch(`/api/admin/files/${filePath}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedData }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "ফাইল সেভ করতে ব্যর্থ");

      setInitialData(updatedData);
      setFormData(updatedData);
      setIsNew(false); // প্রথম সেভের পর এটি আর নতুন নয়

      const rebuildSuccess = await triggerRebuild();

      if (rebuildSuccess) {
        toast({
          title: "ডেটা সেভ ও রি-বিল্ড সফল হয়েছে",
          description: `পরিবর্তন সেভ করা হয়েছে এবং ডেটা রি-বিল্ড করা হয়েছে। পরিবর্তন দেখতে সাইট রিফ্রেশ করুন।`,
        });
      } else {
         toast({
          title: "ডেটা সেভ হয়েছে",
          description: `${filePath} সেভ হয়েছে, কিন্তু ডেটা রি-বিল্ড ব্যর্থ হয়েছে।`,
        });
      }

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "ডেটা সেভ করতে ত্রুটি",
        description: error.message,
      });
    } finally {
      setSaving(false);
    }
  };

  const isChanged = JSON.stringify(initialData) !== JSON.stringify(formData);

  if (loading) {
    return <div className="text-center p-8">ফর্ম এবং ডেটা লোড হচ্ছে...</div>;
  }

  if (!schema || formData === null) {
    return (
      <div className="container mx-auto p-4 sm:p-8 text-center text-red-500">
        এই ফাইলের জন্য স্কিমা বা ডেটা লোড করা যায়নি।
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href="/admin">
              <ArrowLeft className="mr-2" /> অ্যাডমিনে ফিরে যান
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 font-bengali">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/admin">
            <ArrowLeft className="mr-2" /> বিশ্ববিদ্যালয় তালিকায় ফিরে যান
          </Link>
        </Button>
      </div>

      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            সম্পাদনা:{" "}
            <span className="text-primary">
              {formData.nameBn || "নতুন বিশ্ববিদ্যালয়"}
            </span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            এই ফর্মটি ব্যবহার করে{" "}
            <span className="font-mono">{filePath}</span> ফাইলের JSON কনটেন্ট
            আপডেট করুন।
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
          <Form
            schema={schema as any}
            formData={formData}
            validator={validator}
            onChange={(e) => setFormData(e.formData)}
            onSubmit={handleSave}
            onError={(errors) =>
              toast({
                variant: "destructive",
                title: "যাচাইকরণে ত্রুটি",
                description: `আপনার ফর্মে ${errors.length} টি ত্রুটি পাওয়া গেছে।`,
              })
            }
          >
            <div className="mt-6">
              <Button
                type="submit"
                disabled={saving || !isChanged}
                className="w-full"
                size="lg"
              >
                <Save className="mr-2" />
                {saving ? "সেভ হচ্ছে..." : "পরিবর্তন সেভ করুন"}
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
