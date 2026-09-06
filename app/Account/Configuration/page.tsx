// COMPONENT
import ConfigurationForm from "@/components/ConfigurationComponent";

// METADATA
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Configuration",
  description: "Config Your Account Now",
};

export default function ConfigurationPage(){
    return (<>
        <ConfigurationForm />
    </>)
}