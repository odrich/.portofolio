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
        description: "Practiced data cleaning and preprocessing using pandas and NumPy, as well as building and evaluating models with scikit-learn. Skilled in creating data visualizations with matplotlib to explore and present data insights. Completed projects involving regression analysis and interpreting data distributions.",
      },
      {
        name: "SQL",
        description: "Used SQL to query, organize, and combine data , currently developing my knowledge in database management and optimization.",
      },
      {
        name: "Microsoft Excel",
        description: "Used Microsoft Excel for my personal projects such as itineraries, scheduling, or my personal data logs. It helps me a lot to organize data and perform basic analysis.",
      },
      {
        name: "C",
        description: "Practiced Algorithm & Programming and Data Structures with this language.",
      },
      {
        name: "Java",
        description: "Practiced OOP principles and apply it to the real problems and project.",
      },  
      {
        name: "Node.js",
        description: "Slightly familiar and still exploring about Node.js .",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git & GitHub",
        description: "Collaborated with team members using branches in group projects to maanage the version control and published final outputs through GitHub.",
      },
      {
        name: "Figma",
        description: "Designed both low-fidelity and high-fidelity prototypes to visualize and refine project ideas.",
      },
      {
        name: "Agile/Scrum",
        description: "Applied Agile/Scrum methods in project development.",
      },
            {
        name: "Google Workspace",
        description: "Used Google Workspace for collaboration, documentation, and project management with the team.",
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
