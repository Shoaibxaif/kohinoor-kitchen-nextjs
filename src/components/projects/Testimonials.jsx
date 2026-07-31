import { Star } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi NCR",
    rating: 5,
    review:
      "The entire experience was seamless. From the initial design consultation to the final installation, Kohinoor exceeded our expectations. The quality and finish are outstanding.",
  },
  {
    id: 2,
    name: "Neha Verma",
    location: "Delhi",
    rating: 5,
    review:
      "Our U-shaped modular kitchen looks exactly like the 3D design. Every cabinet, accessory, and finish feels premium. Highly recommended for anyone building a luxury kitchen.",
  },
  {
    id: 3,
    name: "Amit Gupta",
    location: "Gurugram",
    rating: 5,
    review:
      "Professional team, transparent pricing, and excellent workmanship. The storage solutions completely transformed how we use our kitchen every day.",
  },
];

function Testimonials() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <SectionHeading
          tag="Client Testimonials"
          title="Loved By"
          italicWord="Homeowners"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                border
                border-border
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Rating */}
              <div
                role="img"
                aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                className="flex gap-1"
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    aria-hidden="true"
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-8 leading-8 text-muted">
                “{testimonial.review}”
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Client */}
              <div>
                <h3
                  className="text-2xl text-dark"
                >
                  {testimonial.name}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-accent">
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
