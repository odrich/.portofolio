const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML & CSS",
        description: "making the front-end part of a website for project and college assignments, make sure the that every user interface I develop could deliver the best user experience.",
      },
      {
        name: "React",
        description: "built the interface of this website and college assignment.",
      },
    
      {
        name: "Tailwind CSS",
        description: "implemented the design of this website.",
      },
      {
        name: "JavaScript",
        description: "developing interactive and responsive user interfaces, creating dynamic and responsive web applications with engaging interfaces that improve usability and interaction..",
      },
    ],
  },
  {
    title: "Backend Development & Database",
    skills: [

      {
        name: "Python",
        description: "optimized routing and middleware, reducing API latency by 40%.",
      },
      {
        name: "SQL",
        description: "designed efficient NoSQL schemas for dynamic user data and fast queries.",
      },
      {
        name: "C",
        description: "designed efficient NoSQL schemas for dynamic user data and fast queries.",
      },
      {
        name: "Java",
        description: "designed efficient NoSQL schemas for dynamic user data and fast queries.",
      },  
      {
        name: "Node.js",
        description: "Familiar with Node.js and currently developing foundational skills in backend development.",
      },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git & GitHub",
        description: "managed version control and collaborative branching in team projects.",
      },
      {
        name: "Figma",
        description: "managed version control and collaborative branching in team projects.",
      },
      {
        name: "Agile/Scrum",
        description: "delivered features on schedule through sprint-based workflows.",
      },
    ],
  },
]


export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="p-4 rounded-lg bg-card dark:bg-card border border-border dark:border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0 mt-1.5"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground dark:text-foreground mb-1 group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
