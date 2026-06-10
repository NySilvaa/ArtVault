import Script from 'next/script';
import SingUpComponent from "@/components/SignUpComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Art Vault",
  description: "Sign Up - Art Vault",
};

export default function SignUp() {
    return (<>
        <SingUpComponent />
        <Script src='/js/login.interactions.js'></Script>
    </>)
};