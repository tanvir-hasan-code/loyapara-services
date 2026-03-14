import { collectionName } from "@/lib/CollectionName/CollectionName";
import dbConnect from "@/lib/MongoDB/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    const categoryQuery = searchParams.get("category") || "All";

    // ১. সব কালেকশন থেকে ডাটা ফেচ করা
    // আপনার collectionName অবজেক্টের সব ভ্যালু নিয়ে লুপ চালানো হচ্ছে
    const collectionsToFetch = Object.values(collectionName);

    const allCollectionsData = await Promise.all(
      collectionsToFetch.map(async (col) => {
        const collection = await dbConnect(col as string);
        return collection.find({}).toArray();
      })
    );

    // ২. সব ডাটাকে একটি সিঙ্গেল অ্যারেতে নিয়ে আসা (Flattening)
    const allServices = allCollectionsData.flat();

    // ৩. ফিল্টারিং লজিক (Category এবং Search)
    const filteredData = allServices.filter((service: any) => {
      // ক্যাটাগরি ফিল্টার
      const matchesCategory = 
        categoryQuery === "All" || 
        service.category === categoryQuery;

      // সার্চ ফিল্টার (Name, Category, ServiceType)
      const matchesSearch = 
        service.name?.toLowerCase().includes(searchQuery) ||
        service.category?.toLowerCase().includes(searchQuery) ||
        service.serviceType?.toLowerCase().includes(searchQuery) ||
        service.speciality?.some((s: string) => s.toLowerCase().includes(searchQuery));

      return matchesCategory && matchesSearch;
    });

    return NextResponse.json(filteredData);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}