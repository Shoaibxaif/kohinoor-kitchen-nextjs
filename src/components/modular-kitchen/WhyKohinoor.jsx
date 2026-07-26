import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

import kitchenImage from "@/assets/images/hero-kitchen.jpg";

const benefits = [
    "Maximum Space Utilization",
    "Smart Storage Solutions",
    "Premium Hardware & Accessories",
    "Elegant Contemporary Designs",
    "Easy Maintenance & Cleaning",
    "Customized For Every Home",
];

function WhyKohinoor() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Why Modular Kitchen"
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
                    <p className="text-[#6b6b66] leading-8">
                        A modular kitchen is more than beautiful cabinetry. It is an
                        intelligently designed space that maximizes functionality, improves
                        organization, and enhances everyday living. At Kohinoor Kitchens,
                        every layout is thoughtfully planned to match your lifestyle,
                        cooking habits, and available space.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 mt-12 text-left">
                        {benefits.map((item) => (
                            <div key={item} className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-[#C8A97A]" />

                                <p className="text-[#4a4a46]">{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button variant="accent" className="mt-12" to={ROUTES.CONTACT}>
                        Book Free Consultation
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default WhyKohinoor;
