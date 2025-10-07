"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FolderKanban, LogIn } from "lucide-react";

// WARNING: This is a simple password for local development use only.
// Do not expose this to the public.
const LOCAL_PASSWORD = "1234";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem("isAdminAuthenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/admin/files")
        .then((res) => res.json())
        .then((data) => {
          if (data.files) {
            setFiles(data.files);
          } else {
            toast({
              variant: "destructive",
              title: "Error fetching files",
              description: data.error || "Could not load file list.",
            });
          }
        });
    }
  }, [isAuthenticated, toast]);

  const handleLogin = () => {
    if (password === LOCAL_PASSWORD) {
      sessionStorage.setItem("isAdminAuthenticated", "true");
      setIsAuthenticated(true);
      toast({
        title: "Authentication Successful",
        description: "Welcome to the Admin Panel.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: "Incorrect password.",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
        <Card className="w-full max-w-md p-6 space-y-6 shadow-lg text-center">
          <CardHeader>
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
              <FolderKanban className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
              Admin Panel Access
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Please enter the password to manage JSON files.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="text-center"
            />
            <Button onClick={handleLogin} size="lg" className="w-full">
              <LogIn className="mr-2" /> Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-bengali">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text">
        JSON File Editor
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Editable Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <Link
                key={file}
                href={`/admin/edit/${encodeURIComponent(file)}`}
                passHref
              >
                <Button variant="outline" className="w-full justify-start">
                  {file.replace("src/lib/data/", "")}
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}