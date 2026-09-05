import reel01 from "@/assets/reel-01.jpg";
import reel02 from "@/assets/reel-02.jpg";
import reel03 from "@/assets/reel-03.jpg";
import reel04 from "@/assets/reel-04.jpg";
import reel05 from "@/assets/reel-05.jpg";
import reel06 from "@/assets/reel-06.jpg";
import reel07 from "@/assets/reel-07.jpg";
import reel08 from "@/assets/reel-08.jpg";
import heroCenter from "@/assets/hero-center.jpg";
import portrait from "@/assets/portrait.jpg";

export { heroCenter, portrait };

export type Frame = {
  id: string;
  poster: string;
  /** Drop an .mp4 / .webm URL here later and the card plays real video. */
  video?: string;
  title: string;
  category: string;
};

export const frames: Frame[] = [
  { id: "f1", poster: reel01, title: "Night Signals", category: "Cinematic" },
  { id: "f2", poster: reel02, title: "Studio 04", category: "Fashion Edit" },
  { id: "f3", poster: reel03, title: "Noir Bottle", category: "Product" },
  { id: "f4", poster: reel04, title: "Amber Stage", category: "Music Visual" },
  { id: "f5", poster: reel05, title: "Fluid Type", category: "Motion Graphics" },
  { id: "f6", poster: reel06, title: "Dune Grade", category: "Color Grading" },
  { id: "f7", poster: reel07, title: "Street Cuts", category: "Social Edit" },
  { id: "f8", poster: reel08, title: "Late Drive", category: "Short Form" },
];

export type Project = {
  index: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  poster: string;
  video?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Brand Film",
    client: "Meridian Studio",
    category: "Cinematic Edit",
    year: "2025",
    description:
      "A three-minute origin film cut from 40 hours of documentary footage. Paced for tension, graded warm and heavy.",
    poster: reel01,
  },
  {
    index: "02",
    title: "Social Campaign",
    client: "Ovate Athletics",
    category: "Short Form",
    year: "2025",
    description:
      "Twenty-four vertical cuts built from a single shoot day. Hooks in the first 0.6 seconds, captions animated in-house.",
    poster: reel07,
  },
  {
    index: "03",
    title: "Music Video",
    client: "KAVE",
    category: "Performance",
    year: "2024",
    description:
      "Strobe-synced cutting, hand-tracked light leaks and a grade pushed to burnt amber.",
    poster: reel04,
  },
  {
    index: "04",
    title: "Product Commercial",
    client: "Dahlia Parfums",
    category: "Commercial",
    year: "2024",
    description:
      "Macro coverage, speed-ramped pours and a soundtrack cut to the frame. Delivered in six aspect ratios.",
    poster: reel03,
  },
  {
    index: "05",
    title: "Motion Design",
    client: "Frame Festival",
    category: "Titles & Graphics",
    year: "2024",
    description:
      "Title system, transitions and animated typography for a festival identity that had to survive the big screen.",
    poster: reel05,
  },
  {
    index: "06",
    title: "Short-Form Content",
    client: "Independent",
    category: "Series",
    year: "2023",
    description:
      "An ongoing series of experiments — rhythm tests, grade studies and edits made purely for the cut.",
    poster: reel06,
  },
];

export const services = [
  {
    n: "01",
    title: "Video Editing",
    body: "From raw footage to a finished story.",
  },
  {
    n: "02",
    title: "Motion Design",
    body: "Titles, transitions, typography, animated graphics and visual effects.",
  },
  {
    n: "03",
    title: "Social Content",
    body: "Short-form content designed for Reels, TikTok, YouTube Shorts and social campaigns.",
  },
  {
    n: "04",
    title: "Color Grading",
    body: "Cinematic color correction and visual consistency.",
  },
  {
    n: "05",
    title: "Visual Design",
    body: "Thumbnails, campaign visuals, graphics and supporting assets.",
  },
  {
    n: "06",
    title: "Creative Direction",
    body: "Helping shape the visual language of a project from concept to final cut.",
  },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Understand the idea, audience and visual direction." },
  { n: "02", title: "Select", body: "Organize footage and find the moments that matter." },
  { n: "03", title: "Edit", body: "Build the rhythm, structure and story." },
  { n: "04", title: "Design", body: "Add motion, typography, graphics and visual identity." },
  { n: "05", title: "Polish", body: "Color, sound, transitions and final details." },
  { n: "06", title: "Deliver", body: "Export optimized content ready for its platform." },
];

export const testimonials = [
  {
    quote:
      "He found the film inside our footage. What came back was sharper, quieter and far more confident than the cut we imagined.",
    person: "Lena Ortiz",
    role: "Creative Lead",
    company: "Meridian Studio",
  },
  {
    quote:
      "Our retention doubled on the second batch. The edits feel native to the platform without ever looking cheap.",
    person: "Tomas Reiner",
    role: "Head of Brand",
    company: "Ovate Athletics",
  },
  {
    quote:
      "Motion, grade and sound arrived as one coherent idea. That almost never happens with an outside editor.",
    person: "Amira Haddad",
    role: "Producer",
    company: "Frame Festival",
  },
];

export const marqueeItems = [
  "Video Editing",
  "Motion Design",
  "Color Grading",
  "Creative Content",
  "Visual Design",
  "Short Form",
  "Long Form",
  "Commercials",
];
