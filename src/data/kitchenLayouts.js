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
      title: "L-Shaped Modular Kitchen Design",
      description:
        "Discover premium L-shaped modular kitchens in Delhi NCR with smart corner storage, efficient workflow, and elegant finishes for modern homes.",
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
      title: "U-Shaped Modular Kitchen Design",
      description:
        "Explore luxury U-shaped modular kitchens in Delhi NCR designed for maximum workspace, smart storage, and effortless cooking in large homes.",
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
          description:
            "Perfect for spacious apartments, villas, and family homes.",
        },
        {
          icon: LayoutGrid,
          label: "Layout Type",
          value: "U-Shaped",
          description: "Three-sided countertop for maximum efficiency.",
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
          description:
            "Cooking, cleaning, and preparation happen independently.",
        },
        {
          title: "Luxury Appearance",
          description: "Creates a premium, fully equipped kitchen environment.",
        },
        {
          title: "Perfect for Families",
          description:
            "Comfortably accommodates multiple people working together.",
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
          location: "Delhi NCR",
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
          question: "Are U-shaped kitchens ideal for every home?",
          answer:
            "While highly efficient and organized, this layout is best suited for medium to large kitchens, as it requires ample room to accommodate three distinct work zones comfortably.",
        },
        {
          question: "What are the advantages of a U-Shaped modular kitchen?",
          answer:
            "A U-shaped kitchen provides maximum countertop space, abundant storage, an efficient work triangle, and separate zones for cooking, preparation, and cleaning, making it ideal for frequent cooking and larger families.",
        },
        {
          question:
            "Can a U-Shaped kitchen include a breakfast counter or island?",
          answer:
            "Yes, If the kitchen has sufficient floor space, one side of the U-shaped layout can be extended into a breakfast counter, or an island can be added while maintaining comfortable circulation space.",
        },
        {
          question: "How much space is required for a U-Shaped kitchen?",
          answer:
            "To ensure optimal flow and functionality, U-shaped kitchens work best in medium-to-large spaces. A minimum width of 8–15 feet is typically recommended, though the precise requirement depends on your choice of cabinets and appliance layout.",
        },
        {
          question:
            "Which materials are recommended for a U-Shaped modular kitchen?",
          answer:
            "For superior longevity and performance, we recommend HDHMR boards and BWP (Boiling Water Proof) grade plywood. These premium materials are specifically engineered to offer exceptional moisture resistance and structural integrity, making them the gold standard for high-quality modular kitchen cabinetry.",
        },
        {
          question: "What is the starting cost of a U-Shaped modular kitchen?",
          answer:
            "The cost depends on the kitchen size, layout, selected materials, finishes, hardware, and accessories. Following an initial design consultation, we provide a detailed quote that suits your requirements and space.",
        },
      ],
    },
  },
  parallel: {
    hero: {
      subtitle: "Luxury Modular Kitchens",
      title: "Parallel Modular Kitchen Design",
      description:
        "Upgrade to a functional parallel modular kitchen in Delhi NCR with dual work zones, optimized storage, and a sleek modern finish for compact homes.",
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
          location: "Delhi NCR",
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
    },
    faq: {
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
            "A comfortable parallel kitchen typically requires at least 8–10 feet of clearance between the two countertops, ensuring smooth movement and easy access.",
        },
        {
          question:
            "Can a parallel kitchen include a dining or breakfast counter?",
          answer:
            "Yes. In larger homes, one end of the parallel layout can be extended into a breakfast counter or connected to the dining area for added functionality.",
        },
        {
          question:
            "Which materials are recommended for a parallel modular kitchen?",
          answer:
            "HDHMR, Marine Plywood, and BWP-grade plywood paired with premium hardware provide excellent durability, moisture resistance, and long-lasting performance.",
        },
        {
          question: "What is the starting cost of a parallel modular kitchen?",
          answer:
            "The cost depends on the kitchen size, layout, selected materials, finishes, hardware, and accessories. Following an initial design consultation, we provide a detailed quote that suits your requirements and space.",
        },
      ],
    },
  },
  island: {
    hero: {
      subtitle: "Luxury Modular Kitchens",

      title: "Island Modular Kitchen Design",

      description:
        "Create a luxurious island modular kitchen in Delhi NCR with a central workspace, premium storage, and stylish open-plan living for modern homes.",

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
          description: "Creates a premium centerpiece for modern homes.",
        },
        {
          title: "More Counter Space",
          description: "Ideal for meal preparation and serving.",
        },
        {
          title: "Extra Storage",
          description: "The island provides additional drawers and cabinets.",
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
          location: "Delhi NCR",
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
            "An island kitchen works best in medium to large homes where there is enough clearance around the island for comfortable movement. Typically, at least 20-25 feet of circulation space is recommended on all sides.",
        },
        {
          question: "Can an island include a sink or cooktop?",
          answer:
            "Yes, Depending on the design, the island can accommodate a sink, cooktop, breakfast counter, or additional storage, making it a highly versatile workspace.",
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
            "For lasting durability and reliable performance, we recommend HDHMR boards and BWP-grade plywood. Their excellent moisture resistance and structural strength make them ideal for premium modular kitchen cabinetry.",
        },
        {
          question: "What is the starting cost of an island modular kitchen?",
          answer:
            "The cost depends on the kitchen size, layout, selected materials, finishes, hardware, and accessories. Following an initial design consultation, we provide a detailed quote that suits your requirements and space."
        },
      ],
    },
  },
  straight: {
    hero: {
      subtitle: "Luxury Modular Kitchens",

      title: "Straight Modular Kitchen Design",

      description:
        "Choose a space-saving straight modular kitchen in Delhi NCR for compact homes, smart vertical storage, and a clean contemporary style.",

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
      ],
    },
    blueprint: {
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
          location: "Delhi NCR",
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
          question:
            "Which materials are recommended for a straight modular kitchen?",
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
  };
