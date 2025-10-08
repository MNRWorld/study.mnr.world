"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
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
  const { toast } = useToast();

  const [schema, setSchema] = useState(null);
  const [formData, setFormData] = useState(null);
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [filePath, setFilePath] = useState("");

  const fileParam = Array.isArray(params.file) ? params.file.join("/") : "";

  useEffect(() => {
    if (sessionStorage.getItem("isAdminAuthenticated") !== "true") {
      router.push("/admin");
      return;
    }

    if (!fileParam) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No file path provided.",
      });
      return;
    }

    const pathParts = fileParam.split("/");
    const dataType = pathParts[1];
    const universityId = pathParts[2];

    let dataPath: string = "";
    let schemaPath: string = "";

    if (dataType === "universities") {
      dataPath = `src/lib/data/universities/${universityId}/info.json`;
      schemaPath = "src/lib/schemas/universityInfoSchema.json";
      setFilePath(dataPath);
    } else {
      toast({
        variant: "destructive",
        title: "Unsupported Type",
        description: `Editing for '${dataType}' is not supported yet.`,
      });
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const [dataRes, schemaRes] = await Promise.all([
          fetch(`/api/admin/files/${dataPath}`),
          fetch(`/api/admin/files/${schemaPath}`),
        ]);

        if (!dataRes.ok) throw new Error(`Failed to fetch data: ${dataPath}`);
        if (!schemaRes.ok)
          throw new Error(`Failed to fetch schema: ${schemaPath}`);

        const dataJson = await dataRes.json();
        const schemaJson = await schemaRes.json();

        setFormData(dataJson.content);
        setInitialData(dataJson.content);
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
  }, [fileParam, router, toast]);

  const handleSave = async (data: IChangeEvent) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/files/${filePath}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: data.formData }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to save file");

      toast({
        title: "Data Saved",
        description: `Changes to ${filePath} have been saved.`,
      });
      setInitialData(data.formData);
      setFormData(data.formData);
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

  const isChanged =
    JSON.stringify(initialData) !== JSON.stringify(formData);

  if (loading) {
    return <div className="text-center p-8">Loading form and data...</div>;
  }

  if (!schema || formData === null) {
    return (
      <div className="container mx-auto p-8 text-center text-red-500">
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
    <div className="container mx-auto px-4 py-8 max-w-4xl font-bengali">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/admin">
            <ArrowLeft className="mr-2" /> Back to University List
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Editing: <span className="text-primary">{filePath}</span>
          </CardTitle>
          <CardDescription>
            Use this form to update the JSON file content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            schema={schema}
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