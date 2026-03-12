import { collectionName } from "@/lib/CollectionName/CollectionName";
import dbConnect from "@/lib/MongoDB/mongodb";


export async function GET() {
  const collection = await dbConnect(collectionName.FARMER); 
	const data = await collection.find({}).toArray();
	const count = data.length
  return Response.json({data, count, mesage: "data fetching Success"});
}