import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const policySections = [
    {
        title: "Information We Collect",
        content:
            "We collect the details you share with us, including your name, phone number, email address, city, and project requirements when you enquire about our interior design and modular kitchen services. This information helps us understand your needs and respond appropriately.",
    },
    {
        title: "How We Use It",
        content:
            "Your information is used to respond to enquiries, prepare quotations, arrange consultations, coordinate design discussions, and provide after-sales support for your project. We may also use project details to improve how we serve our clients.",
    },
    {
        title: "Data Protection",
        content:
            "We do not sell, rent, or trade personally identifiable information to third parties. Your information is stored securely and retained only as long as needed for service delivery, communication, and legal obligations.",
    },
    {
        title: "Cookies & Analytics",
        content:
            "Our website may use cookies and analytics tools to understand site performance, improve user experience, and measure website traffic. These tools help us make the website more efficient without using your personal information for marketing or resale.",
    },
];

export default function PrivacyPage() {
    return (
        <section className="bg-cream py-20 lg:py-28">
            <Container>
                <div className="max-w-4xl">
                    <SectionHeading
                        tag="Privacy Policy"
                        title="Your Data"
                        italicWord="Matters"
                    />
                </div>

                <div className="mt-12 rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-10 lg:p-12">
                    <p className="max-w-3xl text-lg leading-8 text-mid">
                        At Kohinoor Kitchens, we respect your privacy and are committed to protecting the information you share with us.
                        We use your details responsibly to provide a smooth consultation and project experience.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {policySections.map((section) => (
                        <article
                            key={section.title}
                            className="rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                Privacy
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
                                Questions About This Policy?
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
