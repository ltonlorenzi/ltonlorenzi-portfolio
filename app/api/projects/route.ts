import { defaultLocale } from '@/i18nConfig';
import connectMongoDB from '@/libs/mongodb';
import Project from '@/models/Project';
import Translation from '@/models/Translation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Project.create({ title, description });
  return NextResponse.json({ message: 'Project created', status: 201 });
}

export async function GET(req: NextRequest) {
  try {
    const locale = req.nextUrl.searchParams.get('locale');

    const currentLocale = locale || defaultLocale;

    await connectMongoDB();

    if (currentLocale === defaultLocale) {
      const projects = await Project.find();
      return NextResponse.json(projects);
    } else {
      const translations = await Translation.find({
        locale: currentLocale,
        entityName: 'project',
      });

      const projects = translations.map((translation) => ({
        _id: translation.entityId,
        ...translation.fields,
      }));

      return NextResponse.json(projects);
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Project deleted', status: 200 });
}
