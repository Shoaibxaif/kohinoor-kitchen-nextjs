import heroImage from "@/assets/images/sofas/hero.jpg";

import sofa1 from "@/assets/images/sofas/gallery-1.jpg";
import sofa2 from "@/assets/images/sofas/gallery-2.jpg";
import sofa3 from "@/assets/images/sofas/gallery-3.jpg";

export const sofaData = {
  hero: {
    tag: "Premium Sofas",

    title: "Luxury Living",

    italicWord: "Sofas",

    description:
      "Premium sofas designed for modern homes, combining luxurious comfort, elegant aesthetics, and long-lasting craftsmanship for every living space.",

    image: heroImage,

    imageAlt: "Luxury Sofa",

    featured: {
      title: "Contemporary L-Shaped Sofa",
      subtitle: "Delhi NCR Residence",
    },
  },

  gallery: {
    tag: "Featured Collection",

    title: "Elegant",

    italicWord: "Living Spaces",

    projects: [
      {
        title: "Modern L-Shaped Sofa",
        location: "South Delhi",
        type: "Sectional Sofa",
        image: sofa1,
      },
      {
        title: "Luxury Fabric Sofa",
        location: "Noida",
        type: "3-Seater Sofa",
        image: sofa2,
      },
      {
        title: "Premium Leather Sofa",
        location: "Gurugram",
        type: "Luxury Living Room",
        image: sofa3,
      },
    ],
  },
};