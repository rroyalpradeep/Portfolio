import type React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="Fox-Icon.png"
              alt="Fox Icon"
              width={60}
              height={60}
              className="w-12 h-12"
            />
            <div className="text-2xl font-bold">
              Pradeep <span className="text-white">Soni</span>
            </div>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 mb-8">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#education">Education</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </ul>

          <ul className="flex justify-center gap-6 mb-8">
            <SocialIcon href="https://github.com/rroyalpradeep" icon="github" />
            <SocialIcon href="https://www.linkedin.com/in/pradeepsoniofficial/" icon="linkedin" />
            <SocialIcon href="https://twitter.com/rroyalpradeep" icon="twitter" />
            <SocialIcon href="https://www.facebook.com/Pradeepsoniofficial/" icon="facebook" />
            <SocialIcon href="https://www.instagram.com/" icon="instagram" />
          </ul>

          <p className="text-center text-white/80">
            &copy; {new Date().getFullYear()} <strong>rroyalpradeep</strong> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/75 hover:text-white transition-colors duration-300">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 hover:text-white transition-colors duration-300 text-2xl  "
      >
        <i className={`fa-brands fa-${icon} transition duration-300 hover:drop-shadow-[0_0_5px_white] `}></i>
      </a>
    </li>
  )
}

