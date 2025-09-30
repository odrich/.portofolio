"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/myzneavw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-[#252C34] transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <div className="w-20 h-1 mx-auto mb-8 bg-[#EC9084] rounded-sm" />

          <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-[#D7D4D3]">
            Always open to new opportunities and collaborations. Feel free to reach out through the message box below, I’d be happy to connect!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#549C9F]">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
              <p className="text-sm text-gray-600 dark:text-[#D7D4D3]">
                keishaudreyy@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#EC9084]">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
              <p className="text-sm text-gray-600 dark:text-[#D7D4D3]">+62 85893606928</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#A48475]">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
              <p className="text-sm text-gray-600 dark:text-[#D7D4D3]">Indonesia</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot untuk spam */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#549C9F] text-sm
                           bg-gray-100 dark:bg-[#111827] text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#549C9F] text-sm
                           bg-gray-100 dark:bg-[#111827] text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>

            <div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#549C9F] text-sm
                           bg-gray-100 dark:bg-[#111827] text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#549C9F] resize-none text-sm
                           bg-gray-100 dark:bg-[#111827] text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 text-white font-medium rounded-lg transition-all duration-200 hover:opacity-90 bg-[#549C9F] flex items-center justify-center"
            >
              <Send className="h-4 w-4 mr-2 text-current" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-green-500 text-sm mt-2">✅ Your message has been sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-2">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
