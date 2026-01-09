import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Users, Video, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `3D Printing Training & Courses | ${siteConfig.name}`,
  description: "Learn 3D printing from experts. Beginner to advanced courses covering FDM, resin printing, 3D modeling, and more.",
};

const courses = [
  {
    title: "3D Printing Fundamentals",
    level: "Beginner",
    duration: "4 hours",
    price: "EGP 800",
    description: "Perfect for beginners. Learn the basics of FDM printing, slicing, and your first successful print.",
    topics: ["Printer anatomy", "Slicing basics", "First print", "Troubleshooting common issues"],
  },
  {
    title: "Advanced FDM Techniques",
    level: "Intermediate",
    duration: "6 hours",
    price: "EGP 1,200",
    description: "Take your FDM skills to the next level with advanced settings and multi-material printing.",
    topics: ["Advanced slicer settings", "Support strategies", "Multi-material printing", "Post-processing"],
  },
  {
    title: "Resin Printing Masterclass",
    level: "Intermediate",
    duration: "5 hours",
    price: "EGP 1,000",
    description: "Everything you need to know about resin printing, from setup to post-curing.",
    topics: ["Resin types", "Exposure settings", "Supports for resin", "Safety & curing"],
  },
  {
    title: "3D Modeling for Printing",
    level: "All Levels",
    duration: "8 hours",
    price: "EGP 1,500",
    description: "Learn to design your own 3D models optimized for printing using free software.",
    topics: ["Fusion 360 basics", "Design for printing", "Fixing mesh errors", "Parametric design"],
  },
];

const features = [
  { icon: Users, title: "Expert Instructors", description: "Learn from experienced professionals with years of industry experience" },
  { icon: Video, title: "Hands-On Practice", description: "Get practical experience with real printers and materials" },
  { icon: Award, title: "Certificate", description: "Receive a certificate upon completion of each course" },
  { icon: BookOpen, title: "Course Materials", description: "Take home comprehensive course materials and cheat sheets" },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-orange-500">Learn 3D Printing</span> From The Experts
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a complete beginner or looking to master advanced techniques,
              our courses will help you achieve your 3D printing goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                View Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Corporate Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Courses</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of courses designed for different skill levels
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.level === "Beginner" ? "bg-green-100 text-green-700" :
                      course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-500 mb-4">{course.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">What you'll learn:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-orange-500">{course.price}</span>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Corporate Training</h2>
            <p className="text-gray-400 mb-8">
              Need to train your team? We offer customized corporate training programs tailored to your
              specific needs and industry requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Request Quote
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Register for a Course</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Course *</label>
                <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Choose a course</option>
                  {courses.map((course) => (
                    <option key={course.title} value={course.title}>{course.title} - {course.price}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>Complete Beginner</option>
                  <option>Some Experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any specific topics you'd like to cover?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

