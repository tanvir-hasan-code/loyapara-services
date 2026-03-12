import { MongoClient, ServerApiVersion } from 'mongodb';

const uri: string | undefined = process.env.MONGODB_URI;

// console.log(uri)

if (!uri) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env');
	// console.log("MISSING URI")
}
const dbConnect = (collectionName: string) => {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 return client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;