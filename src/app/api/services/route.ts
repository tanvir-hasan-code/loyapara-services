import { collectionName } from "@/lib/CollectionName/CollectionName";
import dbConnect from "@/lib/MongoDB/mongodb";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // decodeURIComponent ব্যবহার করা হয়েছে যাতে ব্রাউজার থেকে আসা বাংলা টেক্সট ঠিক থাকে
    const searchQuery = decodeURIComponent(searchParams.get("search") || "").trim();
    const categoryQuery = decodeURIComponent(searchParams.get("category") || "All");

    const collectionsToFetch = Object.values(collectionName);

    const allCollectionsData = await Promise.all(
      collectionsToFetch.map(async (col) => {
        try {
          const collection = await dbConnect(col as string);
          return await collection.find({}).toArray();
        } catch (err) {
          console.error(`Error fetching from ${col}:`, err);
          return [];
        }
      })
    );

    const allServices = allCollectionsData.flat();

    const filteredData = allServices.filter((service: any) => {
      // ১. ক্যাটাগরি ফিল্টার
      const matchesCategory = 
        categoryQuery === "All" || 
        service.category === categoryQuery;

      // ২. বাংলা সার্চ লজিক (Case sensitive ইস্যু এড়াতে এবং নিখুঁত ম্যাচ করতে)
      if (!searchQuery) return matchesCategory;

      const matchesSearch = 
        service.name?.includes(searchQuery) ||
        service.phone?.includes(searchQuery) ||
        service.category?.includes(searchQuery) ||
        service.serviceType?.includes(searchQuery) ||
        (Array.isArray(service.speciality) && 
          service.speciality.some((s: string) => s.includes(searchQuery)));

      return matchesCategory && matchesSearch;
    });

    return NextResponse.json(filteredData);

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message }, 
      { status: 500 }
    );
  }
}