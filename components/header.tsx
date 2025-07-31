"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Render a blurred overlay behind the mobile menu when open
  const MobileMenuBlurOverlay = () => (
    <div
      className={`fixed inset-0 z-30 pointer-events-none ${isMenuOpen ? 'backdrop-blur-md bg-background/60 dark:bg-black/60 transition-all duration-300' : 'backdrop-blur-0 bg-transparent transition-all duration-300'}`}
      aria-hidden="true"
    />
  );
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      // Close mobile menu on scroll if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);


  return (
    <>
      {/* Blurred overlay for mobile menu */}
      {isMenuOpen && <MobileMenuBlurOverlay />}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 dark:bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Image
                src="/Fox-Icon.png"
                alt="Fox Icon"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="text-2xl font-bold">
                <span className="text-foreground">Pradeep</span> <span className="text-primary">Soni</span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              {/* Theme Toggle Button */}
              <button
                className="ml-4 p-2 rounded-full hover:bg-primary/20 transition-colors focus:outline-none"
                aria-label="Toggle dark mode"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                suppressHydrationWarning
              >
                {mounted && (resolvedTheme === "dark" ? (
                  <Sun size={22} className="text-yellow-400" />
                ) : (
                  <Moon size={22} className="text-gray-800" />
                ))}
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-background/80 dark:bg-black/80 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-foreground text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={36} />
          </button>
          {/* Theme Toggle Button (Mobile) */}
          <button
            className="absolute top-6 left-6 p-2 rounded-full bg-background/80 dark:bg-white/10 hover:bg-primary/20 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            suppressHydrationWarning
          >
            {mounted && (resolvedTheme === "dark" ? (
              <Sun size={28} className="text-yellow-400" />
            ) : (
              <Moon size={28} className="text-gray-800" />
            ))}
          </button>
          <div className="flex flex-col items-center overflow-y-auto py-16 space-y-8 text-xl">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Education", href: "#education" },
              { label: "Contact", href: "#contact" },
            ].map((item, idx) => (
              <div
                key={item.href}
                className={`opacity-0 translate-y-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: isMenuOpen ? `${idx * 100 + 200}ms` : '0ms' }}
              >
                <MobileNavLink href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </MobileNavLink>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-foreground hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-foreground hover:text-primary transition-colors duration-300 text-2xl font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

