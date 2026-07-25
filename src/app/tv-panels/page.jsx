import { tvPanelData } from "@/data/tvPanel";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/home/CTASection";

import tvPanelImage from "@/assets/images/tv-panel/hero.jpg";

export const metadata = {
    title: "TV Panels",
    description:
        "Custom-designed TV panels that combine elegant aesthetics, practical storage, and premium craftsmanship.",
};

export default function TVPanelPage() {
    const { hero, gallery } = tvPanelData;

    return (
        <>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium TV Panels"
                title="Designed For"
                italicWord="Modern Entertainment"
                description="Elevate your living room with custom-designed TV panels that combine elegant aesthetics, practical storage, and premium craftsmanship. Every TV unit is tailored to complement your interior while keeping your entertainment space clean and organized."
                image={tvPanelImage}
                imageAlt="Luxury TV Panel"
                points={[
                    "Modern Floating TV Units",
                    "Wall-Mounted Entertainment Panels",
                    "Integrated Storage Cabinets",
                    "Premium Laminates & Wooden Finishes",
                    "Concealed Cable Management",
                    "Expert Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </>
    );
}
