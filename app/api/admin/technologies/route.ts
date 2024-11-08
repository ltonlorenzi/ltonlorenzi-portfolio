import connectMongoDB from '@/libs/mongodb';
import Technologies from '@/models/Technologies';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const technologies = await Technologies.find();
  return NextResponse.json({ technologies, status: 200 });
}

export async function POST(req: NextRequest) {
  const technology = await req.json();
  await connectMongoDB();
  const lastTech = await Technologies.findOne().sort({ _id: -1 });
  const newId = lastTech ? lastTech._id + 1 : 1;
  await Technologies.create({
    _id: newId,
    ...technology,
  });
  return NextResponse.json({ message: 'Technology created', status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await connectMongoDB();
  await Technologies.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Technology deleted', status: 201 });
}
