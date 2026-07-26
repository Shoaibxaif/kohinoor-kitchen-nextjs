"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";
import logo from "@/assets/images/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8e4dc]">
            <Container>
                <nav className="h-20 flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href={ROUTES.HOME} className="flex items-center">
                        <div className="relative h-14 w-[160px] sm:w-[180px]">
                            <Image
                                src={logo}
                                alt="Kohinoor Modular Kitchen"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <DesktopNav />

                    {/* Right Side */}
                    <div className="flex items-center gap-5">
                        {/* Desktop Phone */}
                        <a
                            href={`tel:${SITE.phone}`}
                            className="hidden lg:block text-sm tracking-[0.08em] text-[#1a1a18] font-medium"
                        >
                            {SITE.phone}
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-[#1a1a18]"
                            aria-label="Toggle Navigation"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Navigation */}
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
}

export default Navbar;
