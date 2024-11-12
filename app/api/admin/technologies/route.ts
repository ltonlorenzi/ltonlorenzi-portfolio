import connectMongoDB from '@/libs/mongodb';
import Technologies from '@/models/Technologies';
import { handleError } from '@/utils/handleError';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectMongoDB();
    const technologies = await Technologies.find();
    return NextResponse.json({ technologies, status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: handleError(error, 'Failed to get technologies') },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const technology = await req.json();
    await connectMongoDB();
    const technologies = await Technologies.find({});
    let newId = 1;
    const usedIds = new Set(technologies.map((tech) => tech._id));
    while (usedIds.has(newId)) newId++;

    await Technologies.create({
      _id: newId,
      ...technology,
    });
    return NextResponse.json({ message: 'Technology created', status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: handleError(error, 'Failed to add technology'),
      status: 500,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await connectMongoDB();
    await Technologies.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Technology deleted', status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: handleError(error, 'Failed to delete technology') },
      { status: 500 }
    );
  }
}
