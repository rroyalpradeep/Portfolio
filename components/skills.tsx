import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Globe, Database, Terminal, Braces, Server, Cloudy, Smartphone } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've developed a diverse set of technical and soft skills through education, projects, and hands-on
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-2 text-primary" /> Programming Languages
            </h3>

            <div className="space-y-6">
              <SkillBar name="C/C++" percentage={85} />
              <SkillBar name="JavaScript" percentage={80} />
              <SkillBar name="Python" percentage={75} />
              <SkillBar name="SQL" percentage={75} />
              <SkillBar name="Java" percentage={70} />
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center">
              <Globe className="mr-2 text-primary" /> Web Technologies
            </h3>
            , , 
            <div className="space-y-6">
              <SkillBar name="EJS" percentage={90} />
              <SkillBar name="Tailwind CSS" percentage={85} />
              <SkillBar name="Bootstrap" percentage={85} />
              <SkillBar name="React.js" percentage={75} />
              <SkillBar name="Node.js" percentage={75} />
              <SkillBar name="Express.js" percentage={70} />
              <SkillBar name="Django" percentage={75} />
              <SkillBar name="FastAPI" percentage={75} />
              <SkillBar name="REST" percentage={75} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
            <SkillCard
              icon={<Terminal className="text-primary" size={32} />}
              title="Problem Solving"
              skills={["Data Structures", "Algorithms", "Logical Thinking", "Debugging", "Flowchart"]}
            />

            <SkillCard
              icon={<Database className="text-primary" size={32} />}
              title="Databases"
              skills={["MySQL","MongoDB", "Database Design", "Firebase Realtime Database", "Data Modeling"]}
            />

            <SkillCard
              icon={<Smartphone className="text-primary" size={32} />}
              title="Mobile App Development"
              skills={["Jetpack Compose", "Firebase SDK", "Kotlin with Android Studio"]}
            />
            
            <SkillCard
              icon={<Cloudy className="text-primary" size={32} />}
              title="Cloud & DevOps"
              skills={["AWS: EC2", "AWS: S3", "AWS: Lambda Basics"]}
            />

            <SkillCard
              icon={<Braces className="text-primary" size={32} />}
              title="Tools & IDEs"
              skills={["Git & GitHub", "VS Code, PyCharm, IntelliJ", "Android Studio", "Arduino IDE", "Figma", "MS Office"]}
            />

            <SkillCard
              icon={<Server className="text-primary" size={32} />}
              title="Soft Skills"
              skills={["Communication", "Teamwork", "Time Management", "Adaptability", "Brainstorming"]}
            />

            <SkillCard
              icon={<Server className="text-primary" size={32} />}
              title="Languages"
              skills={["Hindi", "English", "German (beginner)"]}
            />

            <Card className="bg-black/40 border-primary/20 md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Coding Profiles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://leetcode.com/u/pradeep884/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <i className="fa-solid fa-code text-primary"></i> LeetCode
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/pradeepsonioffi1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <i className="fa-brands fa-hackerrank text-primary"></i> HackerRank
                  </a>
                  <a
                    href="https://www.codechef.com/users/pradeep_soni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <i className="fa-solid fa-code text-primary"></i> CodeChef
                  </a>
                  <a
                    href="https://codolio.com/profile/rroyalpradeep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <i className="fa-solid fa-laptop-code text-primary"></i> Codolio
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2 bg-gray-700" indicatorClassName="bg-primary" />
    </div>
  )
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <Card className="bg-black/40 border-primary/20 hover:border-primary transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span className="text-gray-300">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

