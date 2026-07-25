import HeroSection from "@/components/projects/ProjectsHero";
import ProjectsInteractive from "@/components/projects/ProjectsInteractive";
import ProjectStats from "@/components/projects/ProjectStats";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import Testimonials from "@/components/projects/Testimonials";
import ProjectFAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/home/CTASection";

export const metadata = {
    title: "Our Projects",
    description:
        "Explore our collection of luxury modular kitchens designed for apartments, villas, and modern homes across Delhi NCR.",
};

export default function ProjectsPage() {
    return (
        <>
            <HeroSection />
            <ProjectsInteractive />
            <ProjectStats />
            <ProcessTimeline />
            <Testimonials />
            <ProjectFAQ />
            <CTA />
        </>
    );
}
