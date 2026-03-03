"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "MultiRoleShop - E-Commerce Platform",
      description:
        "A Django-based e-commerce platform with multi-role support (Users, Vendors, Admins) featuring OTP authentication, product approval workflows, shopping cart, Razorpay secure online payments, role-based dashboards, secure transactions, product search/filtering, and analytics.",
      image: "/Portfolio.png",
      tags: ["Django", "SQLite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Razorpay API", "SMTP", "Pillow"],
      github: "https://github.com/rroyalpradeep/MultiRoleShop",
      demo: "#",
    },
    {
      title: "Smart Home Automation System",
      description:
        "A Wi-Fi-based smart home automation system that allows users to remotely control electrical appliances (bulbs, fans, motors) via an Android application. The system integrates ESP8266 NodeMCU with a Django REST API backend and Firebase for real-time device state synchronization.",
      image: "/smart_home.png",
      tags: ["Jetpack Compose (Kotlin)", "Django REST APIs", "Firebase", "Arduino IDE", "ESP8266 NodeMCU", "Relay Module", "HTTP Client"],
      github: "https://github.com/rroyalpradeep/Smart_Home_Automation_System/",
      demo: "#",
    },
    {
      title: "MyBlog - Technology Blog",
      description:
        "A responsive blogging platform with user authentication and CRUD operations for blog posts. Features RESTful API endpoints for seamless data retrieval and manipulation, with MySQL for efficient data storage and retrieval.",
      image: "/MyBlog.png",
      tags: ["EJS", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs"],
      github: "https://github.com/rroyalpradeep/MyBlog",
      demo: "#",
    },
    {
      title: "AI-Powered National Health Portal",
      description:
        "A unified digital health portal bringing hospitals, doctors, diagnostic labs, and patients together on a single platform. Contributed as Backend Engineer handling data integration and real-time communication features for 10+ healthcare providers.",
      image: "/HealthPortal.png",
      tags: ["Next.js", "Firebase", "ChatBot", "Backend API", "Healthcare"],
      github: "https://github.com/SakshiThapliyal19/hashhacks",
      demo: "#",
    },
    {
      title: "J.A.R.V.I.S. - Python AI Assistant",
      description:
        "A Python-based AI computer assistant that can perform various tasks through voice commands, including web browsing, sending emails, and providing information using speech recognition and NLP.",
      image: "/jarvis.png",
      tags: ["Python", "Speech Recognition", "NLP", "Webbrowser", "SMTPLib"],
      github: "https://github.com/rroyalpradeep/jarvis",
      demo: "#",
    },
    {
      title: "Amazon Clone",
      description:
        "A frontend clone of Amazon.com's home page, replicating the UI and basic functionality using HTML, CSS, and JavaScript with responsive design principles.",
      image: "/AmazonClone.png",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/rroyalpradeep/amazon-clone",
      demo: "https://rroyalpradeep.github.io/Amazon-Clone/",
    },
    {
      title: "Project Clock",
      description:
        "A responsive web application that dynamically displays the current time in both elegant analog and digital formats with seamless real-time updates and smooth transitions.",
      image: "/Clock.png",
      tags: ["HTML", "CSS", "JavaScript", "Real-time Updates"],
      github: "https://github.com/rroyalpradeep/Clock",
      demo: "https://rroyalpradeep.github.io/Clock/",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "An interactive web application for playing the classic Rock, Paper, Scissors game against the computer with a real-time scoring system and both light and dark mode options.",
      image: "/RPS.png",
      tags: ["HTML", "CSS", "JavaScript", "Game Logic", "Dark Mode"],
      github: "https://github.com/rroyalpradeep/Rock-Paper-Scissor",
      demo: "https://rroyalpradeep.github.io/Rock-Paper-Scissor/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">My</span> <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in web development, 
            mobile app development, and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/rroyalpradeep" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/80 text-white">View All Projects</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
