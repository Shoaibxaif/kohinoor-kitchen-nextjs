import HeroSection from "@/components/projects/ProjectsHero";
import ProjectsInteractive from "@/components/projects/ProjectsInteractive";
import ProjectStats from "@/components/projects/ProjectStats";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import Testimonials from "@/components/projects/Testimonials";
import ProjectFAQ from "@/components/projects/ProjectFAQ";
import CTA from "@/components/home/CTASection";
import StructuredData from "@/components/common/StructuredData";

export const metadata = {
    title: "Our Projects",
    description:
        "Explore our collection of luxury modular kitchens designed for apartments, villas, and modern homes across Delhi NCR.",
};

export default function ProjectsPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kohinoorinterior.in/" },
            { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.kohinoorinterior.in/projects" },
        ],
    };

    return (
        <>
            <StructuredData data={breadcrumbSchema} />
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
