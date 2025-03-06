"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown } from "lucide-react"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("inditex")

  const experiences = [
    {
      id: "inditex",
      role: "Technical Lead",
      company: "Inditex",
      period: "Nov 2021 - Present",
      description:
        "Leading a team of five people developing an automated product classification system. With our solution, Inditex is able to classify each product into several categories according to its features, making it searchable on the web without human intervention.",
      achievements: [
        "Implemented LLMs to create product and grids descriptions",
        "Designed microservice architecture using Kafka, GRPC and REST APIs",
        "Utilized MariaDB, Redis, Neo4J and Solr for storage",
        "Developed a custom NLP algorithm",
        "Built microservices with FastAPI and Spring Boot",
      ],
      skills: [
        "LLMs",
        "Kafka",
        "GRPC",
        "REST APIs",
        "MariaDB",
        "Redis",
        "Neo4J",
        "Solr",
        "NLP",
        "FastAPI",
        "Spring Boot",
      ],
    },
    {
      id: "sunmedia",
      role: "Senior Front-End Engineer",
      company: "SunMedia",
      period: "Oct 2020 - Nov 2021",
      description:
        "Initially worked on multiple legacy front-end projects built with VueJS 2, ensuring their maintenance and optimization.",
      achievements: [
        "Led the development of a new front-end project using VueJS 3",
        "Took charge of architecture and implementation",
        "Managed and mentored a team of two junior developers",
        "Provided technical guidance and support",
      ],
      skills: ["VueJS 2", "VueJS 3", "Team Leadership", "Mentoring"],
    },
    {
      id: "imagames",
      role: "Software Developer",
      company: "Imagames Gamification Services",
      period: "Jan 2018 - Oct 2020",
      description:
        "In charge of all processes involving creating and publishing Android applications to the Play Store.",
      achievements: [
        "Developed Android applications using Kotlin",
        "Maintained legacy Java code",
        "Worked as front-end developer since Jun 2018",
        "Maintained existing web administrator and added new features using VueJS",
      ],
      skills: ["Kotlin", "Java", "Android", "VueJS", "Web Development"],
    },
    {
      id: "citius",
      role: "Software Engineer",
      company: "CiTIUS",
      period: "Jan 2017 - Jan 2018",
      description:
        'Worked on "CompMT" under the direction of Pablo Gamallo. The main goal was transforming a translation process that lasted more than two hours to a web application.',
      achievements: [
        "Reduced translation time from 2+ hours to 5-10 seconds",
        "Developed web application for translation processing",
      ],
      skills: ["Web Development", "Translation Processing", "Performance Optimization"],
    },
    {
      id: "tesla",
      role: "Fullstack Developer",
      company: "Tesla Technologies & Software",
      period: "March 2015 - June 2016",
      description:
        "In charge of several WordPress developments, MySQL database administration, Python web scraping, and more.",
      achievements: [
        "Developed WordPress websites",
        "Administered MySQL databases",
        "Created Python web scraping solutions",
      ],
      skills: ["WordPress", "MySQL", "Python", "Web Scraping", "Full Stack Development"],
    },
  ]

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div
              className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              onClick={() => toggleExpand(exp.id)}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-lg text-muted-foreground">@ {exp.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`} />
            </div>
            {expandedId === exp.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="pt-4 border-t">
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>

                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

