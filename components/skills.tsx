"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all")

  const skillCategories = [
    {
      id: "all",
      name: "All Skills",
    },
    {
      id: "languages",
      name: "Languages",
    },
    {
      id: "frontend",
      name: "Frontend",
    },
    {
      id: "backend",
      name: "Backend",
    },
    {
      id: "data",
      name: "Data & AI",
    },
    {
      id: "other",
      name: "Other",
    },
  ]

  const skills = [
    { name: "Python", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "Kotlin", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "TypeScript", category: "languages" },
    { name: "VueJS", category: "frontend" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "Android Development", category: "frontend" },
    { name: "WordPress", category: "frontend" },
    { name: "Spring Boot", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "gRPC", category: "backend" },
    { name: "Microservices", category: "backend" },
    { name: "MariaDB", category: "data" },
    { name: "MySQL", category: "data" },
    { name: "Redis", category: "data" },
    { name: "Neo4J", category: "data" },
    { name: "Solr", category: "data" },
    { name: "NLP", category: "data" },
    { name: "LLMs", category: "data" },
    { name: "Kafka", category: "backend" },
    { name: "Team Leadership", category: "other" },
    { name: "Mentoring", category: "other" },
    { name: "Web Scraping", category: "other" },
  ]

  const filteredSkills = activeTab === "all" ? skills : skills.filter((skill) => skill.category === activeTab)

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="p-6 bg-muted/50 rounded-lg">
            <div className="flex flex-wrap gap-2">
              {filteredSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1 text-sm bg-background text-foreground hover:bg-background/80 transition-colors"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
          <p className="text-muted-foreground">
            Experienced in building responsive, user-friendly interfaces with modern frameworks like VueJS. Also
            proficient in Android development with Kotlin and Java.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Backend & Microservices</h3>
          <p className="text-muted-foreground">
            Skilled in designing and implementing scalable microservice architectures using Spring Boot, FastAPI, Kafka,
            and various communication protocols.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold mb-4">AI & Data Engineering</h3>
          <p className="text-muted-foreground">
            Expertise in implementing AI solutions including LLMs and custom NLP algorithms. Proficient with various
            database technologies for different use cases.
          </p>
        </div>
      </div>
    </section>
  )
}

