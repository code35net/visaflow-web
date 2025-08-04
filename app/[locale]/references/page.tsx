"use client"

import { Star, ArrowRight, Building2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface LocaleReferencesPageProps {
  params: {
    locale: Locale
  }
}

export default function LocaleReferencesPage({ params }: LocaleReferencesPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Director",
      company: "Global Visa Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "VisaFlow CRM has transformed our operations completely. We've increased our application processing speed by 45% and our client satisfaction scores have never been higher. The document management system is exceptional.",
      results: {
        efficiency: "+45%",
        satisfaction: "98%",
        timesSaved: "15hrs/week",
      },
    },
    {
      name: "Dr. Michael Chen",
      title: "Managing Partner",
      company: "Pacific Immigration",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The security features give us complete peace of mind when handling sensitive client information. The automated workflows have reduced our processing time significantly, and the reporting features help us make data-driven decisions.",
      results: {
        efficiency: "+60%",
        satisfaction: "96%",
        timesSaved: "20hrs/week",
      },
    },
    {
      name: "Emma Rodriguez",
      title: "Operations Manager",
      company: "European Visa Center",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Before VisaFlow, we were drowning in paperwork and missed deadlines. Now everything is automated and organized. Our team can focus on what matters most - helping our clients achieve their visa goals.",
      results: {
        efficiency: "+55%",
        satisfaction: "99%",
        timesSaved: "18hrs/week",
      },
    },
    {
      name: "Ahmed Al-Rashid",
      title: "CEO",
      company: "Middle East Immigration Services",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The multilingual support and RTL interface make it perfect for our diverse client base. The system handles complex visa requirements effortlessly, and the customer support team is outstanding.",
      results: {
        efficiency: "+50%",
        satisfaction: "97%",
        timesSaved: "22hrs/week",
      },
    },
    {
      name: "Maria Santos",
      title: "Senior Consultant",
      company: "Latin America Visa Hub",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The integration capabilities are fantastic. We connected VisaFlow with our existing tools seamlessly. The API is well-documented and the development team was very helpful during implementation.",
      results: {
        efficiency: "+40%",
        satisfaction: "95%",
        timesSaved: "12hrs/week",
      },
    },
    {
      name: "James Wilson",
      title: "Director of Operations",
      company: "UK Immigration Experts",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The analytics and reporting features have given us insights we never had before. We can now predict busy periods, optimize our resources, and provide better service to our clients.",
      results: {
        efficiency: "+65%",
        satisfaction: "98%",
        timesSaved: "25hrs/week",
      },
    },
  ]

  const caseStudies = [
    {
      company: "Global Visa Solutions",
      industry: "Immigration Services",
      size: "50+ employees",
      challenge: "Manual processes causing delays and errors in visa applications",
      solution: "Implemented VisaFlow CRM with automated workflows and document management",
      results: [
        "45% faster application processing",
        "90% reduction in manual errors",
        "98% client satisfaction rate",
        "$50K annual cost savings",
      ],
    },
    {
      company: "Pacific Immigration",
      industry: "Legal Services",
      size: "25+ employees",
      challenge: "Difficulty tracking multiple visa types and complex requirements",
      solution: "Deployed comprehensive tracking system with custom workflows",
      results: [
        "60% improvement in case management",
        "100% compliance with regulations",
        "35% increase in successful applications",
        "20 hours saved per week",
      ],
    },
    {
      company: "European Visa Center",
      industry: "Consulting Services",
      size: "30+ employees",
      challenge: "Poor client communication and document organization",
      solution: "Integrated communication hub and secure document storage",
      results: [
        "55% better client engagement",
        "Zero document security incidents",
        "40% faster document retrieval",
        "99% client satisfaction",
      ],
    },
  ]

  const companyLogos = [
    { name: "Global Visa Solutions", logo: "/placeholder.svg?height=60&width=120&text=Global+Visa" },
    { name: "Pacific Immigration", logo: "/placeholder.svg?height=60&width=120&text=Pacific+Immigration" },
    { name: "European Visa Center", logo: "/placeholder.svg?height=60&width=120&text=European+Visa" },
    { name: "Middle East Immigration", logo: "/placeholder.svg?height=60&width=120&text=ME+Immigration" },
    { name: "Latin America Hub", logo: "/placeholder.svg?height=60&width=120&text=LA+Hub" },
    { name: "UK Immigration Experts", logo: "/placeholder.svg?height=60&width=120&text=UK+Experts" },
    { name: "Asia Pacific Visas", logo: "/placeholder.svg?height=60&width=120&text=AP+Visas" },
    { name: "Nordic Immigration", logo: "/placeholder.svg?height=60&width=120&text=Nordic+Immigration" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-blue-600">500+ Visa Offices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how visa offices around the world are transforming their operations with VisaFlow CRM. Read real
              stories from real customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath("/contact")}>
                <Button size="lg" className="text-lg px-8 py-3">
                  {t(translations, "homepage.startFreeTrial")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {t(translations, "homepage.schedulDemo")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Carousel */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trusted by Leading Visa Offices Worldwide</h2>
          </div>
          <div className="relative">
            <div className="flex animate-scroll hover:pause-animation">
              {/* First set of logos */}
              {companyLogos.map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((company, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                  <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what visa office professionals say about VisaFlow CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{testimonial.results.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.results.satisfaction}</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{testimonial.results.timesSaved}</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showing how VisaFlow CRM has helped visa offices achieve their goals.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <Building2 className="h-8 w-8 text-blue-600" />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span>{study.industry}</span>
                            <span>•</span>
                            <span>{study.size}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Visa Offices</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Applications Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your visa office operations? Start your free trial today and see why hundreds of visa
            offices trust VisaFlow CRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath("/contact")}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                {t(translations, "homepage.startFreeTrial")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              {t(translations, "homepage.schedulDemo")}
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
