import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const termsSections = [
    {
        title: "Acceptance of Terms",
        content:
            "By using this website, you agree to access and use the information provided for lawful and informational purposes only. Any interaction with our services, including enquiries, consultations, and quotations, is subject to these terms.",
    },
    {
        title: "Enquiries & Consultations",
        content:
            "When you submit a form or contact us through the site, you provide details that help us respond to your requirement. These enquiries are used for quotation, consultation, and service coordination, and we may follow up for clarification where required.",
    },
    {
        title: "Property & Content",
        content:
            "All content on this website, including text, images, graphics, branding, design concepts, and service information, remains the property of Kohinoor Kitchens unless otherwise noted. Reproduction or use without permission is not allowed.",
    },
    {
        title: "Disclaimer",
        content:
            "We make every effort to keep information accurate and current, but design recommendations, project timelines, pricing, and availability may change after detailed review, site inspection, or final approval. The website is intended for informational and marketing purposes.",
    },
];

export default function TermsPage() {
    return (
        <section className="bg-cream py-20 lg:py-28">
            <Container>
                <div className="max-w-4xl">
                    <SectionHeading
                        tag="Terms of Use"
                        title="Website"
                        italicWord="Agreement"
                    />
                </div>

                <div className="mt-12 rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-10 lg:p-12">
                    <p className="max-w-3xl text-lg leading-8 text-mid">
                        By using Kohinoor Kitchens’ website, you agree to use the site responsibly and understand that all project-related communications are intended to support your interior and furniture enquiry process.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {termsSections.map((section) => (
                        <article
                            key={section.title}
                            className="rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                Terms
                            </p>
                            <h2 className="mt-4 text-2xl text-dark">
                                {section.title}
                            </h2>
                            <p className="mt-4 leading-8 text-mid">
                                {section.content}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-12 rounded-[1.75rem] border border-border bg-dark p-8 text-white md:p-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                Contact
                            </p>
                            <h2 className="mt-3 text-3xl text-white">
                                Need Clarification?
                            </h2>
                        </div>

                        <a
                            href="mailto:contact@kohinoorinterior.in"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-dark"
                        >
                            contact@kohinoorinterior.in
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
