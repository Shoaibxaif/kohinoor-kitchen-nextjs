import { notFound } from "next/navigation";
import { kitchenLayouts } from "@/data/kitchenLayouts";

import LayoutHero from "@/components/page-layout/LayoutHero";
import QuickFacts from "@/components/page-layout/QuickFacts";
import KitchenBlueprint from "@/components/page-layout/KitchenBlueprint";
import FeatureGrid from "@/components/page-layout/FeatureGrid";
import StorageSolutions from "@/components/page-layout/StorageSolutions";
import GallerySection from "@/components/page-layout/GallerySection";
import FAQSection from "@/components/page-layout/FAQSection";
import CTA from "@/components/home/CTASection";

const slugMap = {
    "l-shaped-kitchen": "lShaped",
    "u-shaped-kitchen": "uShaped",
    "parallel-kitchen": "parallel",
    "island-kitchen": "island",
    "straight-kitchen": "straight",
    "peninsula-kitchen": "peninsula",
};

const titleMap = {
    "l-shaped-kitchen": "L-Shaped Kitchen",
    "u-shaped-kitchen": "U-Shaped Kitchen",
    "parallel-kitchen": "Parallel Kitchen",
    "island-kitchen": "Island Kitchen",
    "straight-kitchen": "Straight Kitchen",
    "peninsula-kitchen": "Peninsula Kitchen",
};

export function generateStaticParams() {
    return Object.keys(slugMap).map((layout) => ({ layout }));
}

export async function generateMetadata({ params }) {
    const { layout } = await params;
    const key = slugMap[layout];
    if (!key) return {};

    const { hero } = kitchenLayouts[key];
    const pageTitle = `${titleMap[layout]} Modular Kitchen Design in Delhi NCR`;
    const pageDescription = `Explore premium ${titleMap[layout]} modular kitchens in Delhi NCR with smart storage, efficient workflow, and luxury finishes for modern homes.`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            `${titleMap[layout]} modular kitchen`,
            `${titleMap[layout]} kitchen design`,
            "modular kitchen Delhi NCR",
            "luxury modular kitchen",
            "custom kitchen design",
        ],
    };
}

export default async function KitchenLayoutPage({ params }) {
    const { layout } = await params;
    const key = slugMap[layout];

    if (!key) {
        notFound();
    }

    const { hero, quickFacts, blueprint, benefits, storage, gallery, faq } =
        kitchenLayouts[key];

    return (
        <>
            <LayoutHero {...hero} />
            <QuickFacts {...quickFacts} />
            <KitchenBlueprint {...blueprint} />
            <FeatureGrid {...benefits} />
            <StorageSolutions {...storage} />
            <GallerySection {...gallery} />
            <FAQSection {...faq} />
            <CTA />
        </>
    );
}
