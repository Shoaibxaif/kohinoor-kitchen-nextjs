import { kitchenImages } from "./kitchenImages";
import {
  Home,
  LayoutGrid,
  Ruler,
  Boxes,
  Workflow,
  IndianRupee,
} from "lucide-react";

export const kitchenLayouts = {
  lShaped: {
    hero: {
      subtitle: "Luxury Modular Kitchens",
      title: "L-Shaped Kitchen",
      description:
        "Elegant L-shaped modular kitchens designed to maximize corner space while delivering a seamless cooking experience.",
      image: kitchenImages.lShaped.hero,
      buttonText: "Get Free Consultation",
      buttonLink: "/contact",
    },

    quickFacts: {
      tag: "Quick Overview",
      title: "Everything At",
      italicWord: "A Glance",

      facts: [
        {
          icon: Home,
          label: "Best For",
          value: "Small to Large Homes",
          description: "Ideal for apartments, villas, and open kitchens.",
        },
        {
          icon: LayoutGrid,
          label: "Layout Type",
          value: "L-Shaped",
          description: "Efficient corner configuration.",
        },
        {
          icon: Ruler,
          label: "Space Required",
          value: "80–150 sq.ft",
          description: "Comfortable working area.",
        },
        {
          icon: Boxes,
          label: "Storage",
          value: "High",
          description: "Maximum cabinet utilization.",
        },
        {
          icon: Workflow,
          label: "Workflow",
          value: "Excellent",
          description: "Optimized work triangle.",
        },
        {
          icon: IndianRupee,
          label: "Starting Price",
          value: "₹2.5 Lakhs*",
          description: "Custom pricing based on requirements.",
        },
      ],
    },
    blueprint: {
      tag: "Kitchen Blueprint",

      title: "Understanding The",

      italicWord: "Layout",

      description:
        "The L-Shaped kitchen follows the classic work triangle, ensuring smooth movement between the sink, hob, and refrigerator while maximizing corner storage.",

      image: kitchenImages.lShaped.blueprint,

      points: [
        {
          title: "Efficient Work Triangle",
          description:
            "Sink, hob, and refrigerator are positioned to reduce unnecessary movement while cooking.",
        },
        {
          title: "Smart Corner Utilization",
          description:
            "Dead corners can be converted into highly functional storage using Magic Corner or Carousel units.",
        },
        {
          title: "Open & Spacious Feel",
          description:
            "The layout naturally creates an open kitchen that connects beautifully with dining or living spaces.",
        },
        {
          title: "Flexible Appliance Placement",
          description:
            "Tall units, refrigerators, ovens, and pantry cabinets can be positioned without interrupting workflow.",
        },
      ],
    },

    intro: {
      tag: "Why L-Shaped",
      title: "Designed For Better",
      italicWord: "Living",
      image: kitchenImages.lShaped.intro,
      description:
        "L-Shaped kitchens combine efficient workflow, intelligent storage, and timeless aesthetics for modern homes.",

      features: [
        "Efficient Work Triangle",
        "Maximum Corner Utilization",
        "Open Layout",
        "Premium Storage",
        "Easy Movement",
        "Future Ready",
      ],
    },

    benefits: {
      tag: "Benefits",
      title: "Why Homeowners",
      italicWord: "Love It",
      description:
        "Designed to maximize functionality without compromising aesthetics.",

      items: [
        {
          title: "Efficient Workflow",
          description:
            "The classic work triangle minimizes movement while cooking.",
        },
        {
          title: "Maximum Storage",
          description:
            "Smart corner cabinets and overhead units maximize every inch.",
        },
        {
          title: "Open & Spacious",
          description:
            "Keeps the kitchen visually open while providing ample workspace.",
        },
        {
          title: "Flexible Layout",
          description: "Perfect for apartments, villas, and open-plan homes.",
        },
        {
          title: "Modern Aesthetics",
          description:
            "A timeless layout that complements contemporary interiors.",
        },
        {
          title: "Future Ready",
          description: "Can easily accommodate an island or breakfast counter.",
        },
      ],
    },

    idealFor: {
      tag: "Perfect For",
      title: "Ideal For",
      italicWord: "Every Home",
      description:
        "A versatile kitchen layout suitable for different lifestyles and home sizes.",

      items: [
        {
          title: "Apartments",
          description: "Ideal for compact urban homes with limited space.",
        },
        {
          title: "Independent Houses",
          description: "Creates an efficient and elegant cooking environment.",
        },
        {
          title: "Open Kitchens",
          description: "Blends seamlessly with dining and living areas.",
        },
        {
          title: "Growing Families",
          description: "Provides comfortable cooking space for daily use.",
        },
      ],
    },

    gallery: {
      tag: "Featured Projects",
      title: "Inspired",
      italicWord: "Spaces",

      projects: [
        {
          title: "Luxury Matte Kitchen",
          location: "Delhi",
          image: kitchenImages.lShaped.gallery1,
        },
        {
          title: "Minimal White Kitchen",
          location: "Noida",
          image: kitchenImages.lShaped.gallery2,
        },
        {
          title: "Premium Wooden Kitchen",
          location: "Gurugram",
          image: kitchenImages.lShaped.gallery3,
        },
        {
          title: "Open Concept Kitchen",
          location: "Faridabad",
          image: kitchenImages.lShaped.gallery4,
        },
      ],
    },
    storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything You Need",
      italicWord: "To Know",

      items: [
        {
          question: "Is an L-Shaped kitchen suitable for small homes?",
          answer:
            "Yes. It efficiently utilizes corner space while maintaining an open and spacious feel.",
        },
        {
          question: "Can I add an island to an L-Shaped kitchen?",
          answer:
            "Absolutely. If there is sufficient floor space, an island enhances both functionality and aesthetics.",
        },
        {
          question: "Which material is best for an L-Shaped modular kitchen?",
          answer:
            "HDHMR and Marine Plywood are excellent choices because of their durability and moisture resistance.",
        },
        {
          question: "How much does an L-Shaped kitchen cost?",
          answer:
            "The final cost depends on size, materials, finishes, hardware, and accessories. We provide customized quotations after consultation.",
        },
      ],
    },
  },
  uShaped: {
  hero: {
  subtitle: "Luxury Modular Kitchens",
  title: "U-Shaped Kitchen",
  description:
    "Experience unmatched efficiency with a U-shaped modular kitchen that surrounds you with ample workspace, smart storage, and seamless workflow.",
  image: kitchenImages.uShaped.hero,
  buttonText: "Get Free Consultation",
  buttonLink: "/contact",
},
  quickFacts: {
  tag: "Quick Overview",
  title: "Everything At",
  italicWord: "A Glance",

  facts: [
    {
      icon: Home,
      label: "Best For",
      value: "Large Homes",
      description: "Perfect for spacious apartments, villas, and family homes.",
    },
    {
      icon: LayoutGrid,
      label: "Layout Type",
      value: "U-Shaped",
      description: "Three-sided countertop for maximum efficiency.",
    },
    {
      icon: Ruler,
      label: "Space Required",
      value: "120–220 sq.ft",
      description: "Ideal where ample floor space is available.",
    },
    {
      icon: Boxes,
      label: "Storage",
      value: "Very High",
      description: "Maximum cabinets and countertop space.",
    },
    {
      icon: Workflow,
      label: "Workflow",
      value: "Excellent",
      description: "Minimal movement with an optimized work triangle.",
    },
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: "₹3.5 Lakhs*",
      description: "Customized according to finishes and accessories.",
    },
  ],
},
 blueprint: {
  tag: "Kitchen Blueprint",

  title: "Understanding The",

  italicWord: "Layout",

  description:
    "The U-shaped kitchen surrounds the user on three sides, offering generous workspace, exceptional storage, and an uninterrupted cooking workflow.",

  image: kitchenImages.uShaped.blueprint,

  points: [
    {
      title: "Maximum Workspace",
      description:
        "Three countertops provide dedicated preparation, cooking, and cleaning zones.",
    },
    {
      title: "Exceptional Storage",
      description:
        "Multiple base and wall cabinets maximize storage capacity.",
    },
    {
      title: "Efficient Work Triangle",
      description:
        "Keeps the sink, hob, and refrigerator within comfortable reach.",
    },
    {
      title: "Perfect for Multiple Users",
      description:
        "Enough room for two or more people to cook simultaneously.",
    },
  ],
},  
  benefits: {
  tag: "Benefits",
  title: "Why Homeowners",
  italicWord: "Love It",

  description:
    "One of the most efficient layouts for serious home cooks and large families.",

  items: [
    {
      title: "Largest Countertop Area",
      description: "More preparation space than any other kitchen layout.",
    },
    {
      title: "Maximum Storage",
      description: "Ideal for storing cookware, groceries, and appliances.",
    },
    {
      title: "Highly Functional",
      description: "Everything remains within easy reach while cooking.",
    },
    {
      title: "Separate Work Zones",
      description: "Cooking, cleaning, and preparation happen independently.",
    },
    {
      title: "Luxury Appearance",
      description: "Creates a premium, fully equipped kitchen environment.",
    },
    {
      title: "Perfect for Families",
      description: "Comfortably accommodates multiple people working together.",
    },
  ],
},
  storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
  gallery: {
  tag: "Featured Projects",
  title: "Luxury",
  italicWord: "Spaces",

  projects: [
    {
      title: "Modern White U-Shaped Kitchen",
      location: "Jaipur",
      image: kitchenImages.uShaped.gallery1,
    },
    {
      title: "Premium Wooden Kitchen",
      location: "Delhi",
      image: kitchenImages.uShaped.gallery2,
    },
    {
      title: "Matte Grey Kitchen",
      location: "Gurugram",
      image: kitchenImages.uShaped.gallery3,
    },
    {
      title: "Luxury Family Kitchen",
      location: "Noida",
      image: kitchenImages.uShaped.gallery4,
    },
  ],
},
  faq: {
  tag: "Frequently Asked Questions",

  title: "Everything You Need",

  italicWord: "To Know",

  items: [
    {
      question: "Is a U-Shaped kitchen suitable for every home?",
      answer:
        "A U-shaped kitchen is best suited for medium to large kitchens where there is enough space to create three functional work zones. It offers excellent efficiency without making the space feel cramped.",
    },
    {
      question: "What are the advantages of a U-Shaped modular kitchen?",
      answer:
        "A U-shaped kitchen provides maximum countertop space, abundant storage, an efficient work triangle, and separate zones for cooking, preparation, and cleaning, making it ideal for frequent cooking and larger families.",
    },
    {
      question: "Can a U-Shaped kitchen include a breakfast counter or island?",
      answer:
        "Yes. If the kitchen has sufficient floor space, one side of the U-shaped layout can be extended into a breakfast counter, or an island can be added while maintaining comfortable circulation space.",
    },
    {
      question: "How much space is required for a U-Shaped kitchen?",
      answer:
        "For comfortable movement and functionality, a U-shaped kitchen generally requires a medium to large room with at least 8–10 feet of width, depending on the cabinet depth and appliance placement.",
    },
    {
      question: "Which materials are recommended for a U-Shaped modular kitchen?",
      answer:
        "HDHMR, Marine Plywood, and BWP-grade plywood are excellent choices due to their strength, moisture resistance, and long-term durability. Pairing them with premium hardware ensures smooth everyday performance.",
    },
    {
      question: "What is the starting cost of a U-Shaped modular kitchen?",
      answer:
        "The cost depends on the kitchen size, cabinet materials, finishes, hardware, and storage accessories. A premium U-shaped modular kitchen typically starts from around ₹3.5 lakhs, with customized quotations provided after design consultation.",
    },
  ],
},
},
parallel:{
  hero: {
  subtitle: "Luxury Modular Kitchens",
  title: "Parallel Kitchen",
  description:
    "A highly efficient parallel kitchen layout featuring two opposing countertops, offering excellent workflow, generous storage, and maximum functionality for modern homes.",
  image: kitchenImages.parallel.hero,
  buttonText: "Get Free Consultation",
  buttonLink: "/contact",
},
quickFacts: {
  tag: "Quick Overview",
  title: "Everything At",
  italicWord: "A Glance",

  facts: [
    {
      icon: Home,
      label: "Best For",
      value: "Apartments & Villas",
      description: "Perfect for narrow and rectangular kitchen spaces.",
    },
    {
      icon: LayoutGrid,
      label: "Layout Type",
      value: "Parallel",
      description: "Two parallel countertops facing each other.",
    },
    {
      icon: Ruler,
      label: "Space Required",
      value: "70–140 sq.ft",
      description: "Efficient use of compact and medium-sized spaces.",
    },
    {
      icon: Boxes,
      label: "Storage",
      value: "Very High",
      description: "Cabinets on both sides maximize storage capacity.",
    },
    {
      icon: Workflow,
      label: "Workflow",
      value: "Excellent",
      description: "Minimal walking distance between work zones.",
    },
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: "₹2.8 Lakhs*",
      description: "Pricing varies based on materials and finishes.",
    },
  ],
},
blueprint: {
  tag: "Kitchen Blueprint",

  title: "Understanding The",

  italicWord: "Layout",

  description:
    "The parallel kitchen layout features two opposing countertops that create an efficient work triangle while maximizing storage and countertop space.",

  image: kitchenImages.parallel.blueprint,

  points: [
    {
      title: "Dual Workstations",
      description:
        "Separate preparation and cooking areas improve efficiency.",
    },
    {
      title: "Optimized Workflow",
      description:
        "The sink, hob, and refrigerator remain within easy reach.",
    },
    {
      title: "Maximum Storage",
      description:
        "Cabinets on both sides provide exceptional storage capacity.",
    },
    {
      title: "Ideal for Compact Spaces",
      description:
        "Perfect for apartments and homes with narrow kitchen layouts.",
    },
  ],
},
storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
benefits: {
  tag: "Benefits",

  title: "Why Homeowners",

  italicWord: "Love It",

  description:
    "One of the most practical kitchen layouts, designed for efficiency, organization, and everyday convenience.",

  items: [
    {
      title: "Efficient Workflow",
      description:
        "Opposite counters reduce unnecessary movement while cooking.",
    },
    {
      title: "Ample Counter Space",
      description:
        "Dedicated areas for preparation, cooking, and cleaning.",
    },
    {
      title: "Maximum Storage",
      description:
        "Base and wall cabinets on both sides provide abundant storage.",
    },
    {
      title: "Easy Organization",
      description:
        "Separate work zones keep the kitchen neat and clutter-free.",
    },
    {
      title: "Modern Appearance",
      description:
        "Creates a clean, symmetrical, and contemporary kitchen design.",
    },
    {
      title: "Suitable for Daily Cooking",
      description:
        "Perfect for families who cook frequently and need efficient space.",
    },
  ],
},
gallery: {
  tag: "Featured Projects",

  title: "Elegant",

  italicWord: "Interiors",

  projects: [
    {
      title: "Modern White Parallel Kitchen",
      location: "Jaipur",
      image: kitchenImages.parallel.gallery1,
    },
    {
      title: "Premium Wooden Parallel Kitchen",
      location: "Delhi",
      image: kitchenImages.parallel.gallery2,
    },
    {
      title: "Matte Grey Parallel Kitchen",
      location: "Gurugram",
      image: kitchenImages.parallel.gallery3,
    },
    {
      title: "Luxury Contemporary Kitchen",
      location: "Noida",
      image: kitchenImages.parallel.gallery4,
    },
  ],
},faq: {
  tag: "Frequently Asked Questions",

  title: "Everything You Need",

  italicWord: "To Know",

  items: [
    {
      question: "Is a parallel kitchen suitable for small homes?",
      answer:
        "Yes. A parallel kitchen is one of the best layouts for compact and medium-sized homes because it efficiently utilizes narrow spaces while providing generous storage and countertop areas.",
    },
    {
      question: "What are the advantages of a parallel modular kitchen?",
      answer:
        "It offers an excellent work triangle, dedicated cooking and preparation zones, maximum storage on both sides, and a highly organized workflow for everyday cooking.",
    },
    {
      question: "How much space is required for a parallel kitchen?",
      answer:
        "A comfortable parallel kitchen typically requires at least 4–5 feet of clearance between the two countertops, ensuring smooth movement and easy access.",
    },
    {
      question: "Can a parallel kitchen include a dining or breakfast counter?",
      answer:
        "Yes. In larger homes, one end of the parallel layout can be extended into a breakfast counter or connected to the dining area for added functionality.",
    },
    {
      question: "Which materials are recommended for a parallel modular kitchen?",
      answer:
        "HDHMR, Marine Plywood, and BWP-grade plywood paired with premium hardware provide excellent durability, moisture resistance, and long-lasting performance.",
    },
    {
      question: "What is the starting cost of a parallel modular kitchen?",
      answer:
        "The cost depends on the kitchen size, finishes, materials, hardware, and accessories. A premium parallel modular kitchen generally starts from around ₹2.8 lakhs.",
    },
  ],
},
},
island:{
  hero: {
  subtitle: "Luxury Modular Kitchens",

  title: "Island Kitchen",

  description:
    "Transform your home with a luxurious island kitchen that combines elegant design, expansive workspace, premium storage, and a central gathering space for family and entertaining.",

  image: kitchenImages.island.hero,

  buttonText: "Get Free Consultation",

  buttonLink: "/contact",
},
quickFacts: {
  tag: "Quick Overview",

  title: "Everything At",

  italicWord: "A Glance",

  facts: [
    {
      icon: Home,
      label: "Best For",
      value: "Luxury Villas",
      description: "Perfect for spacious homes and open-plan living.",
    },
    {
      icon: LayoutGrid,
      label: "Layout Type",
      value: "Island Kitchen",
      description: "Central island with surrounding workspace.",
    },
    {
      icon: Ruler,
      label: "Space Required",
      value: "180–350 sq.ft",
      description: "Requires generous floor space.",
    },
    {
      icon: Boxes,
      label: "Storage",
      value: "Maximum",
      description: "Island cabinets add significant storage.",
    },
    {
      icon: Workflow,
      label: "Lifestyle",
      value: "Luxury Living",
      description: "Cooking, dining, and entertaining together.",
    },
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: "₹5 Lakhs*",
      description: "Customized according to layout and finishes.",
    },
  ],
},
blueprint: {
  tag: "Kitchen Blueprint",

  title: "Understanding The",

  italicWord: "Layout",

  description:
    "The island kitchen introduces a multifunctional central workspace while maintaining an efficient work triangle around the sink, hob, and refrigerator.",

  image: kitchenImages.island.blueprint,

  points: [
    {
      title: "Central Island Workspace",
      description:
        "Provides additional preparation, serving, and dining space.",
    },
    {
      title: "Efficient Work Triangle",
      description:
        "The sink, cooktop, and refrigerator remain easily accessible.",
    },
    {
      title: "Perfect for Entertaining",
      description:
        "Guests can interact while cooking without interrupting workflow.",
    },
    {
      title: "Additional Storage",
      description:
        "The island incorporates deep drawers and hidden cabinets.",
    },
  ],
},
benefits: {
  tag: "Benefits",

  title: "Why Homeowners",

  italicWord: "Love It",

  description:
    "A statement kitchen that combines luxury aesthetics with exceptional functionality.",

  items: [
    {
      title: "Luxury Appearance",
      description:
        "Creates a premium centerpiece for modern homes.",
    },
    {
      title: "More Counter Space",
      description:
        "Ideal for meal preparation and serving.",
    },
    {
      title: "Extra Storage",
      description:
        "The island provides additional drawers and cabinets.",
    },
    {
      title: "Perfect for Socializing",
      description:
        "Family and guests can gather around the island comfortably.",
    },
    {
      title: "Flexible Seating",
      description:
        "Can be designed as a breakfast counter or dining extension.",
    },
    {
      title: "Highly Functional",
      description:
        "Supports cooking, dining, working, and entertaining in one space.",
    },
  ],
},
storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
gallery: {
  tag: "Featured Projects",

  title: "Luxury",

  italicWord: "Interiors",

  projects: [
    {
      title: "Modern White Island Kitchen",
      location: "Jaipur",
      image: kitchenImages.island.gallery1,
    },
    {
      title: "Walnut Luxury Island Kitchen",
      location: "Delhi",
      image: kitchenImages.island.gallery2,
    },
    {
      title: "Contemporary Black Island Kitchen",
      location: "Gurugram",
      image: kitchenImages.island.gallery3,
    },
    {
      title: "Luxury Open-Plan Kitchen",
      location: "Noida",
      image: kitchenImages.island.gallery4,
    },
  ],
},
faq: {
  tag: "Frequently Asked Questions",

  title: "Everything You Need",

  italicWord: "To Know",

  items: [
    {
      question: "How much space is required for an island kitchen?",
      answer:
        "An island kitchen works best in medium to large homes where there is enough clearance around the island for comfortable movement. Typically, at least 3–4 feet of circulation space is recommended on all sides.",
    },
    {
      question: "Can an island include a sink or cooktop?",
      answer:
        "Yes. Depending on the design, the island can accommodate a sink, cooktop, breakfast counter, or additional storage, making it a highly versatile workspace.",
    },
    {
      question: "Is an island kitchen suitable for apartments?",
      answer:
        "It depends on the available floor space. Larger apartments with open-plan layouts can comfortably accommodate an island kitchen, while compact apartments may benefit from alternative layouts.",
    },
    {
      question: "What are the advantages of an island kitchen?",
      answer:
        "Island kitchens offer additional workspace, enhanced storage, flexible seating, and a social cooking environment, making them ideal for modern lifestyles and entertaining guests.",
    },
    {
      question: "Which materials are recommended for an island kitchen?",
      answer:
        "HDHMR, Marine Plywood, BWP-grade plywood, premium quartz countertops, and high-quality hardware ensure durability, moisture resistance, and long-lasting performance.",
    },
    {
      question: "What is the starting cost of an island modular kitchen?",
      answer:
        "The overall cost depends on the kitchen size, island dimensions, materials, finishes, appliances, and accessories. Premium island kitchens generally start from around ₹5 lakhs.",
    },
  ],
},

},
straight: {
  hero: {
  subtitle: "Luxury Modular Kitchens",

  title: "Straight Kitchen",

  description:
    "A sleek and space-efficient straight modular kitchen designed for apartments, studios, and modern homes, offering smart storage and a streamlined cooking experience.",

  image: kitchenImages.straight.hero,

  buttonText: "Get Free Consultation",

  buttonLink: "/contact",
},
quickFacts: {
  tag: "Quick Overview",

  title: "Everything At",

  italicWord: "A Glance",

  facts: [
    {
      icon: Home,
      label: "Best For",
      value: "Apartments & Studios",
      description: "Ideal for compact homes and urban living.",
    },
    {
      icon: LayoutGrid,
      label: "Layout Type",
      value: "Straight",
      description: "Single-wall modular kitchen.",
    },
    {
      icon: Ruler,
      label: "Space Required",
      value: "50–100 sq.ft",
      description: "Perfect for narrow layouts.",
    },
    {
      icon: Boxes,
      label: "Storage",
      value: "Moderate",
      description: "Optimized vertical storage solutions.",
    },
    {
      icon: Workflow,
      label: "Workflow",
      value: "Simple",
      description: "Everything within a single linear workspace.",
    },
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: "₹1.8 Lakhs*",
      description: "Customized according to materials and finishes.",
    },
  ],
},blueprint: {
  tag: "Kitchen Blueprint",

  title: "Understanding The",

  italicWord: "Layout",

  description:
    "A straight kitchen arranges all cabinets, appliances, and workstations along a single wall, creating a clean, efficient, and space-saving cooking environment.",

  image: kitchenImages.straight.blueprint,

  points: [
    {
      title: "Single Wall Layout",
      description:
        "All kitchen elements are aligned on one wall for maximum space efficiency.",
    },
    {
      title: "Easy Workflow",
      description:
        "Cooking, preparation, and cleaning zones are organized in a continuous sequence.",
    },
    {
      title: "Smart Vertical Storage",
      description:
        "Wall cabinets and tall units maximize storage without occupying additional floor space.",
    },
    {
      title: "Ideal for Compact Homes",
      description:
        "A practical solution for apartments, studios, and open-plan living spaces.",
    },
  ],
},
storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
benefits: {
  tag: "Benefits",

  title: "Why Homeowners",

  italicWord: "Love It",

  description:
    "A clean, practical kitchen layout that makes the most of limited space without compromising functionality.",

  items: [
    {
      title: "Space Saving",
      description:
        "Perfect for compact homes where every square foot matters.",
    },
    {
      title: "Simple Workflow",
      description:
        "Everything is positioned within easy reach along one wall.",
    },
    {
      title: "Modern Appearance",
      description:
        "Creates a sleek, uncluttered look that complements contemporary interiors.",
    },
    {
      title: "Affordable",
      description:
        "Requires fewer cabinets and countertops than larger layouts.",
    },
    {
      title: "Easy Maintenance",
      description:
        "A linear layout makes cleaning and maintenance quick and convenient.",
    },
    {
      title: "Open Living",
      description:
        "Blends seamlessly with dining and living spaces in open-plan homes.",
    },
  ],
},
gallery: {
  tag: "Featured Projects",

  title: "Elegant",

  italicWord: "Designs",

  projects: [
    {
      title: "Modern White Straight Kitchen",
      location: "Jaipur",
      image: kitchenImages.straight.gallery1,
    },
    {
      title: "Premium Wooden Straight Kitchen",
      location: "Delhi",
      image: kitchenImages.straight.gallery2,
    },
    {
      title: "Minimal Grey Straight Kitchen",
      location: "Gurugram",
      image: kitchenImages.straight.gallery3,
    },
    {
      title: "Luxury Compact Kitchen",
      location: "Noida",
      image: kitchenImages.straight.gallery4,
    },
  ],
},
faq: {
  tag: "Frequently Asked Questions",

  title: "Everything You Need",

  italicWord: "To Know",

  items: [
    {
      question: "Is a straight kitchen suitable for small homes?",
      answer:
        "Yes. A straight kitchen is specifically designed for compact homes, apartments, and studio spaces, offering an efficient layout without occupying excessive floor area.",
    },
    {
      question: "Can a straight kitchen provide sufficient storage?",
      answer:
        "Absolutely. Tall pantry units, wall cabinets, and smart storage accessories help maximize vertical storage while keeping the kitchen organized.",
    },
    {
      question: "What are the advantages of a straight modular kitchen?",
      answer:
        "Straight kitchens are space-efficient, cost-effective, easy to maintain, and blend seamlessly into modern open-plan living spaces.",
    },
    {
      question: "Which materials are recommended for a straight modular kitchen?",
      answer:
        "HDHMR, Marine Plywood, and BWP-grade plywood combined with premium hardware ensure long-lasting durability and moisture resistance.",
    },
    {
      question: "Can a straight kitchen include premium accessories?",
      answer:
        "Yes. Features like bottle pull-outs, cutlery organizers, soft-close drawers, tall pantry units, and pull-out baskets can all be incorporated depending on the available space.",
    },
    {
      question: "What is the starting cost of a straight modular kitchen?",
      answer:
        "The cost depends on the kitchen size, materials, finishes, hardware, and accessories. A premium straight modular kitchen generally starts from around ₹1.8 lakhs.",
    },
  ],
},
},
peninsula:{
  hero: {
  subtitle: "Luxury Modular Kitchens",

  title: "Peninsula Kitchen",

  description:
    "A peninsula kitchen combines the openness of an island with the efficiency of a connected layout, offering additional workspace, storage, and casual seating without requiring a large floor plan.",

  image: kitchenImages.peninsula.hero,

  buttonText: "Get Free Consultation",

  buttonLink: "/contact",
},
quickFacts: {
  tag: "Quick Overview",

  title: "Everything At",

  italicWord: "A Glance",

  facts: [
    {
      icon: Home,
      label: "Best For",
      value: "Medium to Large Homes",
      description: "Perfect for open-plan apartments and family homes.",
    },
    {
      icon: LayoutGrid,
      label: "Layout Type",
      value: "Peninsula",
      description: "Connected island extension.",
    },
    {
      icon: Ruler,
      label: "Space Required",
      value: "120–220 sq.ft",
      description: "Needs less space than a full island kitchen.",
    },
    {
      icon: Boxes,
      label: "Storage",
      value: "Very High",
      description: "Additional cabinets beneath the peninsula.",
    },
    {
      icon: Workflow,
      label: "Lifestyle",
      value: "Open Living",
      description: "Ideal for cooking and social interaction.",
    },
    {
      icon: IndianRupee,
      label: "Starting Price",
      value: "₹4 Lakhs*",
      description: "Customized according to finishes and hardware.",
    },
  ],
},
blueprint: {
  tag: "Kitchen Blueprint",

  title: "Understanding The",

  italicWord: "Layout",

  description:
    "A peninsula kitchen extends the countertop from one side, creating additional workspace, storage, and seating while maintaining an efficient work triangle.",

  image: kitchenImages.peninsula.blueprint,

  points: [
    {
      title: "Connected Peninsula",
      description:
        "Unlike an island, the peninsula is attached to the main cabinetry, making it suitable for smaller spaces.",
    },
    {
      title: "Additional Workspace",
      description:
        "Provides extra room for food preparation, serving, or dining.",
    },
    {
      title: "Efficient Work Triangle",
      description:
        "Maintains comfortable access between the sink, hob, and refrigerator.",
    },
    {
      title: "Perfect Social Space",
      description:
        "Creates a natural gathering point for family meals and entertaining guests.",
    },
  ],
},
benefits: {
  tag: "Benefits",

  title: "Why Homeowners",

  italicWord: "Love It",

  description:
    "The perfect balance between space efficiency and luxurious open-plan living.",

  items: [
    {
      title: "More Counter Space",
      description:
        "Adds valuable preparation and serving space without needing a separate island.",
    },
    {
      title: "Extra Storage",
      description:
        "Additional cabinets beneath the peninsula maximize storage.",
    },
    {
      title: "Open Layout",
      description:
        "Creates a seamless connection between the kitchen and living area.",
    },
    {
      title: "Breakfast Counter",
      description:
        "Comfortably accommodates bar seating for casual dining.",
    },
    {
      title: "Efficient Workflow",
      description:
        "Keeps cooking, cleaning, and preparation zones within easy reach.",
    },
    {
      title: "Modern Luxury",
      description:
        "Combines contemporary aesthetics with practical functionality.",
    },
  ],
},
storage: {
      tag: "Smart Storage",

      title: "Intelligent",

      italicWord: "Solutions",

      description:
        "Every Kohinoor kitchen is equipped with premium storage accessories that maximize space, improve organization, and enhance everyday convenience.",

      items: [
        {
          title: "Magic Corner",
          image: kitchenImages.storage.magicCorner,
          description:
            "Transform blind corner cabinets into fully accessible storage with smooth pull-out shelves.",
        },
        {
          title: "Tall Pantry Unit",
          image: kitchenImages.storage.pantry,
          description:
            "A spacious vertical pantry that keeps groceries, jars, and dry ingredients neatly organized.",
        },
        {
          title: "Bottle Pull-Out",
          image: kitchenImages.storage.bottlePullout,
          description:
            "Store oils, spices, sauces, and condiments in a slim pull-out unit for quick access.",
        },
        {
          title: "Cutlery Organizer",
          image: kitchenImages.storage.cutlery,
          description:
            "Custom drawer organizers keep cutlery and kitchen tools neatly arranged.",
        },
        {
          title: "Soft Close Drawers",
          image: kitchenImages.storage.softClose,
          description:
            "Premium soft-close channels ensure silent, smooth, and long-lasting drawer operation.",
        },
        {
          title: "Carousel Corner Unit",
          image: kitchenImages.storage.carousel,
          description:
            "Rotating shelves provide effortless access to cookware stored deep inside corner cabinets.",
        },
      ],
    },
    gallery: {
  tag: "Featured Projects",

  title: "Luxury",

  italicWord: "Spaces",

  projects: [
    {
      title: "Modern White Peninsula Kitchen",
      location: "Jaipur",
      image: kitchenImages.peninsula.gallery1,
    },
    {
      title: "Walnut Peninsula Kitchen",
      location: "Delhi",
      image: kitchenImages.peninsula.gallery2,
    },
    {
      title: "Contemporary Grey Peninsula Kitchen",
      location: "Gurugram",
      image: kitchenImages.peninsula.gallery3,
    },
    {
      title: "Luxury Open Peninsula Kitchen",
      location: "Noida",
      image: kitchenImages.peninsula.gallery4,
    },
  ],
},
faq: {
  tag: "Frequently Asked Questions",

  title: "Everything You Need",

  italicWord: "To Know",

  items: [
    {
      question: "What is the difference between a peninsula kitchen and an island kitchen?",
      answer:
        "A peninsula kitchen features a countertop extension connected to the main cabinetry, while an island is completely freestanding. Peninsulas require less space and are ideal for medium-sized homes.",
    },
    {
      question: "Is a peninsula kitchen suitable for small homes?",
      answer:
        "Yes. A peninsula kitchen offers many of the benefits of an island, such as additional workspace and seating, while fitting comfortably into homes with limited floor space.",
    },
    {
      question: "Can a peninsula be used as a breakfast counter?",
      answer:
        "Absolutely. The extended countertop can accommodate bar stools, making it ideal for casual dining, quick meals, or entertaining guests.",
    },
    {
      question: "What are the advantages of a peninsula kitchen?",
      answer:
        "It provides extra countertop space, increased storage, better workflow, and a seamless connection between the kitchen and living areas, making it highly functional and visually appealing.",
    },
    {
      question: "Which materials are recommended for a peninsula modular kitchen?",
      answer:
        "HDHMR, Marine Plywood, BWP-grade plywood, premium quartz countertops, and high-quality hardware ensure durability, moisture resistance, and long-term performance.",
    },
    {
      question: "What is the starting cost of a peninsula modular kitchen?",
      answer:
        "The cost depends on the layout, materials, finishes, accessories, and appliances. A premium peninsula kitchen generally starts from around ₹4 lakhs.",
    },
  ],
},
}
};
