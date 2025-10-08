
import { NextResponse } from "next/server";
import { exec } from "child_process";
import util from "util";

const execAsync = util.promisify(exec);

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This action is only available in development mode." },
      { status: 403 },
    );
  }

  try {
    const { stdout, stderr } = await execAsync("npm run prebuild");

    if (stderr) {
      // Don't throw for stderr, as some tools write warnings there.
    }

    if (stdout.includes("Successfully built university data")) {
      return NextResponse.json({
        message: "Data rebuild successful.",
        output: stdout,
      });
    } else {
      throw new Error("Build script did not report success. Check logs.");
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: `Failed to rebuild data: ${error.message || "Unknown error"}` },
      { status: 500 },
    );
  }
}
