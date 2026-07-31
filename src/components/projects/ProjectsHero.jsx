import heroImage from "@/assets/images/projects/hero.png";
import Hero from "@/components/common/Hero";

const stats = [
  ["6000+", "Projects"],
  ["18+", "Years"],
  ["98%", "Satisfaction"],
];

export default function ProjectsHero() {
  return (
    <Hero
      variant="split"
      subtitle="Our Portfolio"
      title={
        <>
          Crafted Kitchens
          <br />
          For <span className="italic text-[#C8A97A]">Real Homes</span>
        </>
      }
      description="Explore our collection of luxury modular kitchens designed for apartments, villas, and modern homes. Every project is customized to reflect the homeowner's lifestyle, space, and personality."
      image={heroImage}
      imageAlt="Luxury modular kitchen"
      featured={{
        tag: "Featured Project",
        title: "Modern Luxury Kitchen",
        subtitle: "Delhi NCR · L-Shaped · 320 sq.ft",
      }}
    >
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#e8e4dc] pt-8">
        {stats.map(([value, label]) => (
          <div key={label}>
            <h2
              className="text-3xl font-medium text-[#1a1a18]"
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
