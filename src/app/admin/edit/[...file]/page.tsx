"use client";

import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { University } from "@/lib/data/universities";
import { Label } from "@/components/ui/label";

type UniversityData = Omit<University, "id">;

const universityCategories = [
  "সাধারণ",
  "গুচ্ছ",
  "কৃষি",
  "প্রকৌশল",
  "বিজ্ঞান ও প্রযুক্তি",
  "মেডিকেল",
  "বিশেষ",
  "অধিভুক্ত",
  "প্রাইভেট",
];

export default function EditUniversityPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [initialData, setInitialData] = useState<UniversityData | null>(null);
  const [formData, setFormData] = useState<UniversityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const universityId = Array.isArray(params.file) ? params.file[0] : null;

  const fetchAllUniversities = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/files/src/lib/data/universities/public-universities.json`,
      );
      if (!res.ok) throw new Error("Failed to fetch universities");
      const data = await res.json();
      setAllUniversities(data.content);
      return data.content;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading university list",
        description: error.message,
      });
      return [];
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    // Basic auth check for local dev
    if (sessionStorage.getItem("isAdminAuthenticated") !== "true") {
      router.push("/admin");
      return;
    }

    const loadData = async () => {
      const universities = await fetchAllUniversities();
      if (universities.length > 0 && universityId) {
        const universityToEdit = universities.find(
          (u: University) => u.id === universityId,
        );
        if (universityToEdit) {
          const { id, ...dataToEdit } = universityToEdit;
          setInitialData(dataToEdit);
          setFormData(dataToEdit);
        } else {
          toast({
            variant: "destructive",
            title: "University not found",
            description: `Could not find data for ID: ${universityId}`,
          });
        }
      }
    };

    loadData();
  }, [fetchAllUniversities, universityId, router, toast]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prev) => {
      if (!prev) return null;
      const newCategories = prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category];
      return { ...prev, category: newCategories };
    });
  };

  const handleSave = async () => {
    if (!formData || !universityId || !allUniversities) return;
    setSaving(true);

    const updatedUniversities = allUniversities.map((uni) =>
      uni.id === universityId ? { ...formData, id: universityId } : uni,
    );

    try {
      const res = await fetch(
        `/api/admin/files/src/lib/data/universities/public-universities.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: updatedUniversities }),
        },
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to save file");

      toast({
        title: "University Data Saved",
        description: `${formData.nameBn} has been updated successfully.`,
      });
      setInitialData(formData);
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
    return <div className="text-center p-8">Loading university data...</div>;
  }

  if (!formData) {
    return (
      <div className="container mx-auto p-8 text-center text-red-500">
        Could not load data for this university.
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
    <div className="container mx-auto px-4 py-8 max-w-2xl font-bengali">
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
            Editing: <span className="text-primary">{formData.nameBn}</span>
          </CardTitle>
          <CardDescription>
            Use this form to update the university details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nameBn">নাম (বাংলা)</Label>
              <Input
                id="nameBn"
                name="nameBn"
                value={formData.nameBn}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nameEn">Name (English)</Label>
              <Input
                id="nameEn"
                name="nameEn"
                value={formData.nameEn}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shortName">Short Name</Label>
              <Input
                id="shortName"
                name="shortName"
                value={formData.shortName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link">Page Link</Label>
              <Input
                id="link"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="e.g., /du"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo">Logo URL</Label>
            <Input
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleInputChange}
              placeholder="https://example.com/logo.png"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label>Categories</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border rounded-md">
              {universityCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`cat-${cat}`}
                    checked={formData.category.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor={`cat-${cat}`} className="font-normal">
                    {cat}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={handleSave}
            disabled={saving || !isChanged}
            className="w-full"
            size="lg"
          >
            <Save className="mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
