import heroCenter from "@/assets/hero-center.jpg";

export const portrait =
  "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788624445/Gemini_Generated_Image_nisthcnisthcnist_eobnvm.png";

export { heroCenter };

export type Frame = {
  id: string;
  poster: string;
  /** Drop an .mp4 / .webm URL here later and the card plays real video. */
  video?: string;
  title: string;
  category: string;
};

export const frames: Frame[] = [
  {
    id: "reel-htc",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617279/HTC_TEASER_LAST_VERSION_iytkce.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617279/HTC_TEASER_LAST_VERSION_iytkce.mp4",
    title: "HTC Teaser",
    category: "Brand Film",
  },
  {
    id: "reel-ise",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617279/ISE_ANNONCE_n7orty.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617279/ISE_ANNONCE_n7orty.mp4",
    title: "ISE Annonce",
    category: "Announcement",
  },
  {
    id: "reel-final-announcement",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617280/VIDEO_ANNONCE_VERSION_FINAL_om3aqp.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617280/VIDEO_ANNONCE_VERSION_FINAL_om3aqp.mp4",
    title: "Final Announcement",
    category: "Campaign Film",
  },
  {
    id: "reel-mai",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617281/MAI_VIDEO_ihnhqz.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617281/MAI_VIDEO_ihnhqz.mp4",
    title: "Mai Video",
    category: "Creative Film",
  },
  {
    id: "reel-siphal",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617281/SIPHAL_x3q6ym.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617281/SIPHAL_x3q6ym.mp4",
    title: "Siphal",
    category: "Visual Story",
  },
  {
    id: "reel-pce",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/so_0/v1788617282/PCE_VIDEO_ffrjkb.jpg",
    video:
      "https://res.cloudinary.com/dgwcqsnn6/video/upload/v1788617282/PCE_VIDEO_ffrjkb.mp4",
    title: "PCE Video",
    category: "Campaign Film",
  },
  {
    id: "design-eid",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/eid-post_vgltzm.jpg",
    title: "Eid Post",
    category: "Campaign Artwork",
  },
  {
    id: "design-discover-team",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/discover-tr-team_ustgcp.jpg",
    title: "Discover TR Team",
    category: "Team Campaign",
  },
  {
    id: "design-exploration-event",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/exploration-event_oq1tii.jpg",
    title: "Exploration Event",
    category: "Event Campaign",
  },
  {
    id: "design-udat",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617974/charte_graphique_udat_2025_jaiei0.png",
    title: "UDAT 2025",
    category: "Brand Identity",
  },
  {
    id: "design-htc",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617974/charte_graphique_HTC_hrpzaz.png",
    title: "HTC Brand Guide",
    category: "Brand Identity",
  },
  {
    id: "design-compounding",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617973/charte_graphique_compounding_event_lqyapt.png",
    title: "Compounding Event",
    category: "Brand Identity",
  },
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
    title: "Eid Post",
    client: "Social Design",
    category: "Campaign Artwork",
    year: "2026",
    description: "A celebratory social design created for Eid communication.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/eid-post_vgltzm.jpg",
  },
  {
    index: "02",
    title: "Discover TR Team",
    client: "Brand Design",
    category: "Team Campaign",
    year: "2026",
    description: "A team-focused campaign visual with a bold editorial direction.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/discover-tr-team_ustgcp.jpg",
  },
  {
    index: "03",
    title: "Exploration Event",
    client: "Event Design",
    category: "Event Campaign",
    year: "2026",
    description: "Visual communication for an exploration-focused event experience.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617998/exploration-event_oq1tii.jpg",
  },
  {
    index: "04",
    title: "UDAT 2025",
    client: "UDAT",
    category: "Brand Identity",
    year: "2025",
    description: "A complete graphic direction developed for the UDAT 2025 identity.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617974/charte_graphique_udat_2025_jaiei0.png",
  },
  {
    index: "05",
    title: "HTC Brand Guide",
    client: "HTC",
    category: "Brand Identity",
    year: "2025",
    description: "A visual identity system created for the HTC brand.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617974/charte_graphique_HTC_hrpzaz.png",
  },
  {
    index: "06",
    title: "Compounding Event",
    client: "Event Identity",
    category: "Brand Identity",
    year: "2025",
    description: "A graphic identity developed for the Compounding event.",
    poster:
      "https://res.cloudinary.com/dgwcqsnn6/image/upload/v1788617973/charte_graphique_compounding_event_lqyapt.png",
  },
];

export const services = [
  {
    n: "01",
    title: "Design",
    body: "Make ideas visible. Creating clear, coherent and engaging visual assets adapted to the needs of a campaign.",
  },
  {
    n: "02",
    title: "Video",
    body: "Turn moments into stories. From filming to editing, transforming ideas and events into dynamic visual content.",
  },
  {
    n: "03",
    title: "Photography",
    body: "Capture the moment. Documenting events and preserving the moments that tell the story of an organization.",
  },
  {
    n: "04",
    title: "Communication",
    body: "Give ideas a voice. Thinking about messaging, storytelling and how a project can be effectively communicated.",
  },
  {
    n: "05",
    title: "Team Coordination",
    body: "Make people work better together. Working with a team, distributing responsibilities and helping productions move from idea to final delivery.",
  },
  {
    n: "06",
    title: "Competitive Intelligence",
    body: "Observe. Compare. Learn. Analyzing communication strategies, trends and practices to identify relevant opportunities for ASEPA.",
  },
];

export const processSteps = [
  { n: "01", title: "Understand", body: "Understand the project, its objective and its audience." },
  { n: "02", title: "Plan", body: "Define the message, needs and responsibilities." },
  { n: "03", title: "Create", body: "Turn the idea into meaningful content." },
  { n: "04", title: "Collaborate", body: "Work with everyone involved in the project." },
  { n: "05", title: "Refine", body: "Receive feedback, improve and finalize." },
  { n: "06", title: "Deliver", body: "Deliver the right content, at the right time, in the right place." },
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
