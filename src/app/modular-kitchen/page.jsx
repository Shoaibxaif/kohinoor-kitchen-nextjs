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
    return (
        <>
            <PageHero
                tag="Modular Kitchen Designers"
                title="Premium Modular Kitchens in Delhi NCR"
                description="Custom modular kitchen design, manufacturing, and installation with intelligent storage, premium materials, and expert craftsmanship."
                image={heroImage}
                primaryAction={{
                    label: "Schedule a Free Consultation",
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
