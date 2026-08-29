"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const faqs = [
    {
        question: "How much does a modular kitchen cost in Delhi NCR?",
        answer:
            "Pricing for modular kitchens is personalized based on your specific layout, chosen materials, finishes, and hardware selections. We offer tailored quotes following an initial design consultation to ensure the solution perfectly fits your needs.",
    },
    {
        question: "Which material is best for a modular kitchen?",
        answer:
            "For superior longevity and performance, we recommend HDHMR boards and BWP (Boiling Water Proof) grade plywood. These premium materials are specifically engineered to offer exceptional moisture resistance and structural integrity, making them the gold standard for high-quality modular kitchen cabinetry.",
    },
    {
        question: "How long does modular kitchen installation take?",
        answer:
            "Once the final design is approved, we typically complete the installation within 1-2 weeks, ensuring a seamless process that includes professional manufacturing, efficient delivery, and expert on-site assembly.",
    },
    {
        question: "Do you offer free design consultation for modular kitchens?",
        answer:
            "Yes, we provide a complimentary design consultation and site visit to better understand your space, cooking habits, and design preferences. This service is included as part of your final project order.",
    },
    {
        question: "Which hardware brands do you use in your kitchens?",
        answer: "To guarantee effortless functionality and enduring quality, we integrate top-tier hardware from industry-leading brands, including Hafele, Hettich, Blum, Ebco, Ozone, and Korraline.",
    },
    {
        question: "Do Kohinoor modular kitchens come with a warranty?",
        answer:
            "Yes, Every kitchen includes a 1-year service warranty and a 7-year hardware warranty, subject to terms and conditions.",
    },
];

function FAQ() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Frequently Asked Questions"
                    title="Everything You Need"
                    italicWord="To Know"
                />

                <div className="max-w-4xl mx-auto mt-16">
                    {faqs.map((faq, index) => (
                        <div key={faq.question} className="border-b border-border">
                            <button
                                onClick={() => setActive(active === index ? null : index)}
                                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  py-7
                  text-left
                "
                            >
                                <h3 className="text-xl text-dark font-medium">
                                    {faq.question}
                                </h3>

                                {active === index ? (
                                    <Minus className="text-accent" />
                                ) : (
                                    <Plus className="text-accent" />
                                )}
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="pb-7 text-muted leading-8 pr-8">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FAQ;
