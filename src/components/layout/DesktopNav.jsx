"use client";

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
            <li className="relative group">
                <button
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
                        className="
              transition-transform
              duration-300
              group-hover:rotate-180
            "
                    />
                </button>

                <MegaMenu />
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
