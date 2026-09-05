import { createFileRoute } from "@tanstack/react-router";

import { Cursor } from "@/components/site/Cursor";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Showreel } from "@/components/site/Showreel";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Your Name — Video Editor & Visual Designer";
const description =
  "Portfolio of a video editor, motion designer and visual designer: brand films, social campaigns, music videos, commercials, motion design and color grading.";

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
    <div className="md:cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <Showreel />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
