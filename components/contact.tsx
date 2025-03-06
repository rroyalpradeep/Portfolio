"use client"
import React, { FormEvent } from "react";

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value,
      subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement)?.value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLInputElement)?.value,
  };
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        
        
        const data = await response.json();
        if (response.ok) {
          alert("Thank you for your message! I'll get back to you soon.")
          setFormData({ name: "", email: "", subject: "", message: "" })
          console.log(formData)
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message.");
    }
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              I'm interested in freelance opportunities, internships, and collaborations. However, if you have other
              requests or questions, don't hesitate to contact me.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<MapPin className="text-primary" size={24} />}
                title="Location"
                content="Greater Noida, India 201308"
              />

              <ContactItem
                icon={<Mail className="text-primary" size={24} />}
                title="Email"
                content="pradeepsoniofficial@gmail.com"
                link="mailto:pradeepsoniofficial@gmail.com"
              />

              <ContactItem
                icon={<Phone className="text-primary" size={24} />}
                title="Phone"
                content="+91-7890606669"
                link="tel:+917890606669"
              />
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <SocialLink href="https://github.com/rroyalpradeep" icon="github" />
                <SocialLink href="https://www.linkedin.com/in/pradeepsoniofficial/" icon="linkedin" />
                <SocialLink href="https://twitter.com/rroyalpradeep" icon="twitter" />
                <SocialLink href="https://www.facebook.com/Pradeepsoniofficial/" icon="facebook" />
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-black/40 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-black/60 border-primary/20 focus:border-primary text-slate-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-black/60 border-primary/20 focus:border-primary text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity"
                      required
                      className="bg-black/60 border-primary/20 focus:border-primary text-slate-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      required
                      className="min-h-[150px] bg-black/60 border-primary/20 focus:border-primary text-slate-100"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  title,
  content,
  link,
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        {link ? (
          <a href={link} className="text-gray-300 hover:text-primary transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-300">{content}</p>
        )}
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#37F06A]"
    >
      <i className={`fa-brands fa-${icon} text-xl `}></i>
    </a>
  )
}

