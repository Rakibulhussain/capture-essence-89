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

// ❌ REMOVE this dummy function
// const ph = ...

export const categories: Category[] = [
  {
    slug: "weddings",
    title: "Weddings",
    tagline: "Cinematic. Timeless. Yours.",
    description:
      "Over 30+ weddings documented across Assam — candid storytelling blended with creative composition.",

    // ✅ Replace cover image
    cover:
      "https://ik.imagekit.io/il1hcqwbr/img/IMG_6012.JPG.jpeg?updatedAt=1777720197448",

    // ✅ Add your real wedding photos here
    photos: [
      {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6012.JPG.jpeg?updatedAt=1777720197448",
        alt: "Wedding moment",
      },
      {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6001.JPG.jpeg?updatedAt=1777720195699",
        alt: "Wedding couple",
      },
      {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_5335.PNG?updatedAt=1777720180402",
        alt: "Wedding detail",
      },

      {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6488.JPG.jpeg?updatedAt=1777720179552",
        alt: "Wedding candid",
      },
        {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6075.JPG.jpeg?updatedAt=1777720178062",
        alt: "Wedding candid",
      },
      
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6037.JPG.jpeg?updatedAt=1777720177768",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6072.JPG.jpeg?updatedAt=1777720176130",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6065.JPG.jpeg?updatedAt=1777720174076",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6070.JPG.jpeg?updatedAt=1777720175546",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6086.JPG.jpeg?updatedAt=1777720175458",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6066.JPG.jpeg?updatedAt=1777720175612",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_2337.JPG.jpeg?updatedAt=1777720175953",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_1837.JPG.jpeg?updatedAt=1777720174239",
    alt: "Wedding candid",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6075.JPG.jpeg?updatedAt=1777720178062",
    alt: "Wedding candid",
  },
  {src : "https://ik.imagekit.io/il1hcqwbr/img/IMG_1836.JPG.jpeg?updatedAt=1777720172669", alt: "Wedding candid"},
{ src:"  ",alt: "Wedding candid"},
   
{ src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_5333.JPG.jpeg?updatedAt=1777720168493 ",alt: "Wedding candid"},
{ src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_5334.JPG.jpeg?updatedAt=1777720169707 ",alt: "Wedding candid"},
{ src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_6487.JPG.jpeg?updatedAt=1777720166575 ",alt: "Wedding candid"},
{ src:"https://ik.imagekit.io/il1hcqwbr/img/IMG_6485.JPG.jpeg?updatedAt=1777720162575  ",alt: "Wedding candid"},
{ src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_5715.TIF?updatedAt=1777720160442 ",alt: "Wedding candid"},









    ],
  },

  {
    slug: "fashion",
    title: "Fashion",
    tagline: "Personality, aesthetics, identity.",
    description:
      "Styled editorial shoots that highlight personality and brand identity.",

    cover:
      "https://ik.imagekit.io/il1hcqwbr/img/IMG_8645.JPG.jpeg?updatedAt=1777720197089",

    photos: [
      {
        src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_8645.JPG.jpeg?updatedAt=1777720197089",
          alt: "Fashion shoot",
      },

      { src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_8644.JPG.jpeg?updatedAt=1777720195049",alt: "Fashion shoot",},
       { src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_8645.JPG.jpeg?updatedAt=1777720197089",alt: "Fashion shoot",},
        { src:"https://ik.imagekit.io/il1hcqwbr/img/IMG_8656.JPG.jpeg?updatedAt=1777720191631 ",alt: "Fashion shoot",},
         { src:"https://ik.imagekit.io/il1hcqwbr/img/IMG_8654.JPG.jpeg?updatedAt=1777720191720 ",alt: "Fashion shoot",},
          { src:"https://ik.imagekit.io/il1hcqwbr/img/IMG_8646.JPG.jpeg?updatedAt=1777720191476 ",alt: "Fashion shoot",},
           { src:"https://ik.imagekit.io/il1hcqwbr/img/IMG_8653.JPG.jpeg?updatedAt=1777720190265 ",alt: "Fashion shoot",},

        {src:" https://ik.imagekit.io/il1hcqwbr/img/IMG_2334.JPG.jpeg?updatedAt=1777720177735" ,alt: "Fashion shoot"},
       



    ],

  },

  {
    slug: "music",
    title: "Live & Music",
    tagline: "The energy of the stage.",
    description:
      "Live performances and music photography capturing raw stage energy.",

    cover:
      "https://ik.imagekit.io/il1hcqwbr/img/IMG_5334.JPG.jpeg?updatedAt=1777720169707",

    photos: [
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.15%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.16%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.15%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.15%20PM%20(2).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.16%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.16%20PM%20(2).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.16%20PM%20(4).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.20%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.19%20PM%20(2).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.17%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.41.24%20PM%20(2).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.41.24%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.53%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.53%20PM%20(2).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.41.25%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.41.23%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.55%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.54%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.53%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.54%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.17%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.18%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.19%20PM.jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.20%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.19%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/WhatsApp%20Image%202026-05-02%20at%204.39.18%20PM%20(1).jpeg",
    alt: "Music performance",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_5334.JPG.jpeg?updatedAt=1777720169707",
    alt: "Music performance",
  }
]
  },
];

// ✅ Hero image (top banner)
export const heroImage =
  "https://ik.imagekit.io/il1hcqwbr/img/IMG_6012.JPG.jpeg?updatedAt=1777720197448";

// ✅ About section photo
export const portraitImage =
  "https://ik.imagekit.io/il1hcqwbr/img/IMG_8645.JPG.jpeg?updatedAt=1777720197089";

// ✅ Featured gallery
export const featured: Photo[] = [
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_6012.JPG.jpeg?updatedAt=1777720197448",
    alt: "Featured",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_8645.JPG.jpeg?updatedAt=1777720197089",
    alt: "Featured",
  },
  {
    src: "https://ik.imagekit.io/il1hcqwbr/img/IMG_5334.JPG.jpeg?updatedAt=1777720169707",
    alt: "Featured",
  },
];





// ✅ Contact fix
export const contact = {
  email: "barmanbhaskarrrrr914@gmail.com",
  instagram: "https://instagram.com/your_handle",
  instagramHandle: "@your_handle",

  // ❗ IMPORTANT FIX
  whatsapp: "https://wa.me/919394212929",
  whatsappDisplay: "+91 93942 12929",

  location: "Assam, India",
};