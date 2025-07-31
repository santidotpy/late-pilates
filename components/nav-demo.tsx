"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
    const navItems = [
        {
            name: "Sobre Nosotros",
            link: "#about",
        },
        {
            name: "Ubicación",
            link: "#location",
        },
        {
            name: "Galería",
            link: "#gallery",
        },
        {
            name: "Contacto",
            link: "#social",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full sticky top-0 z-50">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    {/* <NavbarLogo /> */}
                    <div className="flex items-center justify-between">
                        <a href="#hero" className="text-3xl font-bold text-[#a47864] z-10" style={{ fontFamily: "Waterlily" }}>
                            Late
                        </a>
                    </div>
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">

                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        {/* <NavbarLogo /> */}
                        <div className="flex items-center justify-between">
                            <a href="#hero" className="text-2xl font-bold text-[#a47864]" style={{ fontFamily: "Waterlily" }}>
                                Late
                            </a>
                        </div>
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
