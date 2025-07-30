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

// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"

// // Definición del tipo Theme
// export type Theme = {
//   name: string
//   background: string
//   glassGradient: {
//     base: string
//     hover: string
//   }
//   border: {
//     base: string
//     hover: string
//   }
//   ambientGlow: {
//     base: string
//     hover: string
//   }
//   rippleColors: string
//   innerGlow: string
//   shimmer: string
//   textColor: {
//     base: string
//     hover: string
//   }
//   containerBg: string
// }

// export const appleTheme: Theme = {
//   name: "Apple",
//   background: "bg-gradient-to-br from-gray-100 to-gray-200", // No se usa directamente en el botón, pero se mantiene para coherencia del tipo
//   glassGradient: {
//     base: "from-white/25 via-white/15 to-white/8",
//     hover: "from-white/35 via-white/25 to-white/15",
//   },
//   border: {
//     base: "border-gray-200/30",
//     hover: "border-gray-200/50",
//   },
//   ambientGlow: {
//     base: "from-blue-500/12 via-gray-400/12 to-gray-500/12",
//     hover: "from-blue-500/35 via-gray-400/35 to-gray-500/35",
//   },
//   rippleColors: "from-blue-500/22 via-gray-400/22 to-gray-500/22",
//   innerGlow: "from-white/12 via-transparent to-white/6",
//   shimmer: "via-white/25",
//   textColor: {
//     base: "text-gray-800",
//     hover: "text-gray-900",
//   },
//   containerBg: "bg-gradient-to-br from-gray-100 to-gray-200", // No se usa directamente en el botón, pero se mantiene
// }

// interface AppleLiquidGlassButtonProps {
//   href?: string
//   children: React.ReactNode
// }

// export default function GlassButton({
//   href = "#social",
//   children,
// }: AppleLiquidGlassButtonProps) {
//   // Aquí usamos el estado para el isHovered, ya que la lógica original de tu LiquidGlassButton lo usa
//   // para el "Ambient glow effect" que está fuera del `group-hover` del Link.
//   const [isHovered, setIsHovered] = useState(false)

//   const theme = appleTheme // Usamos directamente el tema de Apple

//   return (
//     <div className="relative">
//       {/* Ambient glow effect */}
//       <div
//         className={`absolute inset-0 rounded-full transition-all duration-700 ease-out blur-xl ${
//           isHovered
//             ? `bg-gradient-to-r ${theme.ambientGlow.hover} scale-110`
//             : `bg-gradient-to-r ${theme.ambientGlow.base} scale-100`
//         }`}
//       />

//       <Button
//         asChild
//         size="lg"
//         className="relative group overflow-hidden rounded-full px-8 py-6 text-lg border-0 transition-all duration-500 ease-out"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <Link
//           href={href}
//           style={{ fontFamily: "Poppins", fontWeight: "normal" }}
//           className="relative z-10 flex items-center justify-center"
//         >
//           {/* Main glass background */}
//           <div
//             className={`absolute inset-0 rounded-full bg-gradient-to-br ${theme.glassGradient.base} backdrop-blur-md border ${theme.border.base} transition-all duration-500 group-hover:bg-gradient-to-br group-hover:${theme.glassGradient.hover} group-hover:${theme.border.hover}`}
//           />

//           {/* Liquid ripple effect */}
//           <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//             <div
//               className={`absolute inset-0 rounded-full bg-gradient-to-r ${theme.rippleColors} animate-pulse`}
//             />
//             <div
//               className={`absolute inset-2 rounded-full bg-gradient-to-br ${theme.innerGlow} animate-ping`}
//               style={{ animationDuration: "2s" }}
//             />
//           </div>

//           {/* Inner glow */}
//           <div
//             className={`absolute inset-1 rounded-full bg-gradient-to-br ${theme.innerGlow} opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out`}
//           />

//           {/* Shimmer effect */}
//           <div className="absolute inset-0 rounded-full overflow-hidden">
//             <div
//               className={`absolute -inset-10 bg-gradient-to-r from-transparent ${theme.shimmer} to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out`}
//             />
//           </div>

//           {/* Text with enhanced readability */}
//           <span
//             className={`relative z-20 font-medium tracking-wide drop-shadow-sm transition-colors duration-300 ${theme.textColor.base} group-hover:${theme.textColor.hover}`}
//           >
//             {children}
//           </span>
//         </Link>
//       </Button>
//     </div>
//   )
// }