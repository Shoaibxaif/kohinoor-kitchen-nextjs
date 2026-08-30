import Hero from "@/components/home/Hero";
import MarqueeBar from "@/components/home/MarqueeBar";
import KitchenCategories from "@/components/home/KitchenCategories";
import FurnitureCategories from "@/components/home/FurnitureCategories";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DesignProcess from "@/components/home/DesignProcess";
import Testimonials from "@/components/common/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Modular Kitchen Designs in Delhi NCR | Kohinoor Kitchens",
  description:
    "Premium modular kitchen designer and manufacturer serving Delhi, Noida, Gurugram, Ghaziabad & Faridabad. L-shaped, U-shaped, island & parallel kitchens with matte finishes, handle-less shutters, smart storage, wardrobes, beds and custom furniture.",
  keywords: [
    "modular kitchen Delhi NCR",
    "modular kitchen design Delhi",
    "modular kitchen Ghaziabad",
    "modular kitchen Noida",
    "modular kitchen Gurgaon",
    "L-shaped modular kitchen",
    "U-shaped modular kitchen",
    "island kitchen design",
    "parallel kitchen design",
    "modular kitchen cost Delhi NCR",
    "matte finish modular kitchen",
    "handle-less kitchen design",
    "custom wardrobes Delhi NCR",
    "luxury interior design Delhi",
    "best modular kitchen Delhi",
    "affordable modular kitchen Noida",
    "premium modular kitchen Gurgaon",
    "modern modular kitchen designs",
    "small apartment kitchen layouts Delhi",
    "luxury island kitchen Delhi NCR",
    "budget modular kitchen Ghaziabad",
    "top modular kitchen brands Delhi NCR",
    "latest modular kitchen trends Delhi",
    "kitchen renovation Delhi NCR",
    "interior design services Delhi NCR"
  ],
  openGraph: {
    title: "Modular Kitchen Designs in Delhi NCR | Kohinoor Kitchens",
    description:
      "Premium modular kitchens, wardrobes, and custom furniture for modern homes across Delhi, Noida, Gurugram, Ghaziabad & Faridabad.",
    type: "website",
    locale: "en_IN",
  },
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
