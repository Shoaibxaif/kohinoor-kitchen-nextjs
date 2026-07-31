import Link from "next/link";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Error 404
          </p>
          <h1
            className="mt-6 text-5xl leading-tight text-dark md:text-6xl"
          >
            This page could not be found
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-mid">
            The page may have moved, or the link you followed is no longer
            available. Explore our kitchen designs or return to the homepage.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to={ROUTES.HOME}>Return Home</Button>
            <Link
              href={ROUTES.MODULAR_KITCHEN}
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm uppercase tracking-[0.15em] text-dark transition-colors hover:bg-white"
            >
              Explore Kitchens
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
