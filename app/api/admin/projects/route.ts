import connectMongoDB from '@/lib/mongodb';
import Project from '@/models/Project';
import Translation from '@/models/Translation';
import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

const ProjectPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  start_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
  end_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
  technologies: z.array(z.number()),
  company: z.string(),
  type: z.string(),
  imageUrl: z.string().optional(),
  projectUrl: z.string().optional(),
});

const ProjectPatchSchema = z.object({
  _id: z.number(),
  title: z.string(),
  description: z.string(),
  start_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
  end_date: z.preprocess(
    (val) => (typeof val === 'string' ? new Date(val) : val),
    z.date()
  ),
  technologies: z.array(z.number()),
  company: z.string(),
  type: z.string(),
  imageUrl: z.string().optional(),
  projectUrl: z.string().optional(),
});

export async function GET() {
  await connectMongoDB();
  //get all projects
  const allProjects = await Project.find().lean();
  //get projects translations
  const translations = await Translation.find({
    entityName: 'projects',
    entityId: { $in: allProjects.map((project) => project._id) },
  });

  //add translations to the projects
  const projects = allProjects.map((project) => ({
    ...project,
    translations: translations
      .filter(({ entityId }) => entityId === project._id)
      .map(({ locale, fields }) => ({ locale, fields })),
  }));

  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const project = ProjectPostSchema.parse(body);
  try {
    await connectMongoDB();
    const projects = await Project.find({});
    let newId = 1;
    const projectIds = new Set(projects.map((p) => p._id));
    while (projectIds.has(newId)) newId++;
    await Project.create({
      _id: newId,
      ...project,
    });
    return NextResponse.json({ message: 'Project created' }, { status: 201 });
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

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const project = ProjectPatchSchema.parse(body);
    const existingDocument = await Project.findByIdAndUpdate(
      project._id,
      project,
      {
        new: true,
      }
    );
    if (!existingDocument)
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 400 }
      );
    return NextResponse.json({ message: 'Project updated' }, { status: 200 });
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

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await connectMongoDB();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to delete' }, { status: 500 });
  }
}
