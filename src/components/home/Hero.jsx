import Hero from "@/components/common/Hero";
import heroImage from "@/assets/images/hero-kitchen.jpg";
import { ROUTES } from "@/constants/routes";

const stats = [
  ["6000+", "Kitchens Delivered"],
  ["18+", "Years Experience"],
  ["100%", "Custom Design"],
];

export default function HomeHero() {
  return (
    <Hero
      variant="split"
      subtitle="Explore Modular Kitchen Designs for Delhi NCR Homes"
      title={
        <>
          Modular Kitchens
          <br />
          Crafted for Modern Homes in Delhi NCR
        </>
      }
      description="Custom modular kitchens, wardrobes and bespoke furniture designed for modern homes in Delhi, Ghaziabad, Noida, Gurgaon and across NCR. From space planning and material selection to manufacturing and installation, Kohinoor Kitchens creates practical, premium interiors tailored to your home."
      image={heroImage}
      imageAlt="Luxury modular kitchen design for modern Delhi NCR homes"
      primaryAction={{
        label: "Book a Free Design Consultation",
        to: ROUTES.CONTACT,
        variant: "primary",
      }}
      secondaryAction={{ label: "View Projects", to: ROUTES.PROJECTS }}
      featured={{
        tag: "Featured Project",
        title: "Contemporary Kitchen",
        subtitle: "South Delhi Residence",
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
            <p className="mt-2 text-sm text-[#9a9a92]">{label}</p>
          </div>
        ))}
      </div>
    </Hero>
  );
}
