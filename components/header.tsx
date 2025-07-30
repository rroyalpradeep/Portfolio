"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Image
              src="Fox-Icon.png"
              alt="Fox Icon"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="text-2xl font-bold">
              Pradeep <span className="text-primary">Soni</span>
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
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </MobileNavLink>
          <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>
            Education
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-white hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-primary transition-colors duration-300 text-2xl font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

