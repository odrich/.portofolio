"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, X } from "lucide-react"
import { Contact } from "./contact"


function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Contact Section */}
        <div className="bg-[#252C34] rounded-xl">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Keisha Audrey 
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            An AI and Data Science enthusiast who loves exploring and learning new things.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">

          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Get In Touch
          </Button>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com/odrich"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/keisha-audrey-chayadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:keishaudreyy@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
