"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function EditFilePage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const filePath = Array.isArray(params.file)
    ? params.file.join("/")
    : params.file;
  const decodedFilePath = decodeURIComponent(filePath || "");

  const fetchFileContent = useCallback(async () => {
    if (!decodedFilePath) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/files/${decodedFilePath}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch file");
      }
      const data = await res.json();
      setContent(JSON.stringify(data.content, null, 2));
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error loading file",
        description: error.message,
      });
      setContent("Error loading file content.");
    } finally {
      setLoading(false);
    }
  }, [decodedFilePath, toast]);

  useEffect(() => {
    // Basic auth check for local dev
    if (sessionStorage.getItem("isAdminAuthenticated") !== "true") {
      router.push("/admin");
      return;
    }
    fetchFileContent();
  }, [fetchFileContent, router]);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Validate JSON before saving
      JSON.parse(content);

      const res = await fetch(`/api/admin/files/${decodedFilePath}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to save file");
      }

      toast({
        title: "File Saved",
        description: `${decodedFilePath} has been updated successfully.`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving file",
        description:
          error.message || "Please ensure the content is valid JSON.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-bengali">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/admin">
            <ArrowLeft className="mr-2" /> Back to Admin
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle>
            Editing:{" "}
            <span className="font-mono text-primary text-base sm:text-lg">
              {decodedFilePath.replace("src/lib/data/", "")}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          {loading ? (
            <div className="text-center p-8">Loading file content...</div>
          ) : (
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={25}
              className="font-mono text-sm bg-muted/50"
              placeholder="Enter valid JSON content..."
            />
          )}
          <Button
            onClick={handleSave}
            disabled={loading || saving}
            className="w-full mt-4"
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