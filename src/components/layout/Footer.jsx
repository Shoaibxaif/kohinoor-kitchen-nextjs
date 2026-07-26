import Link from "next/link";

import Container from "@/components/common/Container";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";
import logo from "@/assets/images/logo.png";

import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

const links = [
    {
        label: "Home",
        path: ROUTES.HOME,
    },
    {
        label: "Kitchens",
        path: ROUTES.MODULAR_KITCHEN,
    },
    {
        label: "Projects",
        path: ROUTES.PROJECTS,
    },
    {
        label: "About",
        path: ROUTES.ABOUT,
    },
    {
        label: "Contact",
        path: ROUTES.CONTACT,
    },
];

const services = [
    {
        label: "Modular Kitchens",
        path: ROUTES.MODULAR_KITCHEN,
    },
    {
        label: "Wardrobe",
        path: ROUTES.WARDROBES,
    },
    {
        label: "Bed",
        path: ROUTES.BEDS,
    },
    {
        label: "Sofa",
        path: ROUTES.SOFAS,
    },
    {
        label: "TV Panel",
        path: ROUTES.TV_PANELS,
    },
    {
        label: "Dining Furniture",
        path: ROUTES.DINING_FURNITURE,
    }
];

function Footer() {
    return (<footer className="bg-[#f7f5f0] border-t border-[#e8e4dc]"> <Container> <div className="py-24">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div>
                <img
                    src={logo.src ?? logo}
                    alt="Kohinoor Modular Kitchen"
                    className="h-20 w-auto object-contain"
                />

                <p
                    className="
      mt-6
      max-w-lg
      text-[#6b6b66]
      leading-8
    "
                >
                    Kohinoor Modular Kitchen is a trusted modular kitchen manufacturer in Delhi with 18+ years of experience. We design and build premium modular kitchens featuring smart storage, quality materials, and expert craftsmanship for modern homes.
                </p>
            </div>

            {/* Company */}
            <div>
                <h3
                    className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#c8a97a]
              mb-6
            "
                >
                    Company
                </h3>

                <ul className="space-y-4">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className="
                                text-[#3f3f3b]
                                transition-all
                                duration-300
                                hover:text-[#C8A97A]
                                hover:translate-x-1
                                inline-block
                                "
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Services */}

            <div>
                <h3
                    className="
      mb-6
      text-xs
      uppercase
      tracking-[0.18em]
      text-[#c8a97a]
    "
                >
                    Services
                </h3>

                <ul className="space-y-4">
                    {services.map((service) => (
                        <li key={service.label}>
                            <Link
                                href={service.path}
                                className="
                                text-[#3f3f3b]
                                transition-all
                                duration-300
                                hover:text-[#C8A97A]
                                hover:translate-x-1
                                inline-block
                                "
                            >
                                {service.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3
                    className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#c8a97a]
              mb-6
            "
                >
                    Contact
                </h3>

                <div className="space-y-5 text-[#3f3f3b]">
                    <div className="flex items-start gap-3">
                        <Phone size={18} className="mt-1 text-[#C8A97A]" />
                        <span>{SITE.phone}</span>
                    </div>

                    <div className="flex items-start gap-3">
                        <Mail size={18} className="mt-1 text-[#C8A97A]" />
                        <span>{SITE.email}</span>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1 flex-shrink-0 text-[#C8A97A]" />
                        <div>
                            {SITE.address.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div
            className="
          mt-16
          pt-8
          border-t
          border-[#ddd7ce]
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        "
        >
            <p className="text-[#7a7a73] text-sm">
                © {new Date().getFullYear()} Kohinoor Kitchens. All rights reserved.
            </p>

            <p className="text-[#7a7a73] text-sm">
                Designed by{" "}
                <a
                    href="https://www.linkedin.com/in/mohammad-shoaib-0a8298223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
     text-[#3f3f3b]
hover:text-[#C8A97A]
      underline-offset-4
      hover:underline
      transition-all
    "
                >
                    Mohammad Shoaib
                </a>
            </p>
        </div>

    </div>
    </Container>
    </footer>

    );
}

export default Footer;
