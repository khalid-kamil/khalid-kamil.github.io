'use client'

import { useState } from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon, MailIcon, AppleIcon, XIcon, FileTextIcon } from "lucide-react"

type Project = {
  name: string
  description: string
  icon: string
  screenshot: string
  expandedDescription: string
  role: string
  keyFeatures: string[]
  technicalChallenges: string[]
  technologies: string[]
  appStoreLink?: string
  githubLink?: string
  screenshots: string[]
  performanceMetrics?: string
  learnings: string
}

const projects: Project[] = [
  {
    name: "Pillars",
    description: "A prayer times and qibla app for iPhone and Apple Watch with habit tracking",
    icon: "/khalid-kamil.github.io/pillars.jpg?height=60&width=60",
    screenshot: "/khalid-kamil.github.io/pillars-banner.png?height=200&width=400",
    expandedDescription: "FitTrack is a comprehensive fitness tracking application that provides users with personalized workout plans, progress tracking, and health insights.",
    role: "Lead iOS Developer",
    keyFeatures: [
      "Personalized workout plan generation",
      "Real-time exercise tracking",
      "Integration with HealthKit for holistic health data",
      "Social features for connecting with friends and sharing achievements"
    ],
    technicalChallenges: [
      "Implementing complex algorithms for workout plan generation",
      "Ensuring seamless HealthKit integration and data synchronization",
      "Optimizing performance for real-time tracking features"
    ],
    technologies: ["Swift", "SwiftUI", "WidgetKit", "WatchConnectivity", "UserDefaults", "Git", "Xcode Cloud", "Flutter"],
    appStoreLink: "https://apps.apple.com/us/app/pillars-prayer-times-qibla/id1559086853",
    // githubLink: "https://github.com/johndoe/fittrack",
    screenshots: [
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200"
    ],
    performanceMetrics: "4.8 star rating on the App Store with over 100,000 downloads",
    learnings: "Through this project, I deepened my understanding of HealthKit integration, improved my skills in creating intuitive user interfaces with SwiftUI, and learned valuable lessons about optimizing performance in data-intensive applications."
  },
  {
    name: "Deep Connect",
    description: "A conversation card game to foster deeper connections",
    icon: "/khalid-kamil.github.io/deep-connect.png?height=60&width=60",
    screenshot: "/khalid-kamil.github.io/deep-connect-banner.png?height=200&width=400",
    expandedDescription: "CookBook is a comprehensive recipe management and meal planning application designed to simplify cooking and nutrition tracking for users.",
    role: "iOS Developer",
    keyFeatures: [
      "Recipe creation and management",
      "Intelligent meal planning based on dietary preferences",
      "Grocery list generation",
      "Nutritional information tracking"
    ],
    technicalChallenges: [
      "Designing a flexible data model for recipes and meal plans",
      "Implementing efficient search and filtering for large recipe databases",
      "Creating a smooth and intuitive UI for complex meal planning interactions"
    ],
    technologies: ["Swift", "SwiftUI", "Animations", "SwiftLint", "MVVM"],
    appStoreLink: "https://apps.apple.com/us/app/deep-connect/id6466749665",
    githubLink: "https://github.com/khalid-kamil/DeepConnect.git",
    screenshots: [
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200"
    ],
    performanceMetrics: "4.6 star rating on the App Store with over 50,000 downloads",
    learnings: "This project enhanced my skills in working with complex data relationships in Core Data, improved my understanding of CloudKit for data synchronization, and taught me valuable lessons about creating intuitive interfaces for feature-rich applications."
  },
  {
    name: "LittleLemon Restaurant",
    description: "A food ordering app with user authentication and persistent storage",
    icon: "/khalid-kamil.github.io/little-lemon.png?height=60&width=60",
    screenshot: "/khalid-kamil.github.io/little-lemon-banner.png?height=200&width=400",
    expandedDescription: "WeatherNow is a sleek and accurate weather forecasting app that provides users with real-time weather updates, severe weather alerts, and location-based forecasts.",
    role: "Solo iOS Developer",
    keyFeatures: [
      "Real-time weather updates",
      "Location-based forecasts",
      "Severe weather alerts and notifications",
      "Interactive radar maps"
    ],
    technicalChallenges: [
      "Integrating and processing data from multiple weather APIs",
      "Implementing efficient background fetch for timely notifications",
      "Creating smooth animations for weather transitions and radar maps"
    ],
    technologies: ["Swift", "SwiftUI", "CoreData", "Firebase Authentication", "URLSession", "REST API", "SPM", "Git"],
    // appStoreLink: "https://apps.apple.com/us/app/weathernow",
    githubLink: "https://github.com/khalid-kamil/littlelemon-project.git",
    screenshots: [
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200",
      "/khalid-kamil.github.io/placeholder.svg?height=400&width=200"
    ],
    performanceMetrics: "4.7 star rating on the App Store with over 75,000 downloads",
    learnings: "This project significantly improved my skills in working with location services and map integrations. I gained valuable experience in processing and displaying real-time data, and learned how to create engaging visualizations for complex weather information."
  }
]

