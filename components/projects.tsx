"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Eye } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Get the base path from environment or default to '/me'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/me"

  const projects = [
    {
      id: "access-control",
      title: "Access Control System",
      description:
        'A system that locks or unlocks a door based on a user authentication QR. This project was successfully implemented at "LMtrainers" gym.',
      year: "2023",
      image: `${basePath}/placeholder.svg?height=300&width=600`,
      technologies: ["QR Authentication", "Access Control", "Security"],
    },
    {
      id: "vr-kinect",
      title: "VR Kinect V2 Game",
      description:
        'As my final degree project, I developed a Kinect V2 JavaScript game. It was sold to "Femxa formación" after completion.',
      year: "2015",
      image: `${basePath}/placeholder.svg?height=300&width=600`,
      technologies: ["VR", "Kinect V2", "JavaScript", "Game Development"],
    },
    {
      id: "product-classification",
      title: "Automated Product Classification",
      description:
        "An AI-powered system that automatically classifies products based on their features, making them searchable without human intervention.",
      year: "2022",
      image: `${basePath}/placeholder.svg?height=300&width=600`,
      technologies: ["LLMs", "NLP", "Microservices", "Classification"],
    },
  ]

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 500ms",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">{project.year}</Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <Lock className="h-4 w-4 mr-1" />
                <span>Private Project</span>
              </div>
              <div className="flex items-center text-sm text-primary hover:underline cursor-pointer">
                <Eye className="h-4 w-4 mr-1" />
                <span>View Details</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

