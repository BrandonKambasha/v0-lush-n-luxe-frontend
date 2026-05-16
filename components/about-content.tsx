"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Leaf, Recycle, Heart, ShieldCheck } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-32 lg:py-40">
      <Image
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&q=80"
        alt="Elegant interior design"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          Born from a belief that beauty and responsibility can coexist,
          Lush n&apos; Luxe reimagines what luxury homeware means for people and the planet.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── Founders Story ──────────────────── */

function FoundersStory() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Founders workspace"
                width={900}
                height={700}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="lg:w-1/2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Our Beginning
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              A Vision Woven with Purpose
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Lush n&apos; Luxe was founded in the rolling hills of Northern Ireland
              with a singular vision: to prove that luxury and sustainability
              are not opposing forces, but natural partners. Our founders saw an
              industry rife with waste and overproduction, and chose a different
              path.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From sourcing the finest organic fibres to partnering with ethical
              manufacturers, every decision reflects our belief that comfort
              should never compromise conscience. Today, we serve discerning
              homeowners, boutique hotels, and forward-thinking businesses across
              the UK and Ireland.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Mission & Vision ──────────────────── */

function MissionVision() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Mission & Vision" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-lg border border-border bg-background p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Our Mission
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                Luxury Made Responsible
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To deliver premium homeware and textiles that elevate everyday
                living while championing sustainable practices, ethical sourcing,
                and circular economy principles at every stage of our supply
                chain.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="h-full rounded-lg border border-border bg-background p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Our Vision
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                A Greener Standard
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become the benchmark for sustainable luxury in homeware — a
                brand that proves premium quality, environmental stewardship,
                and accessible pricing can exist in perfect harmony.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Brand Values ──────────────────── */

const values = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "Every fibre is traceable, every supplier is vetted, and every material meets our rigorous environmental standards.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Our return-and-recycle programme ensures textiles are repurposed, repaired, or recycled — never landfilled.",
  },
  {
    icon: Heart,
    title: "Ethical Craftsmanship",
    description:
      "Fair wages, safe conditions, and genuine partnerships with every artisan and manufacturer in our supply chain.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "We test every product to the highest standards so our customers enjoy longevity, comfort, and timeless design.",
  },
];

function BrandValues() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Values"
            subtitle="The four pillars that guide every thread we weave and every partnership we build."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <motion.div
              key={val.title}
              variants={staggerItem}
              className="group rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <val.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {val.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function AboutContent() {
  return (
    <>
      <AboutHero />
      <FoundersStory />
      <MissionVision />
      <BrandValues />
    </>
  );
}
