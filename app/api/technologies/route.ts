import connectMongoDB from '@/libs/mongodb';
import Technologies from '@/models/Technologies';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const technologies = await Technologies.find();
  return NextResponse.json({ technologies, status: 200 });
}
