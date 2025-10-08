import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'This API is only available in development mode.' },
      { status: 403 },
    );
  }

  try {
    console.log('API: Triggering data rebuild...');
    const { stdout, stderr } = await execAsync('npm run prebuild');
    
    if (stderr) {
      console.error(`Rebuild stderr: ${stderr}`);
      // Don't throw for stderr, as some tools write warnings there.
      // We will check stdout for success message.
    }
    
    console.log(`Rebuild stdout: ${stdout}`);

    if (stdout.includes('Successfully built university data')) {
       return NextResponse.json({ message: 'Data rebuild successful.', output: stdout });
    } else {
       throw new Error('Build script did not report success. Check logs.');
    }

  } catch (error: any) {
    console.error('Error during data rebuild:', error);
    return NextResponse.json(
      { error: `Failed to rebuild data: ${error.message || 'Unknown error'}` },
      { status: 500 },
    );
  }
}
