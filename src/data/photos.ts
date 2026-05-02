// Replace these placeholder URLs with your ImageKit links.
// Example ImageKit URL: https://ik.imagekit.io/your_id/folder/photo.jpg

export type Photo = {
  src: string;
  alt: string;
};

export type Category = {
  slug: "weddings" | "fashion" | "music";
  title: string;
  tagline: string;
  description: string;
  cover: string;
  photos: Photo[];
};

const ph = (seed: string, w = 1200, h = 1500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const categories: Category[] = [
  {
    slug: "weddings",
    title: "Weddings",
    tagline: "Cinematic. Timeless. Yours.",
    description:
      "Over 30+ weddings documented across Assam — candid storytelling blended with creative composition, capturing both grand moments and the smallest emotions.",
    cover: ph("wed-cover", 1600, 1000),
    photos: [
      { src: ph("wed-1"), alt: "Wedding moment 1" },
      { src: ph("wed-2"), alt: "Wedding moment 2" },
      { src: ph("wed-3"), alt: "Wedding moment 3" },
      { src: ph("wed-4"), alt: "Wedding moment 4" },
      { src: ph("wed-5"), alt: "Wedding moment 5" },
      { src: ph("wed-6"), alt: "Wedding moment 6" },
      { src: ph("wed-7"), alt: "Wedding moment 7" },
      { src: ph("wed-8"), alt: "Wedding moment 8" },
    ],
  },
  {
    slug: "fashion",
    title: "Fashion",
    tagline: "Personality, aesthetics, identity.",
    description:
      "Styled editorial shoots that highlight personality and brand identity — clean composition with cinematic tones.",
    cover: ph("fashion-cover", 1600, 1000),
    photos: [
      { src: ph("fashion-1"), alt: "Fashion shot 1" },
      { src: ph("fashion-2"), alt: "Fashion shot 2" },
      { src: ph("fashion-3"), alt: "Fashion shot 3" },
      { src: ph("fashion-4"), alt: "Fashion shot 4" },
      { src: ph("fashion-5"), alt: "Fashion shot 5" },
      { src: ph("fashion-6"), alt: "Fashion shot 6" },
    ],
  },
  {
    slug: "music",
    title: "Live & Music",
    tagline: "The energy of the stage.",
    description:
      "Working with renowned and playback singers — live performances, portraits, and promotional shoots, captured with raw clarity.",
    cover: ph("music-cover", 1600, 1000),
    photos: [
      { src: ph("music-1"), alt: "Live music 1" },
      { src: ph("music-2"), alt: "Live music 2" },
      { src: ph("music-3"), alt: "Live music 3" },
      { src: ph("music-4"), alt: "Live music 4" },
      { src: ph("music-5"), alt: "Live music 5" },
      { src: ph("music-6"), alt: "Live music 6" },
    ],
  },
];

export const heroImage = ph("hero-bhaskar", 1920, 1080);
export const portraitImage = ph("bhaskar-portrait", 900, 1200);

export const featured: Photo[] = [
  { src: ph("feat-1", 800, 800), alt: "Featured 1" },
  { src: ph("feat-2", 800, 800), alt: "Featured 2" },
  { src: ph("feat-3", 800, 800), alt: "Featured 3" },
  { src: ph("feat-4", 800, 800), alt: "Featured 4" },
  { src: ph("feat-5", 800, 800), alt: "Featured 5" },
  { src: ph("feat-6", 800, 800), alt: "Featured 6" },
  { src: ph("feat-7", 800, 800), alt: "Featured 7" },
  { src: ph("feat-8", 800, 800), alt: "Featured 8" },
];

export const contact = {
  email: "bhaskar@example.com",
  instagram: "https://instagram.com/your_handle",
  instagramHandle: "@your_handle",
  whatsapp: "+919999999999", // international format, no spaces
  whatsappDisplay: "+91 99999 99999",
  location: "Assam, India",
};