import Hero from "@/components/common/Hero";
import heroImage from "@/assets/images/contact/hero.png";
import { ROUTES } from "@/constants/routes";

const stats = [
  ["18+", "Years"],
  ["6000+", "Kitchens"],
  ["98%", "Satisfaction"],
];

export default function ContactHero() {
  return (
    <Hero
      variant="split"
      subtitle="Contact Us"
      title={
        <>
          Let&apos;s Create
          <br />
          Your{" "}
          <span className="italic text-[#C8A97A]">Dream Modular Kitchen</span>
        </>
      }
      description="Whether you're renovating your kitchen or building a new home in Delhi NCR, our modular kitchen experts are here to help. With 18+ years of experience and 6000+ kitchens delivered, we create custom modular kitchens tailored to your lifestyle and space."
      image={heroImage}
      imageAlt="Contact Kohinoor Kitchens"
      primaryAction={{
        label: "Book Free Consultation",
        scrollTarget: "contact-form",
      }}
      secondaryAction={{ label: "View Projects", to: ROUTES.PROJECTS }}
      featured={{
        tag: "Free Design Consultation",
        title: "Bring Your Modular Kitchen Vision To Life",
        subtitle:
          "Meet our designers, explore premium materials, and receive a personalized modular kitchen proposal.",
      }}
    >
      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#e8e4dc] pt-10">
        {stats.map(([value, label]) => (
          <div key={label}>
            <h2
              className="text-3xl text-[#1a1a18]"
              style={{ fontFamily: "Playfair Display" }}
            >
              {value}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </Hero>
  );
}
