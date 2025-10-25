"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder, Info } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import{flowerSnap} from "@/public/flowerSnap.png"

const projects = [
  {
    id: 1,
    title: "Stuggy App - Your study buddy",
    description:
      "A mobile study planner app built with React Native using Expo Go and GitHub for collaboration. Developed as a group project, this app is designed to help students improve their study habits and academic performance. ",
    detailedDescription: `A mobile study planner app built with React Native using Expo Go and GitHub for collaboration. Developed as a group project, this app is designed to help students improve their study habits and academic performance.

Key features:
• User Login and registration
• Calender for scheduling study sessions, tracking assignments, or marking an event
• Progress graphs to visualize scores and track performance
• Study forum for collaborative discussions and peer support
• Smart reminders to stay consistent with study plans
• Pomodoro timer to encourage focus and productivity`,

    image: "/stuggy.png",
    technologies: ["React Native", "Expo Go", "Github", "Figma"],
    //liveUrl: "https://example.com",
    githubUrl: "https://github.com/Ripupz/stuggy_app",
  },
  {
    id: 2,
    title: "FlowerSnap",
    description:
      "A Machine Learning model that identifies different types of flowers and provides their meanings. By uploading or capturing a photo, the model processes the image, detects the flower type, and displays information about its symbolism. This project showcases the application of image classification in computer vision. ",
    detailedDescription: `A Machine Learning model that identifies different types of flowers and provides their meanings. By uploading or capturing a photo, the model processes the image, detects the flower type, and displays information about its symbolism. This project showcases the application of image classification in computer vision.

Key features:
• Simple UI 
• Provide the name and the meaning of a flower
• Applied iamge classification to the real world context.`,

    image: "/flowerSnap.png",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/janicezzzzzz/Machine_Learning",
  },
  {
    id: 3,
    title: "Renfit",
    description:
      "Most of people need special outfits for events, but buying them can feel wasteful since they are often worn only once. Renting is a smarter choice, but the process is not always easy because people have to look through different places one by one.",
    detailedDescription: `Most of people need special outfits for events, but buying them can feel wasteful since they are often worn only once. Renting is a smarter choice, but the process is not always easy because people have to look through different places one by one.

Renfit is a UI/UX project created to solve this problem. This website also has a Mix & Match feature, which lets users try out different combinations of dresses, shoes, and accessories before choosing what to rent.

Key features:
• Rental catalog with clear product presentation
• Mix & Match tool for outfit styling
• AI that helps to mix and match
• Simple yet minimalist web design`,

    image: "/renfit.png",
    technologies: ["Figma", "HTML", "CSS"],
    githubUrl: "https://github.com/lenmonade/Renfit-Groups",
  },
  {
    id: 4,
    title: "Urgensia",
    description:
      "A UI/UX project where we built the interface of a mobile application  to help people in critical situations such as earthquakes, natural disasters, or medical emergencies. The app provides an SOS button that instantly connects users with emergency services such as the police, ambulance, or fire department.",
    detailedDescription: `A UI/UX project where we built the interface of a mobile application  to help people in critical situations such as earthquakes, natural disasters, or medical emergencies. The app provides an SOS button that instantly connects users with emergency services such as the police, ambulance, or fire department. 
    In addition, the app includes educational resources on first aid, and allows users to submit reports to government services, such as healthcare or disaster response. With location-based assistance, the app ensures that people can quickly ask for help when they are in danger or unsafe conditions.

    Key features:
    • There are 4 main emergency buttons on the home screen.
    • User can make a report to government services.
    • User can keep track of their reports.
    • Educational resources on first aid for various condition. 

    `,
    image: "/urgensia.png",
    technologies: ["Figma"],
    githubUrl: "https://www.figma.com/design/aNrrHLvXLoteMa1C3Gm3TV/UXVIDIA?node-id=0-1&t=YpZORdMdUyDbO74p-1",
  },
  {
    id: 5,
    title: "Saferime",
    description:
      "A UI/UX project of a safety app, where the app is helping users to stay aware and protected in their daily lives. The app features a map-based system where users can see which areas are reported as unsafe, such as places with frequent thefts, harassment, or catcalling. This allows users to be more cautious or even avoid risky routes.",
    detailedDescription: `A UI/UX project of a safety app, where the app is helping users to stay aware and protected in their daily lives. The app features a map-based system where users can see which areas are reported as unsafe, such as places with frequent thefts, harassment, or catcalling. This allows users to be more cautious or even avoid risky routes.
   Not only map, the app provides self defense education, a companion mode that simulates a call to make users feel safer, and detailed incident reporting where users can specify different types of safety concerns. It also includes tips and tricks for personal safety, making it a practical tool for everyday use.

    Key features:
    • Map-based safety alerts
    • Self-defense education resources
    • Safety tips and tricks
    • AI Companion model 
    • Call a friend
    `,
    image: "/saferime.png",
    technologies: ["Figma"],
    githubUrl: "https://www.figma.com/design/2pZjx113fVy4wmYNJ6EfG5/AplikasiSaferime?node-id=0-1&t=LMh0438s1ATKekJM-1",
  },
  {
    id: 6,
    title: "Nukaran",
    description:
      "A mobile application designed for exchanging secondhand items that are still in good condition. For example, users can trade books, novels, clothes, or other items they no longer use. The app provides a forum where people can post what they’re looking for or what they want to offer, making it easy to find exchange partners.",
    detailedDescription: `A mobile application designed for exchanging secondhand items that are still in good condition. For example, users can trade books, novels, clothes, or other items they no longer use. The app provides a forum where people can post what they’re looking for or what they want to offer, making it easy to find exchange partners.
    Users can also view profiles to see what items others own and connect with them to arrange trades. Beyond exchanging, the app also includes a donation feature, where users can donate items directly to orphanages or other organizations.

    Key features:
    • Exchange secondhand items 
    • Track your exchanges
    • Donation feature to support the community
    • Simple and user-friendly design

    `,
    image: "/nukaran.png",
    technologies: ["Figma"],
    githubUrl: "https://www.figma.com/design/4bRtCajkSmqDbsfaEnCysa/UI-UX-Fortex-SnapUI?node-id=52-3&t=DShq0Jb2ImeU6nkR-1",
  },
  {
    id: 7,
    title: "VKellogs",
    description:
      "An assignment from Human Computer Interaction class, where there's some requirements such as the brand name, concept, and components. But the layout and design are up to us",
    detailedDescription: `An assignment from Human Computer Interaction class, where there's some requirements such as the brand name, concept, and components. But the layout and design are up to us.

    This is the project from the 2nd semesterof my college. The project is to create a website for a fictional company called VKellogs, which is a cereal company that sells healthy and delicious cereals. The website is designed to be user-friendly and easy to navigate, with a focus on the products and their benefits.

    From this project, I learned a lot about creating effective UI/UX designs. I also experienced the challenges of designing a website from scratch, and these challenges became valuable lessons to improve my skills for the future.`,
    image: "/vkellogs.png",
    technologies: ["HTML", "CSS", "JavaScript"],
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
