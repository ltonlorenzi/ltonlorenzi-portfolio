import connectMongoDB from '@/lib/mongodb';
import { handleError } from '@/lib/utils';
import Technology from '@/models/Technology';
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

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const technology = TechnologyPutSchema.parse(body);
    const updatedTechnology = await Technology.findByIdAndUpdate(
      technology._id,
      technology,
      { new: true } //returns the updated document
    );
    if (!updatedTechnology)
      return NextResponse.json(
        { message: 'Technology not found' },
        { status: 404 }
      );
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

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const technology = TechnologyPutSchema.parse(body);
  try {
    await connectMongoDB();
    const existingTechnology = await Technology.findById(technology._id);
    if (!existingTechnology)
      return NextResponse.json(
        { message: 'Technology not found' },
        { status: 404 }
      );
    existingTechnology.name = technology.name;
    existingTechnology.description = technology.description;
    existingTechnology.imageUrl = technology.imageUrl;
    await existingTechnology.save();
    return NextResponse.json(
      { message: 'Technology updated' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: handleError(error, 'Failed to update technology') },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: handleError(error, 'Failed to update technology') },
      { status: 500 }
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
    return NextResponse.json(
      { message: handleError(error, 'Failed to delete technology') },
      { status: 500 }
    );
  }
}
