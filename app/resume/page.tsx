import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./resume.css"

export const metadata: Metadata = {
  title: "Pradeep Soni | Resume",
  description: "Resume of Pradeep Soni - Full Stack Developer",
}

export default function ResumePage() {
  return (
    <>
      <Header />
      <div className="resume-page">
        <div className="resume-container">
          <header className="header">
            <div className="header-content">
              <div className="profile-info">
                <h1>Pradeep Soni</h1>
                <p className="title">Full-Stack Developer | B.Tech CSE</p>
                <div className="contact-info">
                  <a href="tel:+91788066669"><i className="fas fa-phone"></i> +91 7880606669</a>
                  <a href="mailto:pradeepsoniofficial@gmail.com"><i className="fas fa-envelope"></i> pradeepsoniofficial@gmail.com</a>
                  <a href="http://www.pradeepsoni.tech" target="_blank"><i className="fas fa-globe"></i> www.pradeepsoni.tech</a>
                  <a href="https://www.linkedin.com/in/pradeepsoniofficial" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
                </div>
              </div>
            </div>
          </header>

          <section className="section summary-section">
            <h2><i className="fas fa-user"></i> Professional Summary</h2>
            <p>
              Final year B.Tech CSE student at Lloyd Institute of Engineering and Technology, Full-stack developer with real industry experience at TradeIndia (Infocom Network Pvt. Ltd.), where I work on backend systems, multiple high-performance backend APIs for an SFA platform, accounts workflows, and production-grade features. Strong technical foundation in React.js, MERN, Django, C++, DSA, and OOP, with a track record of delivering reliable, efficient code (90%+ accuracy and 50% faster development). Passionate about scalable system design, clean architectures, and solving real business problems through technology.
            </p>
          </section>

          <section className="section experience-section">
            <h2><i className="fas fa-briefcase"></i> Experience</h2>
            <div className="job-card">
              <div className="job-header">
                <h3>Junior Software Developer</h3>
                <span className="company">TradeIndia (Infocom Network Private Limited), Sec-137 Noida</span>
                <span className="duration"><i className="fas fa-calendar-alt"></i> Aug 2025 to Present</span>
              </div>
              <div className="job-content">
                <p>Working in a large-scale B2B e-commerce environment, gaining hands-on experience with real-world production systems and backend workflows. Successfully completed full knowledge transfer (KT) for the Accounts & Taxation backend module, including understanding invoice workflows, credit notes, and tax calculation logic. Studied the Accounts database architecture and backend logic, and prepared a complete Data Flow Diagram (DFD) representing the entire transaction workflow and system interactions.</p>
                <ul className="achievements">
                  <li>Implemented the Credit Note Tax Invoicing module and delivered my first production merge to the main branch.</li>
                  <li>Appreciated by the Team Lead and Manager for the quality of EMI Report Dashboard work, accuracy, and timely delivery.</li>
                  <li>Actively contributing to debugging, enhancing backend features, and ensuring smooth integration with existing systems.</li>
                </ul>
              </div>
              
              <div className="project-item">
                <h4><i className="fas fa-code"></i> 1. Lead Count Notification API (HL / SHL Dashboard Metrics)</h4>
                <p>Designed and developed a high-performance REST-style API to dynamically fetch and display lead category counts (High Performing Leads, Hot Leads, Super Hot Leads, Non Hot Leads, New Registrations, GST Verified Leads) in the SFA application.</p>
                <p><strong>Technologies:</strong> Perl (Mason), PostgreSQL, DBI/DBD::Pg, AJAX, jQuery, JSON</p>
              </div>
              
              <div className="project-item">
                <h4><i className="fas fa-code"></i> 2. Mini KYC Details API for Profile Page (SFA App)</h4>
                <p>Developed a backend API to retrieve and display Mini KYC information on the SFA profile page, ensuring consistency with the Housekeeping Sales Lead List module.</p>
                <p><strong>Technologies:</strong> Perl (Mason), PostgreSQL, JSON APIs, Postman</p>
              </div>
              
              <div className="project-item">
<h4><i className="fas fa-code"></i> 3. Nearby Sellers API with Location-Based Filtering</h4>
                <p>Designed and implemented a scalable API to fetch nearby sellers based on pin code, city, and state filters for the SFA application with category-matching logic.</p>
                <p><strong>Technologies:</strong> Perl (Mason), PostgreSQL, Dynamic SQL, JSON APIs, Logging Framework, Postman</p>
              </div>
            </div>
          </section>

          <section className="section education-section">
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            <div className="education-grid">
              <div className="education-card">
                <h3>Bachelor of Technology in CSE</h3>
                <p className="university">Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
                <span className="year">2022-2026</span>
                <span className="grade">8 CGPA</span>
              </div>
              <div className="education-card">
                <h3>Intermediate</h3>
                <p className="university">Rais Ahmed Inter College, Itwa</p>
                <span className="year">2019-2021</span>
                <span className="grade">81%</span>
              </div>
              <div className="education-card">
                <h3>High School</h3>
                <p className="university">Rais Ahmed Inter College, Itwa</p>
                <span className="year">2017-2019</span>
                <span className="grade">81%</span>
              </div>
            </div>
          </section>

          <section className="section skills-section">
            <h2><i className="fas fa-cogs"></i> Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3><i className="fas fa-code"></i> Programming Languages</h3>
                <div className="skill-tags">
                  <span>C/C++</span>
                  <span>JavaScript</span>
                  <span>C#</span>
                  <span>Python</span>
                  <span>Java</span>
                  <span>SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-laptop-code"></i> Web Technologies</h3>
                <div className="skill-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Tailwind CSS</span>
                  <span>React.js</span>
                  <span>EJS</span>
                  <span>Bootstrap</span>
                  <span>AJAX</span>
                  <span>jQuery</span>
                  <span>JSON</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-server"></i> Backend Technologies</h3>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>Django</span>
                  <span>FastAPI</span>
                  <span>Perl</span>
                  <span>RESTful APIs</span>
                  <span>.NET</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-mobile-alt"></i> Mobile App Development</h3>
                <div className="skill-tags">
                  <span>Kotlin</span>
                  <span>Android Studio</span>
                  <span>Jetpack Compose</span>
                  <span>Firebase SDK</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span>AWS (EC2, S3, Lambda)</span>
                  <span>CI/CD</span>
                  <span>GitHub Actions</span>
                  <span>Azure</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>
                  <span>Jenkins</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-database"></i> Databases</h3>
                <div className="skill-tags">
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                  <span>MongoDB</span>
                  <span>SQLite</span>
                  <span>Firebase</span>
                  <span>Query Optimization</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-tools"></i> Tools & IDEs</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>PyCharm</span>
                  <span>IntelliJ</span>
                  <span>Android Studio</span>
                  <span>Arduino IDE</span>
                  <span>Figma</span>
                  <span>Postman</span>
                  <span>Jira</span>
                  <span>Bitbucket</span>
                </div>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-language"></i> Languages</h3>
                <div className="skill-tags">
                  <span>Hindi</span>
                  <span>English</span>
                  <span>German (beginner)</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section projects-section">
            <h2><i className="fas fa-project-diagram"></i> Projects</h2>
            
            <div className="project-card">
              <div className="project-header">
                <h3>MultiRoleShop - Multi-Role E-Commerce Platform</h3>
                <span className="project-date">Nov 2025</span>
              </div>
              <p>Built a Django-based e-commerce platform with multi-role support (Users, Vendors, Admins) featuring OTP authentication, product approval workflows, shopping cart, Razorpay secure online payments, role-based dashboards, secure transactions, product search/filtering, and analytics.</p>
              <p><strong>Tech Stack:</strong> Django, SQLite, HTML, CSS, JavaScript, Tailwind CSS, Razorpay API, SMTP, Pillow</p>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>Smart Home Automation System using ESP8266 and Android App</h3>
                <span className="project-date">July 2025</span>
              </div>
              <p>Designed a smart home automation system enabling remote control of electrical appliances (bulbs, fans, motor etc.) via Wi-Fi through a custom Android mobile app. Configured ESP8266 NodeMCU to process REST API commands using Django backend, with sync via Firebase.</p>
              <p><strong>Software Tech:</strong> Jetpack Compose (Kotlin), REST APIs, Firebase, Arduino IDE, HTTP Client</p>
              <p><strong>Hardware Tech:</strong> ESP8266 MCU, Relay Module, Bulb, Breadboard, Jumper Wires, Power Adapter</p>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>MyBlog - New Technology and Innovation Blog</h3>
                <span className="project-date">May 2025</span>
              </div>
              <p>Developed a responsive blogging platform with user authentication and CRUD operations for blog posts. Implemented RESTful API endpoints for seamless data retrieval and manipulation. Used MySQL with SQL queries to manage efficient data storage and retrieval.</p>
              <p><strong>Tech Stack:</strong> EJS, CSS, JavaScript, Node.js, Express.js, SQL</p>
            </div>
          </section>

          <section className="section profiles-section">
            <h2><i className="fas fa-code-branch"></i> Coding Profiles</h2>
            <div className="profiles-grid">
              <a href="https://github.com/rroyalpradeep" target="_blank" className="profile-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://leetcode.com/u/pradeep884/" target="_blank" className="profile-link">
                <i className="fas fa-code"></i> LeetCode
              </a>
              <a href="https://www.hackerrank.com/pradeepsonioffi1" target="_blank" className="profile-link">
                <i className="fab fa-hackerrank"></i> HackerRank
              </a>
              <a href="https://www.codechef.com/users/pradeep_soni" target="_blank" className="profile-link">
                <i className="fas fa-utensils"></i> CodeChef
              </a>
              <a href="https://codolio.com/profile/rroyalpradeep" target="_blank" className="profile-link">
                <i className="fas fa-code"></i> Codolio
              </a>
            </div>
          </section>

          <section className="section certifications-section">
            <h2><i className="fas fa-certificate"></i> Certifications</h2>
            <ul className="cert-list">
              <li><i className="fas fa-trophy"></i> 1st Runner up CODE – QUEST Hackathon, Lloyd Institute of Engineering and Technology (2023)</li>
              <li><i className="fas fa-medal"></i> Pitch Cypher – Lloyd Institute of Engineering and Technology (2024)</li>
              <li><i className="fas fa-clipboard"></i> Policy Workshop – Niti: The Policy Lab, Kirori Mal College, University of Delhi (2025)</li>
              <li><i className="fas fa-award"></i> 3rd Runner-up – HashHacks 7.0, Cluster of Innovation, University of Delhi (2025)</li>
              <li><i className="fas fa-certificate"></i> Data Structures & Algorithms in C/C++ (2024)</li>
            </ul>
          </section>

          <section className="section achievements-section">
            <h2><i className="fas fa-star"></i> Achievements & Awards</h2>
            <ul className="achievement-list">
              <li><i className="fas fa-certificate"></i> Earned recognition for securing four offer letters from different companies during campus placements — awarded for outstanding performance and multi-company selection (July 2025)</li>
              <li><i className="fas fa-check-circle"></i> Completed 300+ problems on LeetCode with 5 Badges</li>
              <li><i className="fas fa-trophy"></i> Secured 1st Runner-up position in Coding Competition – LIET (Dec 2023)</li>
              <li><i className="fas fa-hands-helping"></i> International Conference Volunteer – LIET (Feb 2024)</li>
            </ul>
          </section>
        </div>
        
        <div className="download-btn-container">
          <a href="/Pradeep_Soni_Resume.pdf" download="Pradeep_Soni_Resume.pdf" className="download-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

