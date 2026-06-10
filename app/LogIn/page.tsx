// IMPORTAÇÕES DO NEXT JS
import { Metadata } from 'next';
import Script from 'next/script';

// COMPONENTES
import LogInConfig from '@/components/LoginComponent';

export const metadata: Metadata = {
  title: "Log In - Art Vault",
  description: "Log In Now and Check Out Our Profile Panel",
};

export default function LogInPage(){
  return (<>
      <LogInConfig />
      
      <Script src='/js/login.interactions.js'></Script>
  </>);
}