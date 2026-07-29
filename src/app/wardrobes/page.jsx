import { wardrobeData } from "@/data/wardrobe";

import LayoutHero from "@/components/page-layout/LayoutHero";
import GallerySection from "@/components/page-layout/GallerySection";
import AboutSection from "@/components/page-layout/AboutSection";
import wardrobeImage from "@/assets/images/wardrobe/hero.jpg";

import CTA from "@/components/home/CTASection";

export const metadata = {
    title: "Custom Modular Wardrobes in Ghaziabad | Kohinoor Kitchens",
    description:
        "Explore premium modular wardrobes in Ghaziabad and Delhi NCR with smart storage, modern finishes, and custom interiors.",
    keywords: [
        "modular wardrobes Ghaziabad",
        "custom wardrobes Delhi NCR",
        "sliding wardrobe design",
        "luxury wardrobe manufacturers Delhi",
        "bedroom storage solutions",
    ],
    openGraph: {
        title: "Custom Modular Wardrobes in Ghaziabad | Kohinoor Kitchens",
        description: "Premium modular wardrobes in Ghaziabad and Delhi NCR designed to maximize storage and style.",
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://www.kohinoorinterior.in/wardrobes",
    },
};

export default function WardrobePage() {
    const { hero, gallery } = wardrobeData;

    return (
        <>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Wardrobes"
                title="Designed For"
                italicWord="Modern Living"
                description="Our modular wardrobes are thoughtfully crafted to maximize storage while complementing your bedroom interiors. Every wardrobe is customized to match your lifestyle, room dimensions, and preferred finishes."
                image={wardrobeImage}
                imageAlt="Luxury Modular Wardrobe"
                points={[
                    "Sliding & Hinged Wardrobes",
                    "Customized Internal Storage",
                    "Premium Laminates & Acrylic Finishes",
                    "Soft-Close Hardware",
                    "Expert Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </>
    );
}
