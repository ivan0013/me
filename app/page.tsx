import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  // Get the base path from environment or default to '/me'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/me"

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className="container relative z-10">
          <div className="flex justify-end py-4">
            <ThemeToggle />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Iván Rodríguez Torres</h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground">Software Engineer</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Technical Lead with expertise in AI, microservices, and full-stack development. Building innovative
                solutions that drive business success.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
                >
                  Contact Me
                </Link>
                <Link
                  href="#experience"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
                >
                  View Experience
                </Link>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link href="https://github.com" className="hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:ivan.rodriguez.torres@outlook.com"
                  className="hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] w-[300px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-foreground/20 animate-rotate-slow" />
              <div className="absolute inset-[6px] rounded-full bg-muted flex items-center justify-center">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQFSC1pPS5lJ-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670257881033?e=1747872000&amp;v=beta&amp;t=JxdyKT0DliOh9xc8rM4lojHfDY8SU-g3yAUGMKw8bzg" style="
    width: 100%;
    height: auto;
    border-radius: 100%;
" alt="Profile photo"/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-24">
        {/* About Section */}
        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a Technical Lead with over 8 years of experience in software development, specializing in AI,
                microservices architecture, and full-stack development. Currently leading a team at Inditex, developing
                an automated product classification system that leverages LLMs and NLP algorithms.
              </p>
              <p className="text-muted-foreground">
                I thrive in fast-paced environments, tackling complex data-driven challenges and delivering solutions
                under tight deadlines. My experience spans from Android development to front-end engineering and AI
                research.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>A Coruña, Spain</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>(+34) 627912658</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="break-all">ivan.rodriguez.torres@outlook.com</span>
              </div>
              <div className="pt-4">
                <h3 className="font-medium mb-2">Languages</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Spanish & Galician (Native)</li>
                  <li>English (C1 - Cambridge FIRST Certificate)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Iván Rodríguez Torres. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#top" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

