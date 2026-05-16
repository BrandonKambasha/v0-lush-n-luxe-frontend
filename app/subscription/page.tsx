import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SubscriptionContent from "@/components/subscription-content";

export const metadata: Metadata = {
  title: "Linen Subscription | Lush n' Luxe",
  description:
    "A smarter way to manage textiles. Subscribe to regular linen deliveries, returns, and refreshes for homes and businesses.",
};

export default function SubscriptionPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubscriptionContent />
      </main>
      <Footer />
    </>
  );
}
