import connectMongoDB from '@/libs/mongodb';
import Technology from '@/models/Technology';
import { handleError } from '@/utils/handleError';
import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

const TechnologyPostSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

const TechnologyPutSchema = z.object({
  _id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

export async function GET() {
  try {
    await connectMongoDB();
    const technologies = await Technology.find();
    return NextResponse.json(technologies);
  } catch (error) {
    return NextResponse.json(
      { message: handleError(error, 'Failed to get technologies') },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const technology = TechnologyPostSchema.parse(body);
    await connectMongoDB();
    const technologies = await Technology.find({});
    let newId = 1;
    const usedIds = new Set(technologies.map((tech) => tech._id));
    while (usedIds.has(newId)) newId++;

    await Technology.create({
      _id: newId,
      ...technology,
    });
    return NextResponse.json(
      { message: 'Technology created' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: handleError(error, 'Failed to add technology') },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const technology = TechnologyPutSchema.parse(body);
    const updatedTechnology = await Technology.findByIdAndUpdate(
      technology._id,
      technology,
      { new: true } // Return the updated document
    );
    if (!updatedTechnology) {
      return NextResponse.json(
        { message: 'Technology not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Technology updated', data: updatedTechnology },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: handleError(error, 'Failed to add technology') },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await connectMongoDB();
    await Technology.findByIdAndDelete(id);
    return NextResponse.json(
      { message: 'Technology deleted' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: handleError(error, 'Failed to delete technology') },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: handleError(error, 'Failed to delete technology') },
      { status: 500 }
    );
  }
}
