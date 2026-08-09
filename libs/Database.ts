import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
let clientConnect: MongoClient | null = null;

export async function getMongoClient() {
  if (!clientConnect) {
    clientConnect = new MongoClient(uri);
    await clientConnect.connect();
  }

  return clientConnect;
}