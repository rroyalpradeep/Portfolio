import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, Code, Database, MapPin } from "lucide-react"

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
            My professional journey and industry experience that have shaped my career.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* TradeIndia Experience */}
          <div className="mb-12">
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              <ExperienceItem
                title="Junior Software Developer"
                company="TradeIndia (Infocom Network Private Limited)"
                location="Sec-137, Noida"
                period="Aug 2025 - Present"
                responsibilities={[
                  "Working in a large-scale B2B e-commerce environment, gaining hands-on experience with real-world production systems and backend workflows",
                  "Successfully completed full knowledge transfer (KT) for the Accounts & Taxation backend module, including understanding invoice workflows, credit notes, and tax calculation logic",
                  "Studied the Accounts database architecture and backend logic, and prepared a complete Data Flow Diagram (DFD) representing the entire transaction workflow and system interactions",
                  "Implemented the Credit Note Tax Invoicing module and delivered my first production merge to the main branch",
                  "Appreciated by the Team Lead and Manager for the quality of EMI Report Dashboard work, accuracy, and timely delivery",
                  "Actively contributing to debugging, enhancing backend features, and ensuring smooth integration with existing systems",
                  "Strengthened skills in backend development, production-level problem-solving, and collaborative teamwork in an agile environment",
                ]}
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Code className="mr-2 text-primary" /> Key Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Lead Count Notification API"
                description="Designed and developed a high-performance REST-style API to dynamically fetch and display lead category counts (High Performing Leads, Hot Leads, Super Hot Leads, Non Hot Leads, New Registrations, GST Verified Leads) in the SFA application."
                technologies={["Perl (Mason)", "PostgreSQL", "DBI/DBD::Pg", "AJAX", "jQuery", "JSON"]}
                highlights={[
                  "Optimized database queries using PostgreSQL COUNT(*) FILTER aggregation",
                  "Implemented secure parameterized SQL with dynamic filters",
                  "Integrated with frontend using AJAX for real-time updates",
                ]}
              />

              <ProjectCard
                title="Mini KYC Details API"
                description="Developed a backend API to retrieve and display Mini KYC information on the SFA profile page, ensuring consistency with the Housekeeping Sales Lead List module."
                technologies={["Perl (Mason)", "PostgreSQL", "JSON APIs", "Postman"]}
                highlights={[
                  "Reused and integrated existing business logic",
                  "Maintained uniform labels, icons, and KYC status rules",
                  "Display-only JSON API for seamless frontend rendering",
                ]}
              />

              <ProjectCard
                title="Nearby Sellers API"
                description="Designed and implemented a scalable API to fetch nearby sellers based on pin code, city, and state filters for the SFA application."
                technologies={["Perl (Mason)", "PostgreSQL", "Dynamic SQL", "JSON APIs", "Logging Framework"]}
                highlights={[
                  "Built dynamic SQL queries with conditional filtering and pagination",
                  "Implemented category-matching logic for relevant sellers",
                  "Added validation and logging for request integrity",
                ]}
              />
            </div>
          </div>

          {/* Previous Experience */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-2 text-primary" /> Previous Experience
            </h3>
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
                  "Enhanced user experience with Node, Express and RESTful API's for interactive",
                  "Created an Amazon clone frontend to practice UI implementation skills",
                  "Built a personal portfolio website to showcase projects and skills",
                  "Implemented responsive designs in different projects for optimal viewing across various devices",
                ]}
              />
            </div>
          </div>

          <div className="mt-16">
            <Card className="bg-background/40 dark:bg-black/40 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                  <Calendar className="mr-2 text-primary" size={20} /> Availability
                </h3>
                <p className="text-muted-foreground">
                  I'm currently available for full-time roles, internships, part-time roles, and freelance projects. 
                  I'm particularly interested in opportunities related to full-stack development, backend systems, 
                  and software engineering that will allow me to apply and expand my skills.
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
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-end">
              <MapPin size={12} className="mr-1" /> {location}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="font-medium mb-2">Key Responsibilities & Achievements:</h5>
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

function ProjectCard({
  title,
  description,
  technologies,
  highlights,
}: {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}) {
  return (
    <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors h-full">
      <CardContent className="p-6">
        <h4 className="text-lg font-bold text-foreground mb-3">{title}</h4>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mb-4">
          <h5 className="text-sm font-medium text-primary mb-2">Technologies:</h5>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-primary mb-2">Highlights:</h5>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
