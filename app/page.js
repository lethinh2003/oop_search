import Header from "@/components/Home/Header";
import Introduce from "@/components/Home/Introduce";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Introduce />
    </>
  );
}
