import Hero from "@/components/common/Hero";
import heroImage from "@/assets/images/about/hero.png";
import { ROUTES } from "@/constants/routes";

const stats = [
  ["6000+", "Kitchens Delivered"],
  ["18+", "Years Experience"],
  ["98%", "Happy Clients"],
];

export default function AboutHero() {
  return (
    <Hero
      variant="split"
      subtitle="About Kohinoor Kitchens"
      title={
        <>
          Crafting Beautiful
          <br />
          Kitchens For{" "}
          <span className="italic text-[#C8A97A]">Modern Living</span>
        </>
      }
      description="At Kohinoor Kitchens, we believe every modular kitchen should be as functional as it is beautiful. Combining thoughtful design, premium materials, and expert craftsmanship, we create custom kitchens that become the heart of every home in Delhi NCR."
      image={heroImage}
      imageAlt="Kohinoor Kitchens"
      primaryAction={{
        label: "Book a Free Design Consultation",
        to: ROUTES.CONTACT,
      }}
      secondaryAction={{ label: "View Projects", to: ROUTES.PROJECTS }}
      featured={{
        tag: "Our Promise",
        title: "Premium Design. Precision Craftsmanship.",
        subtitle:
          "Every kitchen is thoughtfully designed, expertly manufactured, and professionally installed to deliver exceptional quality.",
      }}
    >
      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#e8e4dc] pt-10">
        {stats.map(([value, label]) => (
          <div key={label}>
            <h2
              className="text-4xl text-[#1a1a18]"
              style={{ fontFamily: "Playfair Display" }}
            >
              {value}
            </h2>
            <p className="mt-2 text-sm text-[#6b6b66]">{label}</p>
          </div>
        ))}
      </div>
    </Hero>
  );
}
