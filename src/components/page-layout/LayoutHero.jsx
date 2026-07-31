import Hero from "@/components/common/Hero";

export default function LayoutHero({ tag, title, description, image, imageAlt, buttonText, buttonLink }) {
  return <Hero tag={tag} title={title} description={description} image={image} imageAlt={imageAlt} buttonText={buttonText} buttonLink={buttonLink} />;
}
