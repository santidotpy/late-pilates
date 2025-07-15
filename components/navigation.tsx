"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/classes", label: "Classes" },
    { href: "/schedule", label: "Schedule" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full border-b border-mocha-200 z-50 transition-all duration-300 ${
        isScrolled ? "bg-mocha-50/98 backdrop-blur-md shadow-sm" : "bg-mocha-50/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-mocha-800" onClick={closeMobileMenu}>
              Late Pilates
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-mocha-700 border-b-2 border-peach-400"
                      : "text-mocha-600 hover:text-mocha-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-peach-300 hover:bg-peach-400 text-mocha-800 border-0">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="relative z-50 text-mocha-700 hover:text-mocha-800 hover:bg-mocha-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-4 pt-2 pb-6 space-y-1 border-t border-mocha-200 shadow-lg transition-all duration-300 ${
            isScrolled ? "bg-mocha-50/98 backdrop-blur-md" : "bg-mocha-50 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                isActive(link.href)
                  ? "text-mocha-700 bg-peach-100"
                  : "text-mocha-600 hover:text-mocha-800 hover:bg-mocha-100"
              }`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Button
              className="w-full bg-peach-300 hover:bg-peach-400 text-mocha-800 border-0"
              onClick={closeMobileMenu}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-mocha-900/20 backdrop-blur-sm md:hidden z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
