import connectMongoDB from '@/libs/mongodb';
import Project from '@/models/Project';
import Translation from '@/models/Translation';
import { NextResponse } from 'next/server';

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
