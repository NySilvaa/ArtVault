import { ObjectType, Field, ID, Resolver, Query, Mutation, Arg } from "type-graphql";
import mongoose from "mongoose";
import { MongooseResolver } from "./MongooseResolver";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string
}

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.data;
    }

    @Mutation(() => User)
    async CreateUser(
        @Arg("name") name: string,
        @Arg("email") email: string,
        @Arg("password") password: string 
    ): Promise<User> {
        const newUser: User = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            password
        };

        this.data.push(newUser);
        return newUser;
    }

    @Mutation(() => User)
    async GetUser(
    ){
        const mongoURL = "https://cloud.mongodb.com/v2/675b014fae7b8b237aeabd9b#/explorer/675b0572c53a27350477e9d4/artVault"

        try {
        // Conectando ao MongoDB
        await mongoose.connect(mongoURL);
        console.log('Conectado ao MongoDB com sucesso!');

        // --- EXEMPLO 1: Buscar TODOS os usuários ativos ---
        // O TypeScript já sabe que 'usuariosAtivos' é um array de IUser
        const usuariosAtivos = await MongooseResolver.find({ username: "nycolas" });
        console.log('Usuários ativos encontrados:', usuariosAtivos);


        // // --- EXEMPLO 2: Buscar UM usuário específico pelo e-mail ---
        // const emailBusca = 'usuario@email.com';
        // const usuario = await User.findOne({ email: emailBusca });
        
        // if (usuario) {
        // // O autocomplete vai funcionar aqui para 'name', 'email', etc.
        // console.log(`Usuário encontrado: ${usuario.name}, Idade: ${usuario.age}`);
        // } else {
        // console.log('Usuário não encontrado.');
        // }

    } catch (error) {
        console.error('Erro na operação:', error);
    }
    }
}