"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder, Info } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Stuggy App - Your study buddy",
    description:
      "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product management, and secure payments.",
    detailedDescription: `This comprehensive e-commerce platform was built from the ground up using modern web technologies. The project features a complete user authentication system with secure login/logout functionality, comprehensive product catalog management, and seamless payment processing through Stripe integration.

Key features include:
• User registration and authentication with JWT tokens
• Product catalog with search and filtering capabilities
• Shopping cart functionality with persistent storage
• Secure payment processing with Stripe
• Admin dashboard for product and order management
• Responsive design optimized for all devices
• Real-time inventory tracking
• Email notifications for order confirmations

The backend is built with Node.js and Express, utilizing PostgreSQL for data persistence. The frontend leverages Next.js for server-side rendering and optimal performance, with TypeScript ensuring type safety throughout the application.`,
    image: "/stuggy.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    detailedDescription: `A sophisticated task management application designed for team collaboration and productivity enhancement. This project demonstrates advanced real-time functionality and intuitive user interface design.

Core functionalities:
• Real-time collaboration with Socket.io integration
• Drag-and-drop task organization with smooth animations
• Team workspace management with role-based permissions
• Advanced filtering and sorting capabilities
• Due date tracking with automated reminders
• File attachment support for tasks
• Activity timeline and audit logs
• Mobile-responsive design with offline capability

The application uses React for the frontend with custom hooks for state management, Node.js with Express for the backend API, and MongoDB for flexible data storage. Real-time updates are handled through WebSocket connections, ensuring all team members see changes instantly.`,
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "Renfit",
    description:
      "A responsive weather dashboard that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    detailedDescription: `An advanced weather dashboard application that provides comprehensive meteorological data through an intuitive and visually appealing interface. This project showcases data visualization skills and API integration expertise.

Features implemented:
• Current weather conditions with hourly and 7-day forecasts
• Interactive weather maps with radar and satellite imagery
• Location-based weather alerts and severe weather warnings
• Historical weather data analysis with trend charts
• Customizable dashboard widgets and layouts
• Geolocation support for automatic location detection
• Weather data export functionality
• Dark/light theme support with smooth transitions

Built with Vue.js for reactive user interfaces, Chart.js for data visualization, and integrated with multiple weather APIs for comprehensive data coverage. The application is fully responsive and optimized for performance across all devices.`,
    image: "/preview/project4.png",
    technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 4,
    title: "Urgensia",
    description:
      "A personal portfolio showcasing projects, skills, and experience with smooth animations and a minimalist design.",
    detailedDescription: `This project highlights modern frontend development with a focus on responsive layouts, accessibility, and design aesthetics. It includes sections for projects, blog posts, and contact integration with form handling.`,
    image: "/preview/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 5,
    title: "Saferime",
    description:
      "A real-time chat application with private messaging, typing indicators, and read receipts.",
    detailedDescription: `This chat app was built using WebSocket technology for instant communication. It supports group chats, emoji reactions, media sharing, and persistent chat history stored in the cloud.`,
    image: "/preview/chat-app.png",
    technologies: ["React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 6,
    title: "Nukaran",
    description:
      "An app to track income, expenses, and budgets with data visualization and export options.",
    detailedDescription: `The finance tracker allows users to log transactions and visualize financial health through charts and summaries. It supports CSV export, recurring transactions, and budgeting goals.`,
    image: "/preview/finance.png",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },
  {
    id: 7,
    title: "VKellogs",
    description:
      "An assignment from Human Computer Interaction class, where there's some requirements such as the brand name, concept, and components. But the layout and design are up to us",
    detailedDescription: `An assignment from Human Computer Interaction class, where there's some requirements such as the brand name, concept, and components. But the layout and design are up to us.

    This is the project from the 2nd semesterof my college. The project is to create a website for a fictional company called VKellogs, which is a cereal company that sells healthy and delicious cereals. The website is designed to be user-friendly and easy to navigate, with a focus on the products and their benefits.

    From this project, I learned a lot about creating effective UI/UX designs. I also experienced the challenges of designing a website from scratch, and these challenges became valuable lessons to improve my skills for the future.`,
    image: "/preview/fitness.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
  },

]

const truncateText = (text: string, maxLength = 120) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + "... "
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [centerIndex, setCenterIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const children = Array.from(container.children)
      let closestIndex = 0
      let closestDistance = Infinity

      children.forEach((child, index) => {
        const rect = (child as HTMLElement).getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        const childCenter = rect.left + rect.width / 2
        const containerCenter = containerRect.left + containerRect.width / 2
        const distance = Math.abs(childCenter - containerCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setCenterIndex(closestIndex)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // run on mount

    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden [overflow-y:hidden]" // ✅ disable vertical scrollbar
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      <style jsx global>{`
        /* ✅ Custom thin scrollbar */
        #projects ::-webkit-scrollbar {
          height: 6px;
        }
        #projects ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        #projects ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }
      `}</style>

      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/85"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        {/* 🔥 Project counter */}
        <div className="text-center mb-6">
          <span className="text-sm font-medium px-4 py-1 bg-accent/10 text-accent rounded-full shadow-sm">
            {centerIndex + 1} of {projects.length} projects
          </span>
        </div>

        {/* 🔥 Card carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6" 
            style={{
              paddingLeft: "calc(50% - 125px)", // restore centering for first card
              paddingRight: "calc(50% - 125px)", // restore centering for last card
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="snap-center flex-shrink-0 transition-all duration-300 ease-in-out overflow-visible"
                style={{
                  width: "250px",
                  transform: centerIndex === index ? "scale(1.0)" : "scale(0.75)",
                  opacity: centerIndex === index ? 1 : 0.6,
                }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/20 flex flex-col overflow-hidden h-[340px]">
                  {/* IMAGE */}
                  <div className="w-full flex items-center justify-center h-[160px] bg-white">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed flex-1">
                      {truncateText(project.description, 80)}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Folder className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </Button>
                </div>

                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose prose-sm max-w-none mb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedProject.detailedDescription}
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  >
                    <Folder className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
