import HeroSection from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/home/CTASection";

export const metadata = {
    title: "Contact Us",
    description:
        "Schedule a free consultation with Kohinoor Kitchens. Let's design a modular kitchen tailored to your lifestyle.",
};

export default function ContactPage() {
    return (
        <>
            <HeroSection />
            <ContactOptions />
            <ContactForm />
            <FAQ />
            <CTA />
        </>
    );
}
