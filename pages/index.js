import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Features from "@/Components/template/index/Features";
import Story from "@/Components/template/index/Story";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Features />
      <Story/>
    </>
  );
}
