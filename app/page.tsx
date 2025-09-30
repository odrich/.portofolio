import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { SoftSkills } from "@/components/soft-skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Hero Section - Full width */}
        <div className="lg:col-span-12">
          <Hero />
        </div>

        {/* About Section - Full width with background */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#FDFDFD" }}>
          <About />
        </div>

        {/* Experience Section - Full width with background */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#F8F8F8" }}>
          <Experience />
        </div>

        {/* Skills Section - Full width */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#FDFDFD" }}>
          <Skills />
        </div>

        {/* Soft Skills Section - Full width */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#F8F8F8" }}>
          <SoftSkills />
        </div>

        {/* Projects Section - Full width with navy background */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#252C34" }}>
          <Projects />
        </div>

        {/* Certifications Section - Full width */}
        <div className="lg:col-span-12" style={{ backgroundColor: "#F8F8F8" }}>
          <Certifications />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
