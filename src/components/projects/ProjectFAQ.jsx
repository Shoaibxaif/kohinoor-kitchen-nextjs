import FAQSection from "@/components/page-layout/FAQSection";
import { projectFaq } from "@/data/projectFaq";

function ProjectFAQ() {
    return (
        <FAQSection
            {...projectFaq}
            faqs={projectFaq.items}
        />
    );
}

export default ProjectFAQ;