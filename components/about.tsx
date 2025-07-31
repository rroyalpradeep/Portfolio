"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, MapPin, Phone, Calendar, Flag, Heart, Book } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Computer Science Engineering Student & Web Developer</h3>

            <p className="text-muted-foreground">
              I'm a passionate Computer Science Engineering student specializing in AI & ML at Lloyd Institute of
              Engineering And Technology. With a strong foundation in web development and design, I create innovative
              digital solutions that combine technical expertise with creative design thinking.
            </p>

            <p className="text-muted-foreground">
              My goal is to leverage my skills in programming, problem-solving, and design to build impactful
              applications that provide exceptional user experiences. I'm constantly learning and exploring new
              technologies to stay at the forefront of the rapidly evolving tech landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem icon={<User size={18} />} label="Name" value="Pradeep Soni" />
              <InfoItem icon={<Mail size={18} />} label="Email" value="pradeepsoniofficial@gmail.com" />
              <InfoItem icon={<Phone size={18} />} label="Phone" value="+91-7890606669" />
              <InfoItem icon={<MapPin size={18} />} label="Location" value="Greater Noida, India" />
              <InfoItem icon={<Calendar size={18} />} label="Birthday" value="July 15, 2003" />
              <InfoItem icon={<Flag size={18} />} label="Nationality" value="Indian" />
            </div>

            <div className="pt-4">
              <a href="https://rroyalpradeep.github.io/Resume/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">Download CV</Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science and Engineering (AI & ML)</p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Interests</h3>
                <p className="text-muted-foreground">Travel, Gaming, Music, Reading</p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-foreground">Professional Summary</h3>
                <p className="text-muted-foreground">
                  Final year B.Tech CSE student at Lloyd Institute of Engineering and Technology with hands-on experience 
                  in full-stack development, combining frontend skills (React.js) with backend expertise (MERN, Django). 
                  Strong in C++, DSA, and OOP, with 90%+ code accuracy and a 50% boost in development efficiency. 
                  Passionate about building scalable web applications and integrating AI. Excellent communication, 
                  organizational, and interpersonal abilities ensuring reliable support and promoting effective teamwork.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary">{icon}</div>
      <div>
        <span className="text-muted-foreground text-sm">{label}: </span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  )
}

