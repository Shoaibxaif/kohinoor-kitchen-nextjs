import { diningFurnitureData } from "@/data/diningFurniture";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/home/CTASection";

import diningImage from "@/assets/images/dining/hero.jpg";

export const metadata = {
    title: "Dining Furniture",
    description:
        "Beautifully crafted dining tables and chairs designed for everyday meals and special occasions.",
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
