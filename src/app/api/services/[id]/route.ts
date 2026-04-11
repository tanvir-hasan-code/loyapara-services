import { collectionName } from "@/lib/CollectionName/CollectionName";
import dbConnect from "@/lib/MongoDB/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(
  request: NextRequest, 
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "ভুল ID ফরম্যাট প্রদান করা হয়েছে" },
        { status: 400 },
      );
    }

    const collection = await dbConnect(collectionName.ALL as string);
    const data = await collection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return NextResponse.json(
        { error: "কোনো ডেটা পাওয়া যায়নি" },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Fetch Single Data Error:", error);
    return NextResponse.json(
      { error: "ডেটা লোড করতে সমস্যা হয়েছে" },
      { status: 500 },
    );
  } // <--- এইখানে catch ব্লকের ব্র্যাকেট
} // <--- এইখানে ফাংশনের শেষ ব্র্যাকেট