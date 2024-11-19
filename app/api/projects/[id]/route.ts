import connectMongoDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const { title, description } = await req.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: 'Project updated', status: 200 });
}

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = await params;
  await connectMongoDB();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project, status: 200 });
}
