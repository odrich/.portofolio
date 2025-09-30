export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - text */}
          <div>
            <p className="text-lg text-foreground dark:text-foreground leading-relaxed mb-6">
              I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
                Keisha Audrey Chayadi
              </span>
              , an Undergraduate Computer Science student at Bina Nusantara University, specializing in AI. I’m passionate about exploring AI, software development, data science, and UI/UX design through projects and courses. Beyond tech, I enjoy to explore new experience such as learning new languages, baking, and growing a business, which helps me build skills, gain new perspectives, and improve problem-solving.
            </p>
            <p className="text-lg text-foreground dark:text-foreground leading-relaxed mb-8">
              I working in AI and Data Science, especially with Python, Pandas, NumPy, scikit-learn, and TensorFlow. I focus on turning data into actionable insights and creating clear visualizations. I also have hands  on experience with HTML and CSS.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/20 dark:to-secondary/20 rounded-2xl flex items-center justify-center border border-border dark:border-border shadow-lg dark:shadow-2xl overflow-hidden">
              <img
                src="IMG_20230416_140620.jpg" 
                // alt="Deskripsi gambar"
                className="w-full h-full object-cover"
              />
            </div>
        
            {/* Education*/}
            <div className="bg-card dark:bg-card rounded-lg p-4 border border-border dark:border-border shadow-md w-4/5">
              <h3 className="text-lg font-semibold text-primary mb-3">Education</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <h4 className="font-medium text-foreground dark:text-foreground">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-xs text-muted-foreground">Bina Nusantara University  • 2023 - 2027 (expected)</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground dark:text-foreground">
                    Science major in Senior Highschool
                  </h4>
                  <p className="text-xs text-muted-foreground">Regina Pacis Senior Highschool  • 2020 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
