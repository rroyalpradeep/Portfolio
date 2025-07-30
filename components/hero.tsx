"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ["DEVELOPER", "DESIGNER", "PROGRAMMER"]
  const period = 2000

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick()
    }, typingSpeed)

    return () => clearTimeout(ticker)
  }, [text, isDeleting, loopNum, typingSpeed])

  const tick = () => {
    const i = loopNum % roles.length
    const fullText = roles[i]

    setText((prev) => {
      const newText = isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)

      return newText
    })

    if (isDeleting) {
      setTypingSpeed(75)
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => {
        setIsDeleting(true)
      }, period)
      setTypingSpeed(150)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }
  }

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hey, I'm <span className="text-primary">Pradeep</span>
            </h1>

            <div className="text-3xl md:text-4xl lg:text-5xl font-bold h-16">
              I'm a <span className="text-primary">{text}</span>
              <span className="text-primary animate-blink">|</span>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl">
              As a <strong>Developer and Designer</strong> with over{" "}
              <strong>3+ years of extensive experience</strong>, I specialize in crafting innovative and visually
              appealing digital solutions. My expertise spans the full spectrum of web design, graphic design, and web
              development, enabling me to create dynamic, responsive websites and engaging user interfaces.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <SocialIcon href="https://github.com/rroyalpradeep" icon="github" />
              <SocialIcon href="https://www.linkedin.com/in/pradeepsoniofficial/" icon="linkedin" />
              <SocialIcon href="https://twitter.com/rroyalpradeep" icon="twitter" />
              <SocialIcon href="https://www.facebook.com/Pradeepsoniofficial/" icon="facebook" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a href="mailto:pradeepsoniofficial@gmail.com">
                <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg">Hire Me</Button>
              </a>
              <a href="https://rroyalpradeep.github.io/Resume/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                  View Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px] shadow-primary">
              <Image
                src="/Hero.jpg"
                alt="Pradeep Soni"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px] hover:shadow-primary"
    >
      <i className={`fa-brands fa-${icon} text-xl`}></i>
    </a>
  )
}

