import HeroSection from "@/components/about/AboutHero";
import CTA from "@/components/home/CTASection";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Expertise from "@/components/about/Expertise";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import QualityPromise from "@/components/about/QualityPromise";
import Stats from "@/components/projects/ProjectStats";
import FAQ from "@/components/projects/ProjectFAQ";

export const metadata = {
    title: "About Us",
    description:
        "Learn about Kohinoor Kitchens — 15+ years of experience crafting premium modular kitchens for modern homes across Delhi NCR.",
};

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <OurStory />
            <CoreValues />
            <WhyChooseUs />
            <Expertise />
            <ProcessTimeline />
            <QualityPromise />
            <Stats />
            <FAQ />
            <CTA />
        </>
    );
}
