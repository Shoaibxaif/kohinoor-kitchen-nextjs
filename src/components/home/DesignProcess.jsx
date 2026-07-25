import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
    {
        number: "01",
        title: "Consultation",
        description:
            "We understand your lifestyle, requirements, space dimensions, and design preferences.",
    },
    {
        number: "02",
        title: "Design & Planning",
        description:
            "Our designers create detailed layouts, material selections, and visual concepts for approval.",
    },
    {
        number: "03",
        title: "Manufacturing",
        description:
            "Precision-crafted components are produced using premium materials and modern techniques.",
    },
    {
        number: "04",
        title: "Installation",
        description:
            "Our expert team completes installation with attention to detail and quality assurance.",
    },
];

function DesignProcess() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Our Process"
                    title="From Vision To"
                    italicWord="Reality"
                />

                <div className="mt-20 relative">

                    {/* Desktop Line */}
                    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-[#e8e4dc]" />

                    <div className="grid lg:grid-cols-4 gap-10 relative">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">

                                {/* Circle */}
                                <div
                                    className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#f7f5f0]
                    border
                    border-[#e8e4dc]
                    flex
                    items-center
                    justify-center
                    text-[#c8a97a]
                    text-lg
                    font-medium
                    mx-auto lg:mx-0
                  "
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {step.number}
                                </div>

                                <div className="mt-8">
                                    <h3
                                        className="
                      text-2xl
                      text-[#1a1a18]
                      text-center
                      lg:text-left
                    "
                                        style={{
                                            fontFamily: "Playfair Display",
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="
                      mt-4
                      text-[#4a4a46]
                      leading-7
                      text-center
                      lg:text-left
                    "
                                    >
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default DesignProcess;