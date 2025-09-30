import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Samsung Innovation Campus Batch 6 - 2024/2025 Stage 1",
    issuer: "Samsung Indonesia",
    date: "Jan 2025",
    //credentialId: "AWS-DEV-2023-001",
    description: "Passed the Samsung Innovation Campus Batch 6 logic test and stage 1 (python).",
    verifyUrl: "https://drive.google.com/file/d/1vPSCnITeGa2JC-0ct1pLme2Z303NUW7k/view?usp=sharing",
  },
 
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-background dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Certifications</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-muted-foreground">
            
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 bg-card dark:bg-card border-border dark:border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 dark:bg-primary/20 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{cert.title}</h3>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>

                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</span>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
