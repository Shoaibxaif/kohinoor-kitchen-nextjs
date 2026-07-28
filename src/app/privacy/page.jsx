import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function PrivacyPage() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    align="left"
                    tag="Privacy Policy"
                    title="Your Data"
                    italicWord="Matters"
                />

                <div className="prose prose-lg max-w-4xl text-[#4a4a46]">
                    <p>
                        Kohinoor Kitchens collects contact information such as name, phone number, email, and city location when you submit an enquiry.
                        This information is used only to respond to your request, provide quotations, and follow up on your project.
                    </p>

                    <p>
                        We do not sell or share your personal data with unauthorized third parties. Your information is retained only as long as needed to manage your enquiry and provide customer support.
                    </p>

                    <h2>How We Use Your Data</h2>
                    <ul>
                        <li>Respond to your request for a consultation or quotation.</li>
                        <li>Send follow-up information about our services.</li>
                        <li>Improve our communication and service delivery.</li>
                    </ul>

                    <h2>Cookies and Tracking</h2>
                    <p>
                        This website may use cookies and analytics to improve performance and understand how visitors use the site.
                        No personal information is shared through these tools.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        If you have questions about this policy, please contact us at <a href="mailto:contact@kohinoorinterior.in" className="text-[#C8A97A] underline">contact@kohinoorinterior.in</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
