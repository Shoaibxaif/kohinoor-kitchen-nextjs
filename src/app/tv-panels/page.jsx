import { tvPanelData } from "@/data/tvPanel";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/home/CTASection";

import tvPanelImage from "@/assets/images/tv-panel/hero.jpg";

export const metadata = {
    title: "Custom TV Panels in Delhi NCR | Kohinoor Kitchens",
    description:
        "Discover custom TV panels in Delhi NCR with sleek design, hidden storage, and premium craftsmanship for modern interiors.",
    keywords: [
        "TV panel design Delhi NCR",
        "custom TV unit Delhi",
        "wall mounted TV panel",
        "entertainment unit design",
        "luxury TV panel manufacturer",
    ],
    openGraph: {
        title: "Custom TV Panels in Delhi NCR | Kohinoor Kitchens",
        description: "Premium custom TV panels in Delhi NCR crafted for modern entertainment spaces and smart storage.",
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://www.kohinoorinterior.in/tv-panels",
    },
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
