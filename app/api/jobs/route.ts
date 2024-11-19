import connectMongoDB from '@/lib/mongodb';
import Job from '@/models/Job';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

const JobPatchSchema = z.object({
  _id: z.string(),
  title: z.string(),
  body: z.string(),
  company: z.string(),
  imageUrl: z.string(),
  start_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
  end_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
});

export async function GET() {
  try {
    await connectMongoDB();
    const jobs = await Job.find();
    return NextResponse.json(jobs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const job = JobPatchSchema.parse(body);

    /// se why its not finding the document with the id provided
    const objectId = new ObjectId(job._id);
    const existingDocument = await Job.findByIdAndUpdate(objectId, job, {
      new: true,
    });
    if (!existingDocument)
      return NextResponse.json({ message: 'Job not found' }, { status: 400 });
    return NextResponse.json({ message: 'Job updated' }, { status: 200 });
  } catch (error) {
    console.error(error);
    if (error instanceof ZodError)
      return NextResponse.json(
        { message: 'Invalid object form', error: error.errors },
        { status: 400 }
      );
    return NextResponse.json({ message: 'Failed to post' }, { status: 500 });
  }
}
