import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Lush n' Luxe",
  description:
    "Get in touch with Lush n' Luxe. Book a consultation, request a quote, or visit our showroom in Castlewellan, Northern Ireland.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
