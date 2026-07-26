"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import MegaMenu from "./MegaMenu";

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

function DesktopNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const navItemRef = useRef(null);

    const closeMenu = () => setIsOpen(false);

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            closeMenu();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    };

    return (
        <ul className="hidden lg:flex items-center gap-10">
            {/* Home */}
            <li>
                <Link
                    href={ROUTES.HOME}
                    className={`
              text-sm
              uppercase
              tracking-[0.15em]
              transition-colors
              ${pathname === ROUTES.HOME
                            ? "text-[#1a1a18]"
                            : "text-[#4a4a46] hover:text-[#1a1a18]"
                        }
            `}
                >
                    Home
                </Link>
            </li>

            {/* Mega Menu */}
            <li
                className="relative"
                ref={navItemRef}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
            >
                <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls="solutions-menu"
                    aria-haspopup="menu"
                    onClick={() => setIsOpen((current) => !current)}
                    onFocus={() => setIsOpen(true)}
                    className="
            flex
            items-center
            gap-1
            text-sm
            uppercase
            tracking-[0.15em]
            text-[#4a4a46]
            hover:text-[#1a1a18]
            transition-colors
          "
                >
                    Solutions
                    <ChevronDown
                        size={16}
                        className={`
              transition-transform
              duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
                    />
                </button>

                <MegaMenu isOpen={isOpen} />
            </li>

            {/* Remaining Links */}
            {navLinks.map((link) => (
                <li key={link.path}>
                    <Link
                        href={link.path}
                        className={`
                text-sm
                uppercase
                tracking-[0.15em]
                transition-colors
                ${pathname === link.path
                                ? "text-[#1a1a18]"
                                : "text-[#4a4a46] hover:text-[#1a1a18]"
                            }
              `}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DesktopNav;
