import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// This API route is intended for local development only.
// It exposes file system access and should not be deployed to a public server.

const DATA_DIR = path.join(process.cwd(), "src/lib/data");

async function getJsonFiles(dir: string): Promise<string[]> {
  let files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      // Return path relative to the project root for easier use
      files.push(path.relative(process.cwd(), fullPath));
    }
  }
  return files;
}

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This API is only available in development mode." },
      { status: 403 },
    );
  }

  try {
    const files = await getJsonFiles(DATA_DIR);
    // Filter out files that might not be desirable to edit, e.g. from sub-folders of universities.
    const filteredFiles = files.filter(
      (file) =>
        !file.includes("universities/") || file.endsWith("universities.json") || file.endsWith("du/subjects.json"),
    );

    return NextResponse.json({ files: filteredFiles });
  } catch (error) {
    console.error("Error reading data directory:", error);
    return NextResponse.json(
      { error: "Failed to read data directory." },
      { status: 500 },
    );
  }
}
