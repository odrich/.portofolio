"use client"

export function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2018 - 2022",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Graduated with honors and completed a capstone project on machine learning applications.",
      gpa: "3.8/4.0",
    },
    {
      id: 2,
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      period: "2022",
      description:
        "Intensive 6-month program covering modern web technologies including React, Node.js, databases, and deployment strategies. Built multiple real-world projects.",
      certification: "Certificate of Completion",
    },
    {
      id: 3,
      degree: "High School Diploma",
      school: "Central High School",
      period: "2014 - 2018",
      description:
        "Graduated with honors, focusing on mathematics and computer science courses. Active member of the programming club and robotics team.",
      achievement: "Valedictorian",
    },
  ]

  const truncateText = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Education</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-secondary font-semibold mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {truncateText(edu.description)}
                  {edu.description.length > 120 && (
                    <button
                      onClick={() => (window.location.href = `/education/${edu.id}`)}
                      className="text-secondary hover:text-primary transition-colors ml-1 font-medium"
                    >
                      more...
                    </button>
                  )}
                </p>
              </div>
              <div className="mt-auto">
                {edu.gpa && <div className="text-sm text-secondary font-semibold">GPA: {edu.gpa}</div>}
                {edu.certification && <div className="text-sm text-secondary font-semibold">{edu.certification}</div>}
                {edu.achievement && <div className="text-sm text-secondary font-semibold">{edu.achievement}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
