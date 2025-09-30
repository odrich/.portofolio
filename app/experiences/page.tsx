"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const organizationalExperiences = [
  {
    id: 1,
    title: "Freshmen Partner",
    organization: "Binus University",
    period: "Jun 2025 - Present",
    location: "Tangerang",
    description:
      "Assisted freshmen during their First Year Program of Binusian 2029, providing weekly mentoring sessions for a year, focused on social skills and campus life. Guided students through assignments, monitored their progress, and offered support to help them adapt to university life and make sure they wall adapted.",
    achievements: [
      "Providing assistance and mentorship to help freshmen adapting during their first year",
      "Providing some mentoring activities for freshmen during their first year (2 semesters)",
    ],
  },
  {
    id: 2,
    title: "Freshmen Leader",
    organization: "Binus University",
    period: "Jun 2025 - Sept 2025",
    location: "Tangerang",
    description:
      "Participating in Binus University First Year Program of Binusian 2029 before the new semester started, collaborated with my 6 fellow Freshmen Leaders and roled as the class coordinator, i worked with the class secretary to take the attendence of our freshmens and coordinated with the other role of frehmen leader.",
    achievements: [
      "Helping to ensure the First Year Program ran well before the first semester started",
      "Leading and supporting a group of Freshmen throughout the First Year Program activities",
      "Guiding and Assisting Freshmen during the program",
      "Together with 6 other partners, managing a class of freshmen consisting of 53 students",
    ],
  },
  {
    id: 3,
    title: " Education Counselor (lepasan)",
    organization: "Binus University",
    period: "Jun 2023 - Sept 2023 & November 2024",
    location: "Remote",
    description:
      "Participating in Binus University Marketing teams, and inform about Binus University's school program in social media.",
    achievements: [
      "Explained Binus University's study programs, campus facilities, and scholarships",
      "Helped the 12th graders who are wanted to register to Binus University",
      "Helped the 12th graders who are confused about what major do they want to take",
      "Sold some of the Binus University registration forms",
      
    ],
  },
  {
    id: 4,
    title: " Staff of Competition Event (Recis Cup 2022)",
    organization: "Regina Pacis Senior Highschool",
    period: "2022",
    location: "Remote",
    description:
      "Participating in a hybrid school events, this event was held during the pandemic era, so most of the staffs were did their job remotely.",
    achievements: [
      "Inviting the other schools especially in Bogor to join our event especially the competitions.",
      "Inform about the event to the social media.",
      "Helped the participants of the competition.",
      
      
    ],
  },
]

const volunteerExperiences = [
  {
    id: 5,
    title: "Student Committee ICOBAR-FIDI 2025",
    organization: "Binus Research Technology and Transfer Office",
    period: "Aug 2025",
    location: "Tangerang",
    description:
      "Roled as aLiaison Officer, I guided all of the participants and VIP guests to ensure they came the right seminar rooms, presentation halls, and break areas. I collaborated closely with other coordinators to provide updates on event developments, such as schedule changes, to avoid miscommunication, and ensured that all participant's and guest's needs were fullfiled throughout the event..",
    achievements: ["Guided participants and VIP guests to the correct seminar rooms, presentation halls, and break areas",
       " Collaborated closely with the coordinators", 
       "Provided updates on event developments, including schedule changes, to prevent miscommunication",
      "Ensured all participant's and guest's needs were fulfilled throughout the event"],
  },
  {
    id: 6,
    title: "Seedling Planting Volunteer",
    organization: "Teach For Indonesia",
    period: "Nov 2024",
    location: "Tangerang",
    description:
      "took part in a one-week volunteering activity focused on environmental greening and helping improve air quality. As part of this initiative, I planted 5 seedlings and cared for them every day, watering them both in the morning and evening to make sure they grew well. Beyond the daily routine, I also created reports to document how the plants were treated and to track their growth over the week.",
    achievements: [
      "Plant 5 seedlings of plant in the campus area",
      "watered the plants every morning and evening",
      "Made the report about the condition of the seedlings for a week",
    ],
  },
]

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Experiences</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my organizational and volunteer experiences.
            </p>
          </div>

          {/* Organizational Experience Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8">Organizational Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {organizationalExperiences.map((exp) => (
                <Card key={exp.id} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                        <p className="text-secondary font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Volunteer Experience Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-8">Volunteer Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {volunteerExperiences.map((exp) => (
                <Card key={exp.id} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                        <p className="text-secondary font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-secondary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
