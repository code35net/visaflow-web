import { Star, Users, Globe, TrendingUp, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { defaultLocale } from "@/i18n/config"
import { getTranslation } from "@/i18n/utils"

export default function ReferencesPage() {
  const locale = defaultLocale
  const translations = getTranslation(locale)

  const stats = [
    { icon: Users, label: "Active Users", value: "10,000+" },
    { icon: Globe, label: "Countries", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: Award, label: "Awards Won", value: "15" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Director",
      company: "Global Visa Services",
      content:
        "VisaFlow CRM has transformed our operations. We've seen a 40% increase in efficiency and our clients love the transparency.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Ahmed Al-Rashid",
      role: "CEO",
      company: "EuroVisa Consultants",
      content:
        "The automation features have saved us countless hours. Our team can now focus on providing better service to our clients.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=AR",
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Manager",
      company: "Prime Immigration",
      content:
        "Customer support is exceptional. The team is always ready to help and the platform is incredibly user-friendly.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=MR",
    },
    {
      name: "David Chen",
      role: "Founder",
      company: "Visa Express Ltd",
      content:
        "ROI was evident within the first month. VisaFlow CRM has become an essential part of our daily operations.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=DC",
    },
    {
      name: "Lisa Thompson",
      role: "Managing Director",
      company: "International Gateway",
      content:
        "The reporting features give us insights we never had before. We can make data-driven decisions with confidence.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=LT",
    },
    {
      name: "Robert Kim",
      role: "Senior Partner",
      company: "Swift Visa Solutions",
      content:
        "Integration was seamless and the training provided was comprehensive. Our team was up and running in no time.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=RK",
    },
  ]

  const caseStudies = [
    {
      company: "Global Visa Services",
      industry: "Immigration Consulting",
      challenge: "Managing 500+ applications monthly with manual processes",
      solution: "Implemented VisaFlow CRM with automated workflows",
      results: ["40% increase in processing speed", "60% reduction in errors", "25% growth in client satisfaction"],
      image: "/placeholder.svg?height=200&width=300&text=Global+Visa+Services",
    },
    {
      company: "EuroVisa Consultants",
      industry: "European Immigration",
      challenge: "Lack of visibility into application status",
      solution: "Deployed comprehensive tracking and reporting system",
      results: ["100% application visibility", "30% faster processing", "50% reduction in client inquiries"],
      image: "/placeholder.svg?height=200&width=300&text=EuroVisa+Consultants",
    },
    {
      company: "Prime Immigration",
      industry: "Corporate Immigration",
      challenge: "Difficulty managing multiple office locations",
      solution: "Centralized platform with role-based access",
      results: ["Unified operations across 5 offices", "35% improvement in collaboration", "20% cost reduction"],
      image: "/placeholder.svg?height=200&width=300&text=Prime+Immigration",
    },
  ]

  const awards = [
    {
      title: "Best CRM Solution 2024",
      organization: "Immigration Tech Awards",
      year: "2024",
      description: "Recognized for innovation in immigration management software",
    },
    {
      title: "Customer Choice Award",
      organization: "Software Review Platform",
      year: "2024",
      description: "Highest rated CRM solution by customer satisfaction",
    },
    {
      title: "Innovation Excellence",
      organization: "Tech Innovation Council",
      year: "2023",
      description: "Outstanding achievement in workflow automation",
    },
    {
      title: "Industry Leader",
      organization: "Immigration Business Journal",
      year: "2023",
      description: "Leading provider of immigration management solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-blue-600">Thousands</span> Worldwide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how visa offices around the world are transforming their operations with VisaFlow CRM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Join Our Success Stories
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Visa Offices Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful visa offices that have chosen VisaFlow CRM to streamline their operations
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-8 min-w-full">
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Global Visa Services</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">EuroVisa Consultants</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Prime Immigration</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Visa Express Ltd</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">International Gateway</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Swift Visa Solutions</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Elite Immigration</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Apex Visa Group</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 min-w-full">
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Global Visa Services</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">EuroVisa Consultants</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Prime Immigration</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Visa Express Ltd</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">International Gateway</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Swift Visa Solutions</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Elite Immigration</span>
                </div>
                <div className="flex-shrink-0 w-48 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-medium">Apex Visa Group</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">+500 more visa offices worldwide</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from visa offices that have transformed their operations with VisaFlow CRM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showing how VisaFlow CRM has transformed visa office operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{study.industry}</Badge>
                  <CardTitle className="text-xl mb-3">{study.company}</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VisaFlow CRM has been recognized by leading industry organizations for excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg mb-2">{award.title}</CardTitle>
                  <p className="text-blue-600 font-semibold mb-2">{award.organization}</p>
                  <Badge variant="secondary" className="mb-3">
                    {award.year}
                  </Badge>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your journey with VisaFlow CRM today and see why thousands of visa offices trust us worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
