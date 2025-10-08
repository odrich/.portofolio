const softSkills = [
  {
    name: "Collaboration",
    description: "Collaborated with the teammates to complete my college assignment or in an event.",
  },
  {
    name: "Problem-solving",
    description: "debugged the built code and focused on turning real-world problems into impactful solutions through critical project design..",
  },
  {
    name: "Communication",
    description: "Adept at adapting communication styles across various settings, from engaging large groups during presentations to providing one-on-one guidance and ensuring smooth coordination in team projects..",
  },
  {
     name: "Adaptability",
     description: "adapted easily in every conditions.",
  },
  {
     name: "Time Management",
     description: "managing my time to balance my college assignments, organization activities, and personal projects.",
  },
  {
     name: "Leadership",
     description: "Lead a team to achieve a goal in a activity or project and also a group of freshmen during their first year program activities",
  },
  {
     name: "Teamwork",
     description: "worked well in a team to complete my college assignments, organization and other activities.",
  },
]

export function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 px-6 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Soft Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mb-8"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div key={index} className="group">
              <div className="p-6 rounded-lg bg-card dark:bg-card border border-border dark:border-border hover:border-accent/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-gold flex-shrink-0 mt-1.5"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground dark:text-foreground mb-3 group-hover:text-accent transition-colors">
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
    </section>
  )
}
