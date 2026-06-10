import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Account Page",
  description: "You're Welcome!",
};

import AccountConfig from "@/components/AccountComponents/AccountConfig";

export default  function AccountPage(){
   return (<>
        <AccountConfig />
   </>)
}