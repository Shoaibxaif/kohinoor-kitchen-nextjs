import { diningFurnitureData } from "@/data/diningFurniture";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/home/CTASection";

import diningImage from "@/assets/images/dining/hero.jpg";

export const metadata = {
    title: "Dining Furniture in Delhi NCR | Kohinoor Kitchens",
    description:
        "Explore premium dining furniture in Delhi NCR with elegant dining tables, chairs, and crafted finishes for modern homes.",
    keywords: [
        "dining furniture Delhi NCR",
        "custom dining table Delhi",
        "luxury dining chairs",
        "modular dining set Delhi",
        "modern dining room furniture",
    ],
    openGraph: {
        title: "Dining Furniture in Delhi NCR | Kohinoor Kitchens",
        description: "Premium dining furniture in Delhi NCR crafted for modern homes, family gatherings, and timeless style.",
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://www.kohinoorinterior.in/dining-furniture",
    },
};

export default function DiningFurniturePage() {
    const { hero, gallery } = diningFurnitureData;

    return (
        <>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Dining Furniture"
                title="Designed For"
                italicWord="Memorable Gatherings"
                description="Create an inviting dining space with beautifully crafted dining tables and chairs designed for everyday meals and special occasions. Our dining furniture combines timeless aesthetics, premium materials, and lasting durability to complement modern interiors."
                image={diningImage}
                imageAlt="Luxury Dining Furniture"
                points={[
                    "4, 6 & 8 Seater Dining Sets",
                    "Solid Wood Dining Tables",
                    "Premium Upholstered Chairs",
                    "Custom Finishes & Colors",
                    "Modern & Contemporary Designs",
                    "Professional Delivery & Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </>
    );
}
