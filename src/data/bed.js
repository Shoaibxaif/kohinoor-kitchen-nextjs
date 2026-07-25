import heroImage from "@/assets/images/beds/hero.jpg";

import bed1 from "@/assets/images/beds/gallery-1.jpg";
import bed2 from "@/assets/images/beds/gallery-2.jpg";
import bed3 from "@/assets/images/beds/gallery-3.jpg";
import bed4 from "@/assets/images/beds/gallery-4.jpg";

export const bedData = {
  hero: {
    tag: "Premium Beds",

    title: "Luxury Wooden",

    italicWord: "Beds",

    description:
      "Discover beautifully crafted wooden beds designed for comfort, durability, and modern living. Customized designs with premium materials for every bedroom.",

    image: heroImage,

    imageAlt: "Luxury Wooden Bed",

    featured: {
      title: "Modern Storage Bed",
      subtitle: "Delhi NCR Residence",
    },
  },

  gallery: {
    tag: "Featured Collection",

    title: "Beautiful",

    italicWord: "Bedrooms",

    projects: [
      {
        title: "Hydraulic Storage Bed",
        location: "South Delhi",
        type: "King Size Bed",
        image: bed1,
      },
      {
        title: "Minimal Wooden Bed",
        location: "Noida",
        type: "Queen Size Bed",
        image: bed2,
      },
      {
        title: "Luxury Upholstered Bed",
        location: "Gurugram",
        type: "Premium Bedroom",
        image: bed3,
      },
    ],
  },
};