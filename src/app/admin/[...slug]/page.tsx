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
    if (sessionStorage.getItem("isAdminAuthenticated") !== "true") {
      router.push("/admin");
      return;
    }

    if (!slug) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No file path provided.",
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
        title: "Unsupported Type",
        description: `Editing for '${dataType}' is not supported yet.`,
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
          throw new Error(errorData.error || `Failed to fetch data: ${dataRes.statusText}`);
        }

        if (!schemaRes.ok) throw new Error(`Failed to fetch schema: ${schemaRes.statusText}`);
        const schemaJson = await schemaRes.json();
        setSchema(schemaJson.content);

      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error loading data",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, router, toast, searchParams]);

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
           throw new Error(errorResult.error || 'Failed to update university list');
        }
      }

      const res = await fetch(`/api/admin/files/${filePath}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedData }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to save file");

      toast({
        title: "Data Saved",
        description: `${isNew ? 'New university created and' : 'Changes to'} ${filePath} have been saved.`,
      });
      setInitialData(updatedData);
      setFormData(updatedData);
      setIsNew(false); // After first save, it's no longer new
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving data",
        description: error.message,
      });
    } finally {
      setSaving(false);
    }
  };

  const isChanged = JSON.stringify(initialData) !== JSON.stringify(formData);

  if (loading) {
    return <div className="text-center p-8">Loading form and data...</div>;
  }

  if (!schema || formData === null) {
    return (
      <div className="container mx-auto p-4 sm:p-8 text-center text-red-500">
        Could not load schema or data for this file.
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link href="/admin">
              <ArrowLeft className="mr-2" /> Back to Admin
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
            <ArrowLeft className="mr-2" /> Back to University List
          </Link>
        </Button>
      </div>

      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            Editing:{" "}
            <span className="text-primary">
              {formData.nameBn || "New University"}
            </span>
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Use this form to update the JSON file content for{" "}
            <span className="font-mono">{filePath}</span>
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
                title: "Validation Errors",
                description: `${errors.length} errors found in your form.`,
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
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
