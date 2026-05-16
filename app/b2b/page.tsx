import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import B2BContent from "@/components/b2b-content";

export const metadata: Metadata = {
  title: "B2B Solutions | Lush n' Luxe",
  description:
    "Professional linen and textile supply solutions for hotels, Airbnb hosts, hospitals, and corporate buyers.",
};

export default function B2BPage() {
  return (
    <>
      <Navbar />
      <main>
        <B2BContent />
      </main>
      <Footer />
    </>
  );
}
