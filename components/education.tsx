import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              <TimelineItem
                title="Bachelor of Technology"
                organization="Lloyd Institute of Engineering And Technology"
                period="2022 - 2026 (Expected)"
                description="Computer Science and Engineering (AI & ML)"
                details={[
                  "GPA: 7.7",
                  "Courses: Operating Systems, System Design, Data Structures, Database Management System, Object Oriented Programming",
                ]}
              />

              <TimelineItem
                title="Senior Secondary School"
                organization="Rais Ahmed Inter College"
                period="2019 - 2021"
                description="PCM Stream"
                details={[
                  "Marks Percentage: 81%",
                  "Studied Physics, Chemistry, Mathematics",
                  "Participated in various technical competitions and workshops",
                ]}
              />

              <TimelineItem
                title="High School"
                organization="Rais Ahmed Inter College"
                period="2017 - 2019"
                description="Science Stream"
                details={["Marks Percentage: 81%", "Developed strong foundation in science and mathematics"]}
              />
            </div>
              <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <LanguageCard language="English" level="Advanced (C1)" stars={4.5} />
                <LanguageCard language="Hindi" level="Proficient (C2)" stars={5} />
                <LanguageCard language="German" level="Beginner (A2)" stars={2} />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              <CertificationCard
                title="3rd Runner-up – HashHacks 7.0, Cluster of Innovation"
                issuer="University of Delhi"
                date="2025"
                description="Certification for solving 170+ algorithmic problems on Leetcode platform using C and C++."
              />

              <CertificationCard
                title="1st runner up in 'Code-Quest'"
                issuer="Lloyd Institute of Engineering and Technology"
                date="2023"
                description="Participated in 'Hachthon' covering fundamental and advanced data structures and algorithms implementation in C and C++."
              />

              <CertificationCard
                title="Policy Workshop – Niti: The Policy Lab, Kirori Mal College"
                issuer="University of Delhi"
                date="2025"
                description="Present our Niti 'Swasth Bharat Abhiyan', a phased policy proposal for achieving Universal Health Care (UHC) in India."
              />

              <CertificationCard
                title="Pitch Cypher"
                issuer="Lloyd Institute of Engineering and Technology"
                date="May, 2024"
                description="Covered HTML, CSS, JavaScript fundamentals and responsive web design principles."
              />

              <CertificationCard
                title="Network Technician Career Path"
                issuer="Cisco Networking Academy"
                date="2024"
                description=" Successfully completed the Networking Technician career path and achieved this student level credential"
              />

              <CertificationCard
                title="Web Development Fundamentals"
                issuer="ApnaCollege"
                date="2023"
                description="Covered HTML, CSS, JavaScript fundamentals and responsive web design principles."
              />

              <CertificationCard
                title=" Event Coordinator & Technical Volunteer"
                issuer=" Lloyd Institute of Engineering and Technology"
                date="2023"
                description="Organized and managed technical events, ensuring smooth execution of workshops, hackathons, and coding competitions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  title,
  organization,
  period,
  description,
  details,
}: {
  title: string
  organization: string
  period: string
  description: string
  details: string[]
}) {
  return (
    <div className="relative">
      <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background dark:bg-black"></div>
      <div className="bg-background/40 dark:bg-black/40 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors">
        <h4 className="text-xl font-bold">{title}</h4>
        <div className="flex flex-wrap justify-between items-center mt-1 mb-3">
          <p className="text-primary font-medium">{organization}</p>
          <span className="text-sm text-gray-400 bg-primary/10 px-2 py-1 rounded-full">{period}</span>
        </div>
        <p className="text-muted-foreground mb-3">{description}</p>
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CertificationCard({
  title,
  issuer,
  date,
  description,
}: {
  title: string
  issuer: string
  date: string
  description: string
}) {
  return (
    <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors">
      <CardContent className="p-6">
        <h4 className="text-lg font-bold text-foreground">{title}</h4>
        <div className="flex justify-between items-center mt-1 mb-3">
          <p className="text-primary">{issuer}</p>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function LanguageCard({ language, level, stars }: { language: string; level: string; stars: number }) {
  // Support half stars and correct rendering
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars - fullStars >= 0.5;
  const totalStars = 5;
  return (
    <Card className="bg-background/40 dark:bg-black/40 border-primary/20 hover:border-primary transition-colors">
      <CardContent className="p-6">
        <h4 className="text-lg font-bold text-foreground">{language}</h4>
        <p className="text-sm text-muted-foreground mb-2">{level}</p>
        <div className="flex">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-xl text-primary">★</span>
          ))}
          {hasHalfStar && <span className="text-xl text-primary">⯪</span>}
          {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <span key={i + fullStars + 1} className="text-xl text-gray-600">☆</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

