import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

import kitchenImage from "@/assets/images/hero-kitchen.jpg";

const benefits = [
    "Maximum space utilization for every kitchen layout",
    "Smart storage solutions for pantry, drawers, and corner cabinets",
    "Premium hardware, hinges, and accessories",
    "Elegant contemporary modular kitchen designs",
    "Easy maintenance and long-lasting finishes",
    "Custom modular kitchen planning for Delhi NCR homes",
];

function WhyKohinoor() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Why Choose Modular Kitchens"
                    title="Designed Around"
                    italicWord="Your Lifestyle"
                />

                {/* Hero Image */}
                <div className="relative mt-16 overflow-hidden rounded-sm h-[500px]">
                    <Image
                        src={kitchenImage}
                        alt="Luxury Modular Kitchen"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 100vw, 100vw"
                    />
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto text-center mt-16">
                    <p className="text-muted leading-8">
                        A modular kitchen is more than cabinetry. It is a thoughtfully
                        planned cooking space with smart storage, premium kitchen materials,
                        and a layout optimized for modern living. At Kohinoor Kitchens, we
                        build custom modular kitchens for homes across Delhi NCR that look
                        beautiful, work efficiently, and stand the test of time.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 mt-12 text-left">
                        {benefits.map((item) => (
                            <div key={item} className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-accent" />

                                <p className="text-mid">{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button variant="accent" className="mt-12" to={ROUTES.CONTACT}>
                        Book a Free Design Consultation
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default WhyKohinoor;
