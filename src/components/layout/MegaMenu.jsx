import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ROUTES } from "@/constants/routes";

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
    {
        label: "Peninsula Kitchen",
        path: ROUTES.PENINSULA_KITCHEN,
    },
];

const services = [
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
        path: ROUTES.DINING_FURNITURE

    }
];

function MegaMenu({ isOpen }) {
    return (
        <div
            id="solutions-menu"
            role="menu"
            aria-label="Solutions"
            aria-hidden={!isOpen}
            className={`
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      pt-5
      transition-all
      duration-300
      z-50
      ${isOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-3 pointer-events-none"
                }
    `}
        >
            <div className="w-[920px] bg-white border border-border shadow-2xl">
                <div className="h-[2px] bg-accent" />

                <div className="grid grid-cols-3">
                    {/* Left */}

                    <div className="p-8 border-r border-border flex flex-col">
                        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-accent">
                            Kitchen Layouts
                        </p>

                        <div className="space-y-4">
                            {kitchenLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="
          block
          text-mid
          transition-colors
          hover:text-accent
        "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href={ROUTES.MODULAR_KITCHEN}
                            className="
      mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-accent
      transition-all
      hover:gap-3
    "
                        >
                            View All Kitchens
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="p-8 border-r border-border">
                        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-accent">
                            Our Services
                        </p>

                        <div className="space-y-4">
                            {services.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.path}
                                    className="
          block
          text-mid
          transition-colors
          hover:text-accent
        "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href={ROUTES.CONTACT}
                            className="
      mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-accent
      transition-all
      hover:gap-3
    "
                        >
                            Get Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Right */}

                    <div className="p-8 flex flex-col">
                        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-accent">
                            Why Kohinoor
                        </p>

                        <div className="space-y-4 text-muted">
                            <p>✓ 18+ Years Experience</p>

                            <p>✓ Factory Manufactured</p>

                            <p>✓ Premium Materials</p>

                            <p>✓ German Hardware</p>

                            <p>✓ Expert Installation</p>

                            <p>✓ After-Sales Support</p>
                        </div>

                        <Link
                            href={ROUTES.ABOUT}
                            className="
              mt-8
      inline-flex
      items-center
      gap-2
      text-sm
      uppercase
      tracking-[0.15em]
      text-accent
      transition-all
      hover:gap-3
    "
                        >
                            About Us
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MegaMenu;
