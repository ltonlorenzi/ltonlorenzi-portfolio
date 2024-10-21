import connectMongoDB from '@/libs/mongodb';
import Translation from '@/models/Translation';
import { Translation as TranslationType } from '@/types/Translation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { translations } = await req.json();

  await connectMongoDB();
  translations.map(async (t: TranslationType) => {
    await Translation.create({
      entityId: t.entityId,
      entityName: t.entityName,
      locale: t.locale,
      fields: t.fields,
    });
  });
  return NextResponse.json({ message: 'Translations created', status: 200 });
}

//function to update the translations // insert and delete fields
export async function PUT(req: NextRequest) {
  try {
    const { translations } = await req.json();
    await connectMongoDB();
    for (const translation of translations) {
      const { id, insetFields, deleteFields } = translation;
      const existingTranslation = await Translation.findById(id);
      if (!existingTranslation) {
        console.warn(`Translation with ID ${id} not found. Skipping.`);
        continue; // Skip if translation doesn't exist
      }
      const result = await Translation.updateOne({ _id: id }, [
        { $set: { ...insetFields } },
        { $unset: deleteFields },
      ]);
      console.log(`Update result for ID ${id}:`, result);
    }

    return NextResponse.json({ message: 'Translations updated', status: 200 });
  } catch (error) {
    console.error('Error updating translations:', error);
    return NextResponse.json({
      message: 'Error updating translations',
      error,
      status: 500,
    });
  }
}
