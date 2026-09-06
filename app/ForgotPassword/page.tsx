import { Metadata } from "next";

import ForgotPasswordComponent from "@/components/ForgotPwComponent";

export const metadata: Metadata = {
  title: "Forgot Password - Art Vault",
  description: "Forgot Password - Art Vault",
};

export default function ForgotPasswordPage(){
    return (<>
        <ForgotPasswordComponent />
    </>)
}