import { Schema, model, Document } from 'mongoose';

// 1. Defina a interface que representa o documento no TypeScript
export interface IUser {
  username: string;
  email: string;
  password: string;
}

// 2. Crie o Schema do Mongoose correspondente
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 3. Crie e exporte o Modelo
export const MongooseResolver = model<IUser>('MongooseResolver', userSchema);