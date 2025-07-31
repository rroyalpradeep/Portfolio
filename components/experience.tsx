import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and volunteer experiences that have shaped my career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
            <ExperienceItem
              title="Volunteer"
              company="International Conferences & Events"
              location="LIET, Greater Noida"
              period="2024"
              responsibilities={[
                "Assisted with special events and programs",
                "Maintained clean, neat, and operational facilities to serve program needs",
                "Supported engaging, fun, and smooth-running events by helping with organization and planning",
                "Used strong interpersonal communication skills to convey information to others",
              ]}
            />

            <ExperienceItem
              title="Worked on Web Development Projects"
              company="Self-Directed Projects"
              location="Remote"
              period="2023 - 2024"
              responsibilities={[
                "Developed responsive web applications using HTML, CSS, and JavaScript",
                "Implemented React and Next in frontend Development",
                " Enhanced user experience with Node, Express and RESTful API's for interactive",
                "Created an Amazon clone frontend to practice UI implementation skills",
                "Built a personal portfolio website to showcase projects and skills",
                "Implemented responsive designs in different prjects for optimal viewing across various devices",
              ]}
            />
          </div>

          <div className="mt-16">
            <Card className="bg-background/40 dark:bg-black/40 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                  <Calendar className="mr-2 text-primary" size={20} /> Availability
                </h3>
                <p className="text-muted-foreground">
                  I'm currently available for internships, part-time roles, and freelance projects. I'm particularly
                  interested in opportunities related to web development, UI/UX design, and software engineering that
                  will allow me to apply and expand my skills while continuing my education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  responsibilities,
}: {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}) {
  return (
    <div className="relative">
      <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background dark:bg-black"></div>
      <div className="bg-background/40 dark:bg-black/40 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <h4 className="text-xl font-bold flex items-center">
              <Briefcase className="mr-2 text-primary" size={18} /> {title}
            </h4>
            <p className="text-primary mt-1">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">{period}</p>
            <p className="text-sm text-muted-foreground mt-1">{location}</p>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="font-medium mb-2">Key Responsibilities:</h5>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

