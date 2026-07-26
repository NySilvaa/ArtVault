// IMPORTAÇÕES DO NEXT JS
import { Metadata } from 'next';
import Script from 'next/script';

// COMPONENTES
import LogInConfig from '@/components/LoginComponent';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Log In - Art Vault",
  description: "Log In Now and Check Out Our Profile Panel",
};

export default async function LogInPage(){
  const cookie = await cookies();
  const emailUser = cookie.get("emailSignUp")?.value || "";
  console.log(emailUser)

  return (<>
    <LogInConfig email={emailUser}/>
      <Script src='/js/login.interactions.js'></Script>
  </>);
}