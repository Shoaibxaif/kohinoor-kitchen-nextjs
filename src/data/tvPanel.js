import heroImage from "@/assets/images/tv-panel/hero.jpg";

import panel1 from "@/assets/images/tv-panel/gallery-1.jpg";
import panel2 from "@/assets/images/tv-panel/gallery-2.jpg";
import panel3 from "@/assets/images/tv-panel/gallery-3.jpg";

export const tvPanelData = {
  hero: {
    tag: "Premium TV Panels",

    title: "Modern",

    italicWord: "TV Panels",

    description:
      "Custom TV panels and entertainment units designed with premium materials, elegant finishes, and smart storage solutions for contemporary living rooms.",

    image: heroImage,

    imageAlt: "Luxury TV Panel",

    featured: {
      title: "Modern Entertainment Unit",
      subtitle: "South Delhi Residence",
    },
  },

  gallery: {
    tag: "Featured Collection",

    title: "Elegant",

    italicWord: "Entertainment Spaces",

    projects: [
      {
        title: "Floating TV Unit",
        location: "South Delhi",
        type: "Modern TV Panel",
        image: panel1,
      },
      {
        title: "Wood Finish TV Panel",
        location: "Noida",
        type: "Luxury Living Room",
        image: panel2,
      },
      {
        title: "Contemporary Entertainment Unit",
        location: "Gurugram",
        type: "Wall Mounted TV Panel",
        image: panel3,
      },
    ],
  },
};