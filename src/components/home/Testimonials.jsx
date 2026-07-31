import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import GoogleIcon from "@/components/common/GoogleIcon";

// Real reviews copied directly from the Kohinoor Google Business Profile
// (google.com/maps/place/?q=place_id:ChIJyaQbnl79DDkRIpjMvWhmKRc).
// To add more: open a review on Google Maps, copy the name, star rating,
// and review text, and add another object below in the same shape.
const testimonials = [
    {
        name: "Nishith Sharma",
        location: "Local Guide · 19 reviews",
        rating: 5,
        review:
            "Just got my modular kitchen delivered by Kohinoor Modular Kitchens, and I'm genuinely impressed with the entire experience! From design to execution, everything was handled professionally and with great attention to detail. The finish, fittings, and overall quality have truly elevated the look and functionality of my kitchen. A special thanks to Furkan and Zeeshan for their outstanding support throughout the process. They were responsive, cooperative, and ensured everything was completed smoothly and on time. Highly recommended for anyone planning a modular kitchen upgrade!",
        profileUrl:
            "https://www.google.com/maps/contrib/109529087084098678060/reviews?hl=en-GB",
    },
    {
        name: "Vasim Khan",
        location: "9 weeks ago",
        rating: 5,
        review:
            "Kohinoor modular kitchen se Puri tarah Ham satisfy Hain humne inse pichhle 10 salon mein do bar kam kara liya ek bar kitchen banai aur ab TV panel aur almari banai hai inhone Main aur Meri wife donon khush hai inse",
        profileUrl:
            "https://www.google.com/maps/contrib/113142022567067377707/reviews?hl=en-GB",
    },
    {
        name: "Mohammad Shoaib",
        location: "Local Guide · 3 reviews",
        rating: 5,
        review:
            "I had a wonderful experience with Kohinoor Modular Kitchen. The team was highly professional, attentive to my requirements, and delivered exactly what they promised. The design is modern, the quality of materials is excellent, and the installation was completed neatly and on time. Their craftsmanship and attention to detail truly exceeded my expectations. I highly recommend Kohinoor Modular Kitchen to anyone looking for a stylish, durable, and functional kitchen. Great service and excellent value for money!",
        profileUrl:
            "https://www.google.com/maps/contrib/114168961772162032973/reviews?hl=en-IN",
    },
    // Add the next real review here, same shape as above:
    // {
    //     name: "",
    //     location: "",
    //     rating: 5,
    //     review: "",
    //     profileUrl: "",
    // },
];

function Testimonials() {
    const count = testimonials.length;

    const gridClass =
        count === 1
            ? "grid-cols-1 max-w-xl mx-auto"
            : count === 2
                ? "sm:grid-cols-2 max-w-4xl mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3";

    return (
        <section className="py-24 lg:py-32 bg-cream">
            <Container>
                <SectionHeading
                    tag="Client Experiences"
                    title="What Our Clients"
                    italicWord="Say"
                />

                <div className={`grid gap-8 mt-16 ${gridClass}`}>
                    {testimonials.map((testimonial) => (
                        <article
                            key={testimonial.name}
                            className="
                bg-white
                border
                border-border
                p-10
                flex
                flex-col
              "
                        >
                            {/* Stars + source */}
                            <div className="flex items-center justify-between">
                                <div
                                    role="img"
                                    aria-label={`Rated ${testimonial.rating ?? 5} out of 5 stars`}
                                    className="flex gap-1 text-accent text-lg"
                                >
                                    <span aria-hidden="true">
                                        {"★".repeat(testimonial.rating ?? 5)}
                                    </span>
                                </div>

                                <GoogleIcon size={18} />
                            </div>

                            {/* Review */}
                            <p
                                className="
                  mt-6
                  text-mid
                  leading-8
                "
                            >
                                &ldquo;{testimonial.review}&rdquo;
                            </p>

                            {/* Client */}
                            <div className="mt-8 pt-6 border-t border-border">
                                <a
                                    href={testimonial.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-dark transition-colors hover:text-accent"
                                >
                                    {testimonial.name}
                                </a>

                                <p className="mt-1 text-sm text-light">
                                    {testimonial.location}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-10 text-center text-xs text-light">
                    Reviews shown as posted on Google.
                </p>
            </Container>
        </section>
    );
}

export default Testimonials;
