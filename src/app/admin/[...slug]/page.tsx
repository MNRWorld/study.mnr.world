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
  const [title, setTitle] = useState("ফাইল এডিটর");

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

    let dataPath: string;
    let schemaPath: string;
    let newEntityData: any = {};
    let pageTitle = "সম্পাদনা";

    if (dataType === "universities") {
      dataPath = `src/lib/data/universities/${dataId}/info.json`;
      schemaPath = `src/lib/schemas/universityInfoSchema.json`;
      const name = searchParams.get("name") || dataId;
      const category = searchParams.get("category") || "public";
      const categoryInBengali = category === "public" ? "সাধারণ" : "প্রাইভেট";

      newEntityData = {
        id: dataId,
        nameBn: name,
        nameEn: "",
        shortName: dataId.toUpperCase(),
        category: [categoryInBengali],
        description: "",
        link: `/${dataId}`,
        logo: "",
        admissionInfo: {},
        historyAndMap: {},
        links: [],
        questionBanks: {},
        subjects: {},
      };
      pageTitle = `সম্পাদনা: ${name || "নতুন বিশ্ববিদ্যালয়"}`;
    } else {
      const fullPath = pathParts.join("/");
      dataPath = `src/lib/data/${fullPath}.json`;
      const schemaName = pathParts[0].replace(".json", "");
      schemaPath = `src/lib/schemas/${schemaName}Schema.json`;
      newEntityData = {};
      pageTitle = `সম্পাদনা: ${fullPath}`;
    }

    setFilePath(dataPath);
    setTitle(pageTitle);

    const fetchData = async () => {
      setLoading(true);
      try {
        const [dataRes, schemaRes] = await Promise.all([
          fetch(`/api/admin/files/${dataPath}`),
          fetch(`/api/admin/files/${schemaPath}`),
        ]);

        let dataJson;
        if (dataRes.status === 404) {
          if (dataType === "universities") {
            setIsNew(true);
            dataJson = { content: newEntityData };
          } else {
            setIsNew(true);
            dataJson = { content: {} };
          }
        } else if (dataRes.ok) {
          setIsNew(false);
          dataJson = await dataRes.json();
        } else {
          const errorData = await dataRes.json();
          throw new Error(
            errorData.error || `ডেটা আনতে ব্যর্থ: ${dataRes.statusText}`,
          );
        }

        setFormData(dataJson.content);
        setInitialData(dataJson.content);

        if (!schemaRes.ok) {
          const errorData = await schemaRes.json();
          throw new Error(
            errorData.error || `স্কিমা আনতে ব্যর্থ: ${schemaRes.statusText}`,
          );
        }
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
      const res = await fetch("/api/admin/rebuild", { method: "POST" });
      const result = await res.json();
      if (!res.ok)
        throw new Error(result.error || "রি-বিল্ড ট্রিগার করতে ব্যর্থ");
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "ডেটা রি-বিল্ড করতে ত্রুটি",
        description: `_generated.ts ফাইলটি রি-বিল্ড করা যায়নি। অনুগ্রহ করে ম্যানুয়ালি 'npm run prebuild' চালান। ত্রুটি: ${error.message}`,
      });
      return false;
    }
  };

  const handleSave = async (data: IChangeEvent) => {
    if (!filePath) return;
    setSaving(true);
    const updatedData = data.formData;

    try {
      const pathParts = slug.split("/");
      const dataType = pathParts[0];

      if (isNew && dataType === "universities") {
        const category = searchParams.get("category") || "public";
        const listUpdateRes = await fetch(`/api/admin/files`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
            type: category,
          }),
        });
        if (!listUpdateRes.ok) {
          const errorResult = await listUpdateRes.json();
          throw new Error(
            errorResult.error || "বিশ্ববিদ্যালয় তালিকা আপডেট করতে ব্যর্থ",
          );
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
      if (isNew) setIsNew(false);

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
  const backLink = "/admin";

  if (loading) {
    return <div className="text-center p-8">ফর্ম এবং ডেটা লোড হচ্ছে...</div>;
  }

  if (!schema || formData === null) {
    return (
      <div className="container mx-auto p-4 sm:p-8 text-center text-red-500">
        এই ফাইলের জন্য স্কিমা বা ডেটা লোড করা যায়নি। পাথ সঠিক আছে কিনা তা
        পরীক্ষা করুন।
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href={backLink}>
              <ArrowLeft className="mr-2" /> ফিরে যান
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
          <Link href={backLink}>
            <ArrowLeft className="mr-2" /> তালিকায় ফিরে যান
          </Link>
        </Button>
      </div>

      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            <span className="text-primary">{title}</span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            এই ফর্মটি ব্যবহার করে{" "}
            <span className="font-mono break-all">{filePath}</span> ফাইলের JSON
            কনটেন্ট আপডেট করুন।
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
