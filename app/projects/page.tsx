"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const projectCategories = {
  "UI/UX": [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX design principles.",
      detailedDescription: `This comprehensive e-commerce platform showcases advanced UI/UX design principles with a focus on user experience and conversion optimization. The design process involved extensive user research, wireframing, and prototyping to create an intuitive shopping experience.

Design highlights:
• User-centered design approach with extensive usability testing
• Modern, clean interface with consistent design system
• Responsive design optimized for all devices and screen sizes
• Accessibility-first approach following WCAG guidelines
• Micro-interactions and animations for enhanced user engagement
• Conversion-optimized checkout flow with minimal friction
• Advanced filtering and search functionality with intuitive UI
• Visual hierarchy and typography that guides user attention

The design system includes a comprehensive component library, color palette, and typography scale that ensures consistency across all touchpoints.`,
      image: "/modern-ecommerce-interface.png",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Mobile Banking App",
      description: "Intuitive mobile banking interface with focus on security and usability.",
      detailedDescription: `A comprehensive mobile banking application design that prioritizes security, usability, and trust. The project involved extensive research into financial app design patterns and user behavior analysis.

Key design features:
• Biometric authentication integration with smooth onboarding
• Dashboard design with clear financial overview and insights
• Transaction history with advanced filtering and categorization
• Bill payment flow with confirmation and receipt systems
• Investment portfolio visualization with interactive charts
• Security-first design with clear privacy indicators
• Dark mode support with careful attention to readability
• Gesture-based navigation for improved mobile experience

The design process included user journey mapping, persona development, and iterative prototyping based on user feedback and usability testing sessions.`,
      image: "/mobile-banking-ui.png",
      technologies: ["Sketch", "Figma", "Principle", "Zeplin"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "SaaS Dashboard",
      description: "Complex data visualization dashboard with clean, modern interface.",
      detailedDescription: `An enterprise-level SaaS dashboard design that transforms complex data into actionable insights through thoughtful information architecture and visual design.

Design approach:
• Information hierarchy optimization for complex datasets
• Custom data visualization components and chart libraries
• Responsive grid system that adapts to different screen sizes
• Advanced filtering and search capabilities with faceted navigation
• Role-based interface customization for different user types
• Progressive disclosure techniques to manage information density
• Consistent iconography and visual language throughout
• Performance-optimized design with lazy loading considerations

The project required close collaboration with data analysts and backend developers to ensure the design accurately represents the underlying data structure while maintaining usability.`,
      image: "/saas-dashboard-ui.png",
      technologies: ["Figma", "Adobe Illustrator", "Framer", "Miro"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
  ],
  Development: [
    {
      title: "Task Management App",
      description: "Full-stack collaborative task management with real-time features.",
      detailedDescription: `A sophisticated task management application built with modern web technologies, featuring real-time collaboration and advanced project management capabilities.

Technical implementation:
• React frontend with custom hooks for state management
• Node.js backend with Express.js and RESTful API design
• Real-time updates using Socket.io for instant collaboration
• MongoDB database with optimized queries and indexing
• JWT-based authentication with refresh token rotation
• File upload system with AWS S3 integration
• Advanced caching strategies with Redis implementation
• Comprehensive testing suite with Jest and Cypress
• CI/CD pipeline with automated deployment to AWS

The application handles complex state management for multiple concurrent users, implements optimistic updates for better UX, and includes comprehensive error handling and logging systems.`,
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Weather Dashboard",
      description: "Advanced weather application with data visualization and forecasting.",
      detailedDescription: `A comprehensive weather dashboard that aggregates data from multiple APIs to provide detailed meteorological information with interactive visualizations.

Development features:
• Vue.js 3 with Composition API for reactive user interfaces
• Integration with multiple weather APIs for comprehensive coverage
• Custom chart components built with D3.js and Chart.js
• Geolocation services with fallback location detection
• Progressive Web App (PWA) with offline functionality
• Service worker implementation for background data updates
• Responsive design with mobile-first approach
• Performance optimization with lazy loading and code splitting
• Comprehensive error handling for API failures and network issues

The application includes advanced features like weather alerts, historical data analysis, and customizable dashboard widgets that users can arrange according to their preferences.`,
      image: "/preview/project4.png",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat platform with advanced messaging features.",
      detailedDescription: `A full-featured real-time chat application designed for scalability and performance, supporting thousands of concurrent users with advanced messaging capabilities.

Technical architecture:
• React frontend with TypeScript for type safety
• Node.js backend with microservices architecture
• WebSocket connections with Socket.io clustering
• PostgreSQL database with message encryption at rest
• Redis for session management and message caching
• File sharing with drag-and-drop functionality
• End-to-end encryption for private conversations
• Message search with full-text indexing
• Push notifications with service worker integration
• Docker containerization with Kubernetes orchestration

The application implements advanced features like message reactions, thread conversations, user presence indicators, and administrative controls for moderation and user management.`,
      image: "/chat-app-interface.png",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
    },
  ],
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof projectCategories>("UI/UX")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-primary-foreground/80">
            Explore my work across different categories and technologies
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-4 justify-center">
            {Object.keys(projectCategories).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category as keyof typeof projectCategories)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">{selectedCategory} Projects</h2>
            <p className="text-muted-foreground">
              {selectedCategory === "UI/UX"
                ? "Design projects focusing on user experience and interface design"
                : "Full-stack development projects with modern technologies"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories[selectedCategory].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" onClick={() => window.open(project.liveUrl, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, "_blank")}>
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setSelectedProject(project)}>
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
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
                {selectedProject.technologies.map((tech: string, techIndex: number) => (
                  <span key={techIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose prose-sm max-w-none mb-6">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedProject.detailedDescription}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" onClick={() => window.open(selectedProject.liveUrl, "_blank")}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Demo
                </Button>
                <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")}>
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
