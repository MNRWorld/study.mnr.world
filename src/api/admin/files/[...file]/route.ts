import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function getSafeFilePath(filePath: string): string | null {
  const dataDir = path.resolve(process.cwd());
  const requestedPath = path.resolve(dataDir, filePath);

  if (
    !requestedPath.startsWith(dataDir) ||
    requestedPath.includes("node_modules")
  ) {
    return null;
  }
  return requestedPath;
}

export async function GET(
  request: Request,
  { params }: { params: { file: string[] } },
) {
  const filePath = params.file.join("/");
  const safePath = getSafeFilePath(filePath);

  if (!safePath) {
    return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
  }

  try {
    const fileContent = await fs.readFile(safePath, "utf-8");
    if (fileContent.trim() === "") {
      return NextResponse.json({ content: {} });
    }
    return NextResponse.json({ content: JSON.parse(fileContent) });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return NextResponse.json({ content: {} }, { status: 200 });
    }
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: `Malformed JSON in file: ${filePath}. Please fix it manually.`,
        },
        { status: 500 },
      );
    }
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
  const filePath = params.file.join("/");
  const safePath = getSafeFilePath(filePath);

  if (!safePath) {
    return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
  }

  try {
    const body = await request.json();
    const content = body.content;

    if (typeof content !== "object") {
      return NextResponse.json(
        { error: "Invalid content format. Expected a JSON object or array." },
        { status: 400 },
      );
    }

    const formattedContent = JSON.stringify(content, null, 2);

    await fs.mkdir(path.dirname(safePath), { recursive: true });

    await fs.writeFile(safePath, formattedContent, "utf-8");
    return NextResponse.json({ message: "File saved successfully." });
  } catch (error: any) {
    return NextResponse.json(
      { error: `Failed to write file: ${error.message || "Unknown error"}` },
      { status: 500 },
    );
  }
}
