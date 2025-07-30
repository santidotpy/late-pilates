"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GlassButton() {
    return (
        <Button
            asChild
            size="lg"
            className="relative group overflow-hidden rounded-full px-8 py-6 text-lg border-0 transition-all duration-500 ease-out"
        >
            <Link
                href="#social"
                style={{ fontFamily: "Poppins", fontWeight: "normal" }}
                className="relative z-10 flex items-center justify-center"
            >
                {/* Ambient glow effect - Adjusted for #a47864 palette */}
                <div
                    className={`absolute inset-0 rounded-full transition-all duration-700 ease-out 
            group-hover:bg-gradient-to-r group-hover:from-orange-300/30 group-hover:via-amber-400/30 group-hover:to-rose-300/30 group-hover:blur-xl group-hover:scale-110
            bg-gradient-to-r from-orange-200/10 via-amber-300/10 to-rose-200/10 blur-lg scale-100` /* Estado por defecto */}
                />

                {/* Main glass background - Unchanged, as it's meant to be neutral */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:from-white/30 group-hover:via-white/20 group-hover:to-white/10 group-hover:border-white/30" />

                {/* Liquid ripple effect - Adjusted for #a47864 palette */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 via-amber-500/20 to-rose-400/20 animate-pulse" />
                    <div
                        className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent animate-ping"
                        style={{ animationDuration: "2s" }}
                    />
                </div>

                {/* Inner glow - Unchanged, as white glow works well with glass */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />

                {/* Shimmer effect - Unchanged, as white shimmer is part of the glass look */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                </div>

                {/* Text with enhanced readability - Adjusted for white text that transitions to white */}
                <span className="relative z-20 text-white font-medium tracking-wide drop-shadow-sm group-hover:text-white transition-colors duration-300">
                    Reservá tu clase
                </span>
            </Link>
        </Button>
    )
}
