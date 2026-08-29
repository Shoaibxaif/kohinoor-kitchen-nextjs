"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const kitchenLinks = [
    {
        label: "Modular Kitchen",
        path: ROUTES.MODULAR_KITCHEN,
    },
    {
        label: "L-Shaped Kitchen",
        path: ROUTES.L_SHAPED_KITCHEN,
    },
    {
        label: "U-Shaped Kitchen",
        path: ROUTES.U_SHAPED_KITCHEN,
    },
    {
        label: "Parallel Kitchen",
        path: ROUTES.PARALLEL_KITCHEN,
    },
    {
        label: "Island Kitchen",
        path: ROUTES.ISLAND_KITCHEN,
    },
    {
        label: "Straight Kitchen",
        path: ROUTES.STRAIGHT_KITCHEN,
    },
];

const serviceLinks = [
    {
        label: "Modular Kitchens",
        path: ROUTES.MODULAR_KITCHEN,
    },
    {
        label: "Wardrobes",
        path: ROUTES.WARDROBES,
    },
    {
        label: "Beds",
        path: ROUTES.BEDS,
    },
    {
        label: "Sofas",
        path: ROUTES.SOFAS,
    },
    {
        label: "TV Panels",
        path: ROUTES.TV_PANELS,
    },
    {
        label: "Dining Furniture",
        path: ROUTES.DINING_FURNITURE,
    },
];

const navLinks = [
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

function MobileNav({ isOpen, setIsOpen }) {
    const [openKitchen, setOpenKitchen] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const pathname = usePathname();

    if (!isOpen) return null;

    return (
        <div className="lg:hidden border-t border-border bg-white">
            <div className="py-6">
                {/* Home */}

                <Link
                    href={ROUTES.HOME}
                    onClick={() => setIsOpen(false)}
                    className={`
              block
              px-6
              py-4
              uppercase
              tracking-[0.15em]
              text-sm
              ${pathname === ROUTES.HOME ? "text-dark" : "text-mid"}
            `}
                >
                    Home
                </Link>

                {/* Kitchen Accordion */}

                <button
                    onClick={() => setOpenKitchen(!openKitchen)}
                    className="
            w-full
            flex
            justify-between
            items-center
            px-6
            py-4
            uppercase
            tracking-[0.15em]
            text-sm
            text-mid
          "
                    aria-expanded={openKitchen}
                >
                    Solutions
                    <ChevronDown
                        size={18}
                        className={`
              transition-transform
              duration-300
              ${openKitchen ? "rotate-180" : ""}
            `}
                    />
                </button>

                <div
                    className={`
            overflow-hidden
            transition-all
            duration-300
            ${openKitchen ? "max-h-[500px]" : "max-h-0"}
          `}
                >
                    <div className="pl-10 pb-2">
                        {kitchenLinks.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                    block
                    py-3
                    text-sm
                    ${pathname === item.path ? "text-dark" : "text-muted"}
                  `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Services Accordion */}

                <button
                    onClick={() => setOpenServices(!openServices)}
                    className="
            w-full
            flex
            justify-between
            items-center
            px-6
            py-4
            uppercase
            tracking-[0.15em]
            text-sm
            text-mid
          "
                    aria-expanded={openServices}
                >
                    Services
                    <ChevronDown
                        size={18}
                        className={`
              transition-transform
              duration-300
              ${openServices ? "rotate-180" : ""}
            `}
                    />
                </button>

                <div
                    className={`
            overflow-hidden
            transition-all
            duration-300
            ${openServices ? "max-h-[500px]" : "max-h-0"}
          `}
                >
                    <div className="pl-10 pb-2">
                        {serviceLinks.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                    block
                    py-3
                    text-sm
                    ${pathname === item.path ? "text-dark" : "text-muted"}
                  `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Remaining Links */}

                {navLinks.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                block
                px-6
                py-4
                uppercase
                tracking-[0.15em]
                text-sm
                ${pathname === item.path ? "text-dark" : "text-mid"}
              `}
                    >
                        {item.label}
                    </Link>
                ))}

                {/* Phone */}

                <div className="mt-6 border-t border-border pt-6 px-6">
                    <a
                        href={`tel:${SITE.phone}`}
                        className="
              font-medium
              text-dark
            "
                    >
                        {SITE.phone}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
