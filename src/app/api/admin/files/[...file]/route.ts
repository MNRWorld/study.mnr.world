import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// This API route is intended for local development only.
// It exposes file system access and should not be deployed to a public server.

function getSafeFilePath(filePath: string): string | null {
  const dataDir = path.resolve(process.cwd());
  const requestedPath = path.resolve(dataDir, filePath);

  // Security check: Ensure the path is within the project directory
  if (!requestedPath.startsWith(dataDir)) {
    return null;
  }
  return requestedPath;
}

export async function GET(
  request: Request,
  { params }: { params: { file: string[] } },
) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This API is only available in development mode." },
      { status: 403 },
    );
  }

  const filePath = params.file.join("/");
  const safePath = getSafeFilePath(filePath);

  if (!safePath) {
    return NextResponse.json(
      { error: "Invalid file path." },
      { status: 400 },
    );
  }

  try {
    const fileContent = await fs.readFile(safePath, "utf-8");
    return NextResponse.json({ content: JSON.parse(fileContent) });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return NextResponse.json(
      { error: `File not found or could not be read: ${filePath}` },
      { status: 404 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { file: string[] } },
) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This API is only available in development mode." },
      { status: 403 },
    );
  }

  const filePath = params.file.join("/");
  const safePath = getSafeFilePath(filePath);

  if (!safePath) {
    return NextResponse.json(
      { error: "Invalid file path." },
      { status: 400 },
    );
  }

  try {
    const body = await request.json();
    const content = body.content;

    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "Invalid content format." },
        { status: 400 },
      );
    }
    
    // Validate that the content is valid JSON before writing
    const parsedContent = JSON.parse(content);
    
    // Format the JSON with an indent of 2 spaces for readability
    const formattedContent = JSON.stringify(parsedContent, null, 2);

    await fs.writeFile(safePath, formattedContent, "utf-8");
    return NextResponse.json({ message: "File saved successfully." });
  } catch (error: any) {
    console.error(`Error writing file ${filePath}:`, error);
    if (error instanceof SyntaxError) {
        return NextResponse.json(
          { error: `Invalid JSON format: ${error.message}` },
          { status: 400 },
        );
    }
    return NextResponse.json(
      { error: `Failed to write file: ${error.message || 'Unknown error'}` },
      { status: 500 },
    );
  }
}
