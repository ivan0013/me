export default function Education() {
  const education = [
    {
      degree: "Master's Degree in Artificial Intelligence Research",
      institution: "University Meléndez Pelayo",
      details: "Promoted by the AEPIA (Spanish Association for Artificial Intelligence)",
      period: "2016 - 2017",
    },
    {
      degree: "Computer Engineering",
      institution: "University of Santiago de Compostela",
      details: "",
      period: "2011 - 2015",
    },
  ]

  const courses = [
    {
      name: "Big Data Scientist using Cloudera",
      provider: "Cloudera",
      duration: "60 hours",
      year: "2020",
    },
    {
      name: "Building a system, on IoT environment, to improve energy efficiency",
      provider: "CNTG",
      duration: "40 hours",
      year: "2015",
    },
  ]

  return (
    <section id="education" className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Education & Training</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Academic Education</h3>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{item.degree}</h4>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground">{item.institution}</p>
                {item.details && <p className="text-sm text-muted-foreground mt-2">{item.details}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Professional Courses</h3>

          <div className="space-y-6">
            {courses.map((course, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{course.name}</h4>
                  <span className="text-sm text-muted-foreground">{course.year}</span>
                </div>
                <p className="text-muted-foreground">{course.provider}</p>
                <p className="text-sm text-muted-foreground mt-2">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

