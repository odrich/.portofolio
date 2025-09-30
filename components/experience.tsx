"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, X } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    id: 1,
    title: "Freshmen Partner",
    organization: "Binus University",
    location: "Tangerang",
    period: "Jun 2025 - Present",
    description:
      "Assisted freshmen during their First Year Program of Binusian 2029, providing weekly mentoring sessions for a year, focused on social skills and campus life. Guided students through assignments, monitored their progress, and offered support to help them adapt to university life and make sure they wall adapted.",
    detailedDescription: `Assisted freshmen during their first-year program, providing weekly mentoring sessions focused on social skills and campus life. Guided students through assignments, monitored their progress, and offered support to help them adapt to university life and make sure they wall adapted.

Responsibilities:
• Providing some mentoring activities for freshmen during their first year (2 semesters)
• Providing assistance and mentorship to help freshmen adapting during their first year`,

    skills: ["Time management", "Mentoring", "Leadership"],
  },
  {
    id: 2,
    title: "Freshmen Leader",
    organization: "Binus University",
    location: "Tangerang",
    period: "Jun 2025 - Sept 2025",
    description:
      "Participating in Binus University First Year Program of Binusian 2029 before the new semester started, collaborated with my 6 fellow Freshmen Leaders and roled as the class coordinator, i worked with the class secretary to take the attendence of our freshmens and coordinated with the other role of frehmen leader.",
    detailedDescription: `Participating in Binus University First Year Program of Binusian 2029 before the new semester started, collaborated with my 6 fellow Freshmen Leaders and roled as the class coordinator, i worked with the class secretary to take the attendence of our freshmens and coordinated with the other role of frehmen leader.

Responsibilities :
• Helping to ensure the First Year Program ran well before the first semester started
• Leading and supporting a group of Freshmen throughout the First Year Program activities
• Guiding and Assisting Freshmen during the program
• Together with 6 other partners, managing a class of freshmen consisting of 53 students


This role has strengthened my communication, teamwork, networking, and public speaking skills as I actively guided and supported freshmen throughout the program.`,
    skills: ["Communication", "Mentoring", "Public Speaking", "Teamwork"],
  },
  {
    id: 3,
    title: "Student Committee ICOBAR-FIDI 2025",
    organization: "Binus Research Technology and Transfer Office ",
    location: "Alam Sutera, Tangerang",
    period: "Aug 2025 - Aug 2025 ",
    description:
      "Roled as aLiaison Officer, I guided all of the participants and VIP guests to ensure they came the right seminar rooms, presentation halls, and break areas. I collaborated closely with other coordinators to provide updates on event developments, such as schedule changes, to avoid miscommunication, and ensured that all participant's and guest's needs were fullfiled throughout the event.",
    detailedDescription: ` Roled as aLiaison Officer, I guided all of the participants and VIP guests to ensure they came the right seminar rooms, presentation halls, and break areas. I collaborated closely with other coordinators to provide updates on event developments, such as schedule changes, to avoid miscommunication, and ensured that all participant's and guest's needs were fullfiled throughout the event.

Responsibilities:
• Guided participants and VIP guests to the correct seminar rooms, presentation halls, and break areas
• Collaborated closely with the coordinators
• Provided updates on event developments, including schedule changes, to prevent miscommunication
• Ensured all participant's and guest's needs were fulfilled throughout the event`,

    skills: ["Teamwork", "Public Speaking"],
  },
]

const truncateText = (text: string, maxLength = 120) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim()
}

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<(typeof experiences)[0] | null>(null)

  return (
    <section
      id="experience"
      className="py-20 relative"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/85"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="border-l-4 border-l-primary h-full flex flex-col bg-card dark:bg-card border-border dark:border-border shadow-lg dark:shadow-2xl"
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.organization}</p>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description with "more" button for all cards */}
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {truncateText(exp.description)}
                  {exp.description.length > 120 && (
                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="text-secondary hover:text-primary transition-colors ml-1 font-medium"
                    >
                      ... more
                    </button>
                  )}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary/20 dark:bg-secondary/20 text-secondary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/experiences">
            <Button
              size="lg"
              variant="outline"
              className="group bg-transparent dark:bg-transparent border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground shadow-lg dark:shadow-2xl"
            >
              See More Experiences
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg bg-card dark:bg-gray-900 p-6">
            {/* Close Button (X only) */}
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold mb-2 text-foreground">{selectedExp.title}</h3>
            <p className="text-primary font-medium mb-4">{selectedExp.organization}</p>
            <div className="flex flex-col gap-2 mb-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{selectedExp.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{selectedExp.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground whitespace-pre-line mb-6 leading-relaxed">
              {selectedExp.detailedDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedExp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-secondary/20 dark:bg-secondary/20 text-secondary text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
