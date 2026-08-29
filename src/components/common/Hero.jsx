"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

const contentMotion = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};
const imageMotion = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1 },
};

export default function Hero({
  tag,
  subtitle = tag,
  title,
  description,
  image,
  imageAlt = title,
  primaryAction,
  secondaryAction,
  buttonText,
  buttonLink,
  breadcrumb = false,
  featured,
  variant = "overlay",
  children,
}) {
  const isOverlay = variant === "overlay";
  const action =
    primaryAction ??
    (buttonText
      ? { label: buttonText, to: buttonLink ?? ROUTES.CONTACT }
      : null);
  const titleText = typeof title === "string" ? title : "";

  const actions = (action || secondaryAction) && (
    <div className="mt-10 flex flex-wrap gap-4">
      {action && (
        <Button
          variant={action.variant ?? "accent"}
          to={action.to}
          href={action.href}
          onClick={
            action.scrollTarget
              ? () =>
                document
                  .getElementById(action.scrollTarget)
                  ?.scrollIntoView({ behavior: "smooth" })
              : undefined
          }
        >
          {action.label}
        </Button>
      )}
      {secondaryAction && (
        <Button
          variant={isOverlay ? "outline-light" : "outline"}
          to={secondaryAction.to}
          href={secondaryAction.href}
        >
          {secondaryAction.label}
        </Button>
      )}
    </div>
  );

  if (!isOverlay) {
    return (
      <section className="relative overflow-hidden bg-cream py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <motion.div
            {...contentMotion}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-accent">
              {subtitle}
            </p>
            <h1
              className="text-5xl leading-tight text-dark md:text-6xl xl:text-7xl"
            >
              {title}
            </h1>
            {description && (
              <p className="mt-8 text-lg leading-relaxed text-mid">
                {description}
              </p>
            )}
            {actions}
            {children}
          </motion.div>
          <motion.div
            {...imageMotion}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden rounded-sm lg:h-[700px]"
          >
            <Image
              src={image?.src ?? image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            {featured && (
              <div className="absolute bottom-8 left-8 bg-white/95 p-6 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {featured.tag}
                </p>
                <h2
                  className="mt-2 text-2xl text-dark"
                >
                  {featured.title}
                </h2>
                {featured.subtitle && (
                  <p className="mt-2 text-muted">{featured.subtitle}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[600px] overflow-hidden py-24 lg:h-[70vh] lg:py-0">
      <Image
        fill
        src={image?.src ?? image}
        alt={imageAlt}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <motion.div
        {...contentMotion}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          {breadcrumb && (
            <div className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{tag}</span>
            </div>
          )}
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-accent">
            {subtitle}
          </p>
          <h1
            className="text-5xl leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          {description && (
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              {description}
            </p>
          )}
          {actions}
        </div>
      </motion.div>
    </section>
  );
}
