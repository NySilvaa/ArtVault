import { Metadata } from "next";
import { cookies } from "next/headers";
import AccountConfig from "@/components/AccountComponents/AccountConfig";
import { graphqlRequest } from "../api/graphql/client";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Account Page",
  description: "You're Welcome!",
};

interface GetDataUserResult {
  getDataUser: {
    id: string;
    username: string;
    biography?: string;
    profile_photo?: string;
    complementary_img?: string[];
  };
}

export default async function AccountPage() {
  
  try {
    const cookie = await cookies();
    const idUser = cookie.get("token")?.value;

    if (!idUser) {
      return (
        <div className="p-4 text-red-500">
          <p>Erro: Sessão expirada ou usuário não identificado. Faça login novamente.</p>
        </div>
      );
    }
  
      const response = await graphqlRequest<GetDataUserResult>(
        `
        query getDataUser{
          getDataUser {
            username
          }
        }
        `,
        {},
        { requireAuth: true }
      );
    
      if (!response.success) {
        console.error("Erro ao buscar dados do usuário:", response.error);
        return null;
      }

    const userData = response.data?.getDataUser;

    if (!userData) {
      return (
        <div className="p-4 text-red-500">
          <p>Erro: Falha na autenticação dos dados do usuário.</p>
        </div>
      );
    }

    return (
      <>
        <AccountConfig user={userData} />
      </>
    );

  } catch (error) {
    console.error("Erro ao autenticar:", error);
    
    return (
      <div className="p-4 text-red-500">
        <p>Desculpe, ocorreu um erro interno na autenticação.</p>
      </div>
    );
  }
}