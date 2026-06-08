import { MongoClient } from "mongodb";

if (!process.env.MONGODB_CONNECT) {
  throw new Error('Erro ao Conectar-se com o Banco de Dados');
}

const uri = process.env.MONGODB_CONNECT;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // No desenvolvimento, usa uma variável global para preservar a conexão no Hot Reload
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
  
} else {
  // Em produção, é melhor não usar variável global
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;