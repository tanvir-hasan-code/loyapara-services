import { collectionName } from "@/lib/CollectionName/CollectionName";
import dbConnect from "@/lib/MongoDB/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // MongoDB থেকে ObjectId ইমপোর্ট করতে হবে

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // ১. URL থেকে ডাইনামিক ID টি নেওয়া
    const {id} = await params;

    // ২. ID টি সঠিক MongoDB ObjectId ফরম্যাটে আছে কিনা তা চেক করা
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "ভুল ID ফরম্যাট প্রদান করা হয়েছে" }, 
        { status: 400 }
      );
    }

    // ৩. ডেটাবেস কানেকশন
    const collection = await dbConnect(collectionName.ALL as string);

    // ৪. নির্দিষ্ট ID দিয়ে সিঙ্গেল ডেটা খোঁজা (findOne ব্যবহার করে)
    const data = await collection.findOne({ _id: new ObjectId(id) });

    // ৫. যদি ওই ID তে কোনো ডেটা না পাওয়া যায়
    if (!data) {
      return NextResponse.json(
        { error: "কোনো ডেটা পাওয়া যায়নি" }, 
        { status: 404 }
      );
    }

    // ৬. ডেটা পাওয়া গেলে তা রিটার্ন করা
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Fetch Single Data Error:", error);
    return NextResponse.json(
      { error: "ডেটা লোড করতে সমস্যা হয়েছে" }, 
      { status: 500 }
    );
  }
}