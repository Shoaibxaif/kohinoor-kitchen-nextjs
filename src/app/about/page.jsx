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
    title: "About Kohinoor Kitchens | Modular Kitchen Experts in Delhi NCR",
    description:
        "Discover Kohinoor Kitchens: 18+ years of experience and 6000+ kitchens delivered across Delhi NCR, creating premium modular kitchens for modern homes.",
    keywords: [
        "about kohinoor kitchens",
        "modular kitchen experts",
        "delhi ncr kitchen designers",
        "premium modular kitchens",
        "custom kitchen installation",
    ],
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
