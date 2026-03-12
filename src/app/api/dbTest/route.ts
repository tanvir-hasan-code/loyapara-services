import dbConnect from "@/lib/MongoDB/mongodb";


export async function GET() {
  const collection = await dbConnect("farmer"); 
  const data = await collection.find({}).toArray();
  return Response.json(data);
}