import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Paintings",
  description: "The Best Paintings of the World",
};

import PaintingsComponent from "@/components/PaintingComponents/PaintingComponent";


export default function PaintingPage(){
    return (<>
        <PaintingsComponent />
    </>)
}