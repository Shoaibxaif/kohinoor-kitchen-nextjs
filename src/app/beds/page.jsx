import { bedData } from "@/data/bed";

import LayoutHero from "@/components/page-layout/LayoutHero";
import AboutSection from "@/components/page-layout/AboutSection";
import GallerySection from "@/components/page-layout/GallerySection";

import CTA from "@/components/home/CTASection";

import bedImage from "@/assets/images/beds/hero.jpg";

export const metadata = {
    title: "Custom Storage Beds in Delhi NCR | Kohinoor Kitchens",
    description:
        "Explore premium custom storage beds in Delhi NCR with elegant designs, smart organization, and durable craftsmanship for modern bedrooms.",
    keywords: [
        "custom beds Delhi NCR",
        "storage bed design Delhi",
        "modular beds Delhi",
        "premium bedroom furniture Delhi NCR",
        "hydraulic storage bed",
    ],
    openGraph: {
        title: "Custom Storage Beds in Delhi NCR | Kohinoor Kitchens",
        description: "Premium custom storage beds in Delhi NCR designed for comfort, style, and smart bedroom organization.",
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://www.kohinoorinterior.in/beds",
    },
};

export default function BedPage() {
    const { hero, gallery } = bedData;

    return (
        <>
            <LayoutHero {...hero} />

            <AboutSection
                tag="Premium Beds"
                title="Designed For"
                italicWord="Better Living"
                description="Our premium beds are thoughtfully designed to combine exceptional comfort, elegant aesthetics, and practical storage solutions. From minimalist platform beds to hydraulic storage beds, every design is customized to suit your bedroom style and everyday lifestyle."
                image={bedImage}
                imageAlt="Premium Wooden Bed"
                points={[
                    "Hydraulic Storage Beds",
                    "King & Queen Size Designs",
                    "Premium Wooden Finishes",
                    "Custom Headboard Designs",
                    "Durable Engineered Construction",
                    "Professional Installation",
                ]}
            />

            <GallerySection {...gallery} />

            <CTA />
        </>
    );
}
