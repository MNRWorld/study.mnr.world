import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// This API route is intended for local development only.
// It exposes file system access and should not be deployed to a public server.

function getSafeFilePath(filePath: string): string | null {
  const dataDir = path.resolve(process.cwd());
  const requestedPath = path.resolve(dataDir, filePath);

  // Security check: Ensure the path is within the project directory
  if (!requestedPath.startsWith(dataDir) || requestedPath.includes('node_modules')) {
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
    // Handle empty file
    if (fileContent.trim() === "") {
        return NextResponse.json({ content: {} });
    }
    // Parse the JSON content before sending
    return NextResponse.json({ content: JSON.parse(fileContent) });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json(
        { error: `File not found: ${filePath}` },
        { status: 404 },
      );
    }
    // Handle JSON parsing errors for malformed files
    if (error instanceof SyntaxError) {
        console.error(`Error parsing JSON file ${filePath}:`, error);
        return NextResponse.json(
            { error: `Malformed JSON in file: ${filePath}. Please fix it manually.` },
            { status: 500 },
        );
    }
    console.error(`Error reading file ${filePath}:`, error);
    return NextResponse.json(
      { error: `File not found or could not be read: ${filePath}` },
      { status: 500 },
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

    if (typeof content !== "object") { // Allow arrays as well
      return NextResponse.json(
        { error: "Invalid content format. Expected a JSON object or array." },
        { status: 400 },
      );
    }
    
    // Format the JSON with an indent of 2 spaces for readability
    const formattedContent = JSON.stringify(content, null, 2);

    await fs.mkdir(path.dirname(safePath), { recursive: true });

    await fs.writeFile(safePath, formattedContent, "utf-8");
    return NextResponse.json({ message: "File saved successfully." });
  } catch (error: any) {
    console.error(`Error writing file ${filePath}:`, error);
    return NextResponse.json(
      { error: `Failed to write file: ${error.message || 'Unknown error'}` },
      { status: 500 },
    );
  }
}