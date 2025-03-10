"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "MyBlog",
      description:
        "A dynamic blogging web application that allows users to read, write, and manage technology-focused blogs efficiently. Leveraged modern web technologies to ensure seamless functionality and an intuitive user experience.",
      image: "MyBlog.png",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "RESTful APIs"],
      github: "https://github.com/rroyalpradeep/MyBlog",
      demo: "#",
    },
    {
      title: "Amazon Clone",
      description:
        "A frontend clone of Amazon.com's home page, replicating the UI and basic functionality using HTML, CSS, and JavaScript.",
      image: "Amazon-clone.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rroyalpradeep/amazon-clone",
      demo: "https://rroyalpradeep.github.io/Amazon-Clone/",
    },
    {
      title: "Project Clock",
      description:
        "Designed and developed a responsive web application that dynamically displays the current time in both an elegant analog clock and a digital format. Ensured seamless real-time updates with smooth transitions.",
      image: "Clock.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rroyalpradeep/Clock",
      demo: "https://rroyalpradeep.github.io/Clock/",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "Developed an interactive web application where users can play the classic Rock, Paper, Scissors game against the computer with a real-time scoring system and both light and dark mode options.",
      image: "RPS.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/rroyalpradeep/Rock-Paper-Scissor",
      demo: "https://rroyalpradeep.github.io/Rock-Paper-Scissor/",
    },
    {
      title: "Computer Assistant",
      description:
        "A dynamic web application for certificate distribution, enabling users to generate, verify, and manage certificates efficiently.",
      image: "jarvis.webp",
      tags: ["Python", "speech_recognition", "NLP", "webbrowser", "smtplib"],
      github: "https://github.com/rroyalpradeep",
      demo: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing projects, skills, and professional achievements with a modern design and smooth user experience.",
      image: "Portfolio.png",
      tags: ["React", "Tailwind CSS", "JavaScript", "Nodemailer", ],
      github: "https://github.com/rroyalpradeep/Portfolio",
      demo: "https://rroyalpradeep.github.io/Portfolio/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
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
    <Card className="bg-black/40 border-primary/20 hover:border-primary transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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

