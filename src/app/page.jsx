import Hero from "@/components/home/Hero";
import MarqueeBar from "@/components/home/MarqueeBar";
import KitchenCategories from "@/components/home/KitchenCategories";
import FurnitureCategories from "@/components/home/FurnitureCategories";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DesignProcess from "@/components/home/DesignProcess";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Luxury Modular Kitchens & Furniture",
  description:
    "Designing and manufacturing premium modular kitchens, wardrobes, TV panels, beds, sofas, and custom furniture for modern homes across Delhi NCR.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <KitchenCategories />
      <FurnitureCategories />
      <AboutSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <DesignProcess />
      <Testimonials />
      <CTASection />
    </>
  );
}
