import heroImage from "@/assets/images/wardrobe/hero.jpg";

//Image for Gallery section
import wardrobe1 from "@/assets/images/wardrobe/gallery-1.jpg";
import wardrobe2 from "@/assets/images/wardrobe/gallery-2.jpg";
import wardrobe3 from "@/assets/images/wardrobe/gallery-3.jpg";
import wardrobe4 from "@/assets/images/wardrobe/gallery-4.jpg";

//Image for storage solutions

//Image for Blueprint section

import blueprint from "@/assets/images/wardrobe/blueprint.jpg";




export const wardrobeData = {
  hero: {
    tag: "Premium Wardrobes",

    title: "Sliding & Hinged",

    italicWord: "Wardrobes",

    description:
      "Premium modular wardrobes designed with intelligent storage, elegant finishes, and customized interiors for modern homes across Delhi NCR.",

    image: heroImage,

    imageAlt: "Luxury Modular Wardrobe",

    stats: [
      {
        value: "6000+",
        label: "Wardrobes Installed",
      },
      {
        value: "18+",
        label: "Years Experience",
      },      {
        value: "100%",
        label: "Custom Design",
      },
    ],

    featured: {
      title: "Luxury Sliding Wardrobe",
      subtitle: "South Delhi Residence",
    },
  },

  blueprint: {
    title: "Inside a Smart Wardrobe",
    image: blueprint,

    description:
      "Every wardrobe is thoughtfully designed with dedicated storage zones to maximize space and improve organization.",

    points: [
      {
        title: "Hanging Space",
        description: "Long and short hanging sections for clothes.",
      },
      {
        title: "Adjustable Shelves",
        description: "Flexible shelving for folded garments.",
      },
      {
        title: "Soft-Close Drawers",
        description: "Smooth operation with premium hardware.",
      },
      {
        title: "Loft Storage",
        description: "Additional storage for seasonal items.",
      },
      {
        title: "Shoe Organizer",
        description: "Dedicated space for footwear.",
      },
      {
        title: "Accessory Section",
        description: "Jewellery, watches, belts, and ties.",
      },
    ],
  },

  storage: {
    title: "Smart Storage Solutions",

    items: [
      {
        title: "Trouser Pull-Out",
        image : wardrobe1,
        description:
          "Keep trousers neatly organized and wrinkle-free.",
      },
      {
        title: "Jewellery Organizer",
        image : wardrobe1,
        description:
          "Dedicated drawers for jewellery and accessories.",
      },
      {
        title: "Shoe Rack",
        image : wardrobe1,
        description:
          "Separate compartments for everyday footwear.",
      },
      {
        title: "Tie & Belt Holder",
        image : wardrobe1,
        description:
          "Easy access to accessories while maximizing space.",
      },
      {
        title: "Laundry Basket",
        image : wardrobe1,
        description:
          "Integrated pull-out basket for convenience.",
      },
      {
        title: "Loft Storage",
        image : wardrobe1,
        description:
          "Additional storage for luggage and seasonal items.",
      },
    ],
  },

  gallery: {
    tag: "Completed Projects",

    title: "Featured",

    italicWord: "Wardrobes",

    projects: [
      {
        title: "Luxury Sliding Wardrobe",
        location: "South Delhi",
        type: "Sliding Wardrobe",
        image: wardrobe1,
      },
      {
        title: "Modern Walk-in Wardrobe",
        location: "Noida",
        type: "Walk-in Wardrobe",
        image: wardrobe2,
      },
      {
        title: "Premium Hinged Wardrobe",
        location: "Gurugram",
        type: "Hinged Wardrobe",
        image: wardrobe3,
      },
    ],
  },
};
