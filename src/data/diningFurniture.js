import heroImage from "@/assets/images/dining/hero.jpg";

import dining1 from "@/assets/images/dining/gallery-1.jpg";
import dining2 from "@/assets/images/dining/gallery-2.jpg";
import dining3 from "@/assets/images/dining/gallery-3.jpg";

export const diningFurnitureData = {
  hero: {
    tag: "Premium Dining Furniture",

    title: "Elegant Dining",

    italicWord: "Furniture",

    description:
      "Premium dining tables and chairs crafted with quality materials, elegant finishes, and timeless designs for modern homes across Delhi NCR.",

    image: heroImage,

    imageAlt: "Luxury Dining Furniture",

    featured: {
      title: "Modern Dining Set",
      subtitle: "South Delhi Residence",
    },
  },

  gallery: {
    tag: "Featured Collection",

    title: "Beautiful",

    italicWord: "Dining Spaces",

    projects: [
      {
        title: "6-Seater Dining Set",
        location: "Delhi",
        type: "Solid Wood",
        image: dining1,
      },
      {
        title: "Modern Marble Dining Table",
        location: "Noida",
        type: "Luxury Dining",
        image: dining2,
      },
      {
        title: "Contemporary Dining Space",
        location: "Gurugram",
        type: "Premium Collection",
        image: dining3,
      },
    ],
  },
};