import Background from "@/components/BgHomeComponents/Background";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Home",
  description: "Art Vault Page - Your Art Gallery",
};

export default async function HomePage(){
  return (<Background />)
}