import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function TermsPage() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    align="left"
                    tag="Terms of Use"
                    title="Website"
                    italicWord="Agreement"
                />

                <div className="prose prose-lg max-w-4xl text-mid">
                    <p>
                        By using the Kohinoor Kitchens website, you agree to provide accurate information when submitting enquiries and to use the site for lawful purposes.
                    </p>

                    <h2>Enquiries</h2>
                    <p>
                        All enquiries submitted via the contact form are sent to Kohinoor Kitchens for the purpose of responding to your request and providing a consultation.
                    </p>

                    <h2>Intellectual Property</h2>
                    <p>
                        All content, images, and branding on this website are proprietary to Kohinoor Kitchens unless otherwise stated.
                    </p>

                    <h2>Disclaimer</h2>
                    <p>
                        The information on this site is provided as-is and is intended for general marketing purposes. Estimates, prices, and availability may change based on detailed design review and site inspection.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        For questions about these terms, contact us at <a href="mailto:contact@kohinoorinterior.in" className="text-accent underline">contact@kohinoorinterior.in</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