function ProjectOverlay({ project, onClose }: { project: Project, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold text-[#1C71F2]">{project.name}</h2>
          <Button variant="ghost" onClick={onClose}><XIcon /></Button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-lg">{project.expandedDescription}</p>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Your Role</h3>
            <p>{project.role}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Challenges</h3>
            <ul className="list-disc pl-5">
              {project.technicalChallenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Technologies and Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} className="bg-[#1C71F2]/10 text-[#1C71F2] hover:bg-[#1C71F2]/20">{tech}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            {project.appStoreLink && (
              <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer" className="text-[#1C71F2] hover:underline flex items-center">
                <AppleIcon className="w-4 h-4 mr-1" />
                View on App Store
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#1C71F2] hover:underline flex items-center">
                <GithubIcon className="w-4 h-4 mr-1" />
                View on GitHub
              </a>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {project.screenshots.map((screenshot, index) => (
                <img key={index} src={screenshot} alt={`${project.name} screenshot ${index + 1}`} className="w-48 h-auto rounded-lg shadow-md" />
              ))}
            </div>
          </div>
          
          {project.performanceMetrics && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
              <p>{project.performanceMetrics}</p>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-semibold mb-2">What I Learned</h3>
            <p>{project.learnings}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/khalid-kamil.github.io/khalid-profile-image.png?height=200&width=200"
            alt="Khalid Kamil profile picture"
            className="w-40 h-40 rounded-full mb-4"
            // className="w-40 h-40 rounded-full border-4 border-[#1C71F2] mb-4"
          />
          <h1 className="text-4xl font-bold mb-4 text-[#1C71F2]">Khalid Kamil</h1>
          <p className="text-xl text-muted-foreground mb-4">Passionate iOS Developer | Ex-Apple App Store Editor</p>
          <p className="max-w-2xl text-center mb-4">
            With 1-2 years of experience in iOS development, I use my technical skills and experience as an App Store Editor 
            to create user-centric mobile applications that combine elegant design with robust functionality.
          </p>
          <p className="max-w-2xl text-center mb-8">
            My expertise spans from conceptualization to deployment, ensuring each project delivers exceptional value 
            to users and stakeholders alike.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            className="hover:border-[#1C71F2] hover:text-[#1C71F2] transition-colors"
            onClick={() => window.open('https://www.github.com/khalid-kamil/', '_blank')}
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="hover:border-[#1C71F2] hover:text-[#1C71F2] transition-colors"
            onClick={() => window.open('https://www.linkedin.com/in/khalid-kamil/', '_blank')}
          >
            <LinkedinIcon className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            className="hover:border-[#1C71F2] hover:text-[#1C71F2] transition-colors"
            onClick={() => window.open('/khalid-kamil.github.io/khalid-resume.pdf', '_blank')}
          >
            <FileTextIcon className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#1C71F2]">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="border-[#1C71F2]/20 hover:border-[#1C71F2]/50 transition-colors cursor-pointer" onClick={() => setSelectedProject(null)}>
                <CardHeader className="flex flex-row items-start space-x-4">
                  <img
                    src={project.icon}
                    alt={`${project.name} app icon`}
                    className="w-16 h-16 rounded-xl"
                  />
                  <div>
                    <CardTitle className="text-[#1C71F2]">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex space-x-2 mt-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        className="bg-[#1C71F2] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#1C71F2]/90 transition-colors" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a 
                        href={project.appStoreLink} 
                        className="bg-[#1C71F2] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#1C71F2]/90 transition-colors" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        App Store
                      </a>
                    )}
                  </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.screenshot}
                    alt={`${project.name} app screenshot`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-sm mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-[#1C71F2]/10 text-[#1C71F2] hover:bg-[#1C71F2]/20">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#1C71F2]">Contact</h2>
          <Card className="border-[#1C71F2]/20">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 mr-4 text-[#1C71F2]" />
                <span>khalidkamil@icloud.com</span>
              </div>
              <Button 
                className="bg-[#1C71F2] hover:bg-[#1C71F2]/90" 
                onClick={() => window.open('mailto:khalidkamil@icloud.com?subject=Hey!')}
              >Get in touch</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Khalid Kamil. All rights reserved.</p>
      </footer>

      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}