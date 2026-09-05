import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Showreel } from "@/components/site/Showreel";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Abdeldjalil Sanadiki — ASEPA";
const description =
  "Abdeldjalil Sanadiki, Pharmacy student and ASEPA candidate for Vice-President Marketing & Publicité.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <Showreel />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
