import { NextResponse } from "next/server";
import { allData } from "@/lib/data/_generated";
import type { University } from "@/lib/supabase/database.types";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    return NextResponse.json({ files: allData.universities });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to provide university list." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This action is only available in development mode." },
      { status: 403 },
    );
  }

  try {
    const { university, type } = await request.json();
    if (!university || !type || !["public", "private"].includes(type)) {
      return NextResponse.json(
        {
          error:
            "Invalid request body. 'university' and 'type' (public/private) are required.",
        },
        { status: 400 },
      );
    }

    const fileName =
      type === "public"
        ? "public-universities.json"
        : "private-universities.json";
    const filePath = path.resolve(
      process.cwd(),
      `src/lib/data/universities/${fileName}`,
    );

    const fileContent = await fs.readFile(filePath, "utf-8");
    const universityList: University[] = JSON.parse(fileContent);

    const existingIndex = universityList.findIndex(
      (u) => u.id === university.id,
    );

    if (existingIndex > -1) {
      universityList[existingIndex] = {
        ...universityList[existingIndex],
        ...university,
      };
    } else {
      universityList.push(university);
    }

    await fs.writeFile(
      filePath,
      JSON.stringify(universityList, null, 2),
      "utf-8",
    );

    return NextResponse.json({
      message: `University list (${fileName}) updated successfully.`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: `Failed to update university list: ${error.message}` },
      { status: 500 },
    );
  }
}
