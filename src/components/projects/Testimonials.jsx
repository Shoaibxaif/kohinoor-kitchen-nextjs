import { Star } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Jaipur",
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
    <section className="bg-[#f7f5f0] py-24 lg:py-32">
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
                border-[#e8e4dc]
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#C8A97A] text-[#C8A97A]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-8 leading-8 text-[#6b6b66]">
                “{testimonial.review}”
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-[#e8e4dc]" />

              {/* Client */}
              <div>
                <h3
                  className="text-2xl text-[#1a1a18]"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  {testimonial.name}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#C8A97A]">
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