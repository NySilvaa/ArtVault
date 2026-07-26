import { Metadata } from "next";
import { cookies } from "next/headers";
import AccountConfig from "@/components/AccountComponents/AccountConfig";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Account Page",
  description: "You're Welcome!",
};

export default async function AccountPage() {
  const cookie = await cookies();

  const GRAPHQL_QUERY = `
    query LoginUsuario($id: String!) {
      getDataUser(Id: $id) {
        username
        email
      }
    }
  `;

  try {
    const idUser = cookie.get("token")?.value;

    if (!idUser) {
      return (
        <div className="p-4 text-red-500">
          <p>Erro: Sessão expirada ou usuário não identificado. Faça login novamente.</p>
        </div>
      );
    }

    const response = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: { id: idUser },
      }),
      cache: 'no-store',
    });

    const result = await response.json();

    if (result.errors && result.errors.length > 0) {
      return (
        <div className="p-4 text-red-500">
          <p>Erro na API: {result.errors[0].message}</p>
        </div>
      );
    }

    const userData = result.data?.getDataUser;

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