import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { publicUniversities } from "@/lib/data/universities";

// This API route is intended for local development only.
// It exposes file system access and should not be deployed to a public server.

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This API is only available in development mode." },
      { status: 403 },
    );
  }

  try {
    // Instead of reading directory, just return the imported list
    return NextResponse.json({ files: publicUniversities });
  } catch (error) {
    console.error("Error providing university list:", error);
    return NextResponse.json(
      { error: "Failed to provide university list." },
      { status: 500 },
    );
  }
}
