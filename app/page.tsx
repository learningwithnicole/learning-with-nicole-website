import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Clock,
  Award,
  SquareArrowOutUpRight,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"
import SiteFooter from "./view/site-footer"
import { courses } from "./content/courses"
import CourseCard from "./view/courseCard"
import { contact } from "./content/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{contact.service.name}</h1>
              <p className="text-sm text-gray-600">{contact.service.description}</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </a>
            <a href="#courses" className="text-gray-700 hover:text-orange-600 transition-colors">
              Courses
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Apply
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
            Professional • Minimalist • Cheerful Courses
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start Your Future in {" "}
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Childcare, Business and Admin
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our adventure in shaping young minds starts here! Professional training designed to help you excel in childcare, business management, and assessor career fields in London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
            >
              <a href="#courses">
                Explore Certified Courses
              </a>
            </Button>

            {/* <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent"
            >
              <a href="#features">Features</a>
            </Button> */}
          </div>
          <a className="md:flex items-center justify-center mt-4" href="#contact">
            <ShieldCheck size={20} className="inline-block text-gray-500" />
            <p className="text-sm text-gray-500 underline"> 14-Day Money-Back Guarantee</p>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn from experienced professionals in early childhood education</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with our comprehensive online platform</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Diploma</h3>
              <p className="text-gray-600">Earn a recognised qualification while studying or working</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[6fr_4fr] gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-600">About</span> Me
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hey! My name is Nicole, as your cheerful assessor in London, I'll help you conquer levels 2 to 5 in
                childcare. Let's make learning a fun adventure!
              </p>
              <p className="text-gray-600 mb-8">
                With years of experience in early childhood education, I'm passionate about helping aspiring childcare
                professionals develop the skills and knowledge they need to make a positive impact on young lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  Level 2 Certified
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                  Level 3 Certified
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Level 5 Certified
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl p-8">
                <Image
                  src="/profile-nicole.jpg?height=400&width=400"
                  alt="Nicole - Your Childcare Course Instructor"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-full"
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section id="courses" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certified Diploma Courses</h2>
          <p className="text-xl text-gray-600 mb-12">Choose the level that matches your career goals</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (CourseCard(index, course)))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started with Confidence</h2>
          <p className="text-xl text-gray-600 mb-8 break-all">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              14-Day Risk-Free Guarantee
            </span>
            <br />
            We're so confident you'll love it that we give you two weeks to try it out.<br />
            If you don't, simply let us know and we'll give you a full refund. <br /><br />
            No questions asked. It's that easy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
            >
              <a href="https://forms.gle/znCyyacUowmaXJf2A" target="_blank" rel="noopener noreferrer">
                <SquareArrowOutUpRight className="inline-block" /> Apply Here
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
