import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "Our Story | Lush n' Luxe",
  description:
    "Learn about Lush n' Luxe — our mission, values, and commitment to sustainable luxury homeware and textiles.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
