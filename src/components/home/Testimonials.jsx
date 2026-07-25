import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
    {
        name: "Arjun Mehra",
        location: "South Delhi",
        review:
            "Kohinoor Kitchens transformed our space beautifully. The attention to detail, material quality, and execution exceeded our expectations.",
    },
    {
        name: "Priya Sharma",
        location: "Gurgaon",
        review:
            "From design consultation to installation, the entire process was seamless. The team delivered exactly what was promised.",
    },
    {
        name: "Rahul Verma",
        location: "Noida",
        review:
            "Our kitchen feels premium, functional, and perfectly suited to our lifestyle. We couldn't be happier with the result.",
    },
];

function Testimonials() {
    return (
        <section className="py-24 lg:py-32 bg-[#f7f5f0]">
            <Container>
                <SectionHeading
                    tag="Client Experiences"
                    title="What Our Clients"
                    italicWord="Say"
                />

                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="
                bg-white
                border
                border-[#e8e4dc]
                p-8
                flex
                flex-col
              "
                        >
                            {/* Stars */}
                            <div className="flex gap-1 text-[#c8a97a] text-lg">
                                ★★★★★
                            </div>

                            {/* Review */}
                            <p
                                className="
                  mt-6
                  text-[#4a4a46]
                  leading-8
                "
                            >
                                "{testimonial.review}"
                            </p>

                            {/* Client */}
                            <div className="mt-8 pt-6 border-t border-[#e8e4dc]">
                                <h4
                                    className="text-xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {testimonial.name}
                                </h4>

                                <p className="text-sm text-[#9a9a92] mt-1">
                                    {testimonial.location}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Testimonials;