import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Header />
      <Hero />
      <Info />
      <Footer />
    </main>
  );
}
