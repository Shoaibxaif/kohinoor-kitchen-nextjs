import HeroSection from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/home/CTASection";
import StructuredData from "@/components/common/StructuredData";

export const metadata = {
    title: "Contact Kohinoor Kitchens | Modular Kitchen Consultation Delhi NCR",
    description:
        "Schedule a free consultation with Kohinoor Kitchens for premium modular kitchen design, manufacture, and installation across Delhi NCR.",
    keywords: [
        "modular kitchen consultation",
        "contact kitchen designers",
        "Delhi NCR modular kitchens",
        "kitchen showroom Ghaziabad",
        "premium kitchen builders",
    ],
};

export default function ContactPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kohinoorinterior.in/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.kohinoorinterior.in/contact" },
        ],
    };

    return (
        <>
            <StructuredData data={breadcrumbSchema} />
            <HeroSection />
            <ContactOptions />
            <ContactForm />
            <FAQ />
            <CTA />
        </>
    );
}
