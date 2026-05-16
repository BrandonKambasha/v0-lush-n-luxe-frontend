import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SustainabilityContent from "@/components/sustainability-content";

export const metadata: Metadata = {
  title: "Sustainability | Lush n' Luxe",
  description:
    "Our commitment to sustainable luxury — circular textile programmes, return and recycle initiatives, and environmental impact metrics.",
};

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        <SustainabilityContent />
      </main>
      <Footer />
    </>
  );
}
