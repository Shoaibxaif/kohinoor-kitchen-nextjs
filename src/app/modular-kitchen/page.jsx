import PageHero from "@/components/common/PageHero";
import heroImage from "@/assets/images/hero-kitchen.jpg";
import WhyKohinoor from "@/components/modular-kitchen/WhyKohinoor";
import KitchenLayouts from "@/components/modular-kitchen/KitchenLayouts";
import MaterialOptions from "@/components/modular-kitchen/MaterialOptions";
import Accessories from "@/components/modular-kitchen/Accessories";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/modular-kitchen/FAQ";
import CTASection from "@/components/home/CTASection";
import StructuredData from "@/components/common/StructuredData";
import { ROUTES } from "@/constants/routes";

export const metadata = {
    title: "Premium Modular Kitchens in Delhi NCR | Kohinoor Kitchens",
    description:
        "Custom modular kitchen design and installation with smart storage, premium materials, and expert craftsmanship for modern homes in Delhi NCR.",
    keywords: [
        "modular kitchens delhi",
        "modular kitchen designers",
        "custom kitchen cabinets",
        "kitchen storage solutions",
        "premium modular kitchens",
    ],
};

export default function ModularKitchenPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How much does a modular kitchen cost in Delhi NCR?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Costs vary based on kitchen size, materials, finish, accessories, and hardware brands. Our premium modular kitchens in Delhi NCR typically start from ₹1.5 lakh, with tailored quotations after a detailed design consultation.",
                },
            },
            {
                "@type": "Question",
                name: "Which material is best for a modular kitchen?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "HDHMR board and marine plywood are top choices for modular kitchen cabinets due to their moisture resistance, strength, and long-term durability.",
                },
            },
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kohinoorinterior.in/" },
            { "@type": "ListItem", position: 2, name: "Modular Kitchens", item: "https://www.kohinoorinterior.in/modular-kitchen" },
        ],
    };

    return (
        <>
            <StructuredData data={faqSchema} />
            <StructuredData data={breadcrumbSchema} />
            <PageHero
                tag="Modular Kitchen Designers"
                title="Premium Modular Kitchens in Delhi NCR"
                description="Custom modular kitchen design, manufacturing, and installation with intelligent storage, premium materials, and expert craftsmanship."
                image={heroImage}
                primaryAction={{
                    label: "Book a Free Design Consultation",
                    to: ROUTES.CONTACT,
                }}
                secondaryAction={{
                    label: "View Our Projects",
                    to: ROUTES.PROJECTS,
                }}
            />
            <WhyKohinoor />
            <KitchenLayouts />
            <MaterialOptions />
            <Accessories />
            <FeaturedProjects />
            <Testimonials />
            <FAQ />
            <CTASection />
        </>
    );
}
