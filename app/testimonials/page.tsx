"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Star,
  ArrowLeft,
  Quote,
  Users,
  Building2,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function TestimonialsPage() {
  const [currentLang, setCurrentLang] = useState<Language>("tr")
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) setCurrentLang(savedLang)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail as Language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  // Customer logos data
  const customerLogos = [
    { name: "Global Visa Services", logo: "/placeholder.svg?height=80&width=200&text=Global+Visa" },
    { name: "EuroTravel Agency", logo: "/placeholder.svg?height=80&width=200&text=EuroTravel" },
    { name: "Visa Express", logo: "/placeholder.svg?height=80&width=200&text=Visa+Express" },
    { name: "International Consultancy", logo: "/placeholder.svg?height=80&width=200&text=International" },
    { name: "TravelWise", logo: "/placeholder.svg?height=80&width=200&text=TravelWise" },
    { name: "Visa Solutions", logo: "/placeholder.svg?height=80&width=200&text=Visa+Solutions" },
    { name: "WorldBridge", logo: "/placeholder.svg?height=80&width=200&text=WorldBridge" },
    { name: "Premier Visa", logo: "/placeholder.svg?height=80&width=200&text=Premier+Visa" },
    { name: "Global Gateway", logo: "/placeholder.svg?height=80&width=200&text=Global+Gateway" },
    { name: "Visa Masters", logo: "/placeholder.svg?height=80&width=200&text=Visa+Masters" },
    { name: "Travel Connect", logo: "/placeholder.svg?height=80&width=200&text=Travel+Connect" },
    { name: "Visa Pro", logo: "/placeholder.svg?height=80&width=200&text=Visa+Pro" },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      position: "Genel Müdür",
      company: "Global Visa Services",
      content:
        "VisaFlow CRM sayesinde müşteri takibimiz %300 iyileşti. Artık hiçbir başvuru kaybolmuyor ve müşterilerimiz sürekli bilgilendiriliyor.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=AY",
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "EuroTravel Agency",
      content:
        "The appointment system has revolutionized our workflow. Our customers love the online booking feature and we've reduced no-shows by 60%.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      name: "Mehmet Özkan",
      position: "Kurucu Ortak",
      company: "Visa Express",
      content:
        "Belge yönetimi özelliği inanılmaz. Artık tüm belgeler güvenli ve organize. Arama yapmak saniyeler sürüyor.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=MO",
    },
    {
      name: "Elena Rodriguez",
      position: "Director",
      company: "International Consultancy",
      content:
        "The reporting features give us insights we never had before. We can now make data-driven decisions and optimize our processes.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
    },
    {
      name: "Can Demir",
      position: "İş Geliştirme Müdürü",
      company: "TravelWise",
      content:
        "Mobil uygulama sayesinde ofis dışındayken bile tüm işlemleri takip edebiliyorum. Müşteri memnuniyeti arttı.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=CD",
    },
    {
      name: "Maria Silva",
      position: "CEO",
      company: "Visa Solutions",
      content:
        "Implementation was smooth and the support team is exceptional. Our productivity increased by 40% in the first month.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=MS",
    },
  ]

  // Auto-rotate logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % Math.ceil(customerLogos.length / 6))
    }, 3000)
    return () => clearInterval(interval)
  }, [customerLogos.length])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleLogos = () => {
    const logosPerSlide = 6
    const start = currentLogoIndex * logosPerSlide
    return customerLogos.slice(start, start + logosPerSlide)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation(currentLang, "backToHome")}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "trustedByExperts")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "testimonialsHeroSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                ⭐ 4.9/5 {getTranslation(currentLang, "averageRating")}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
                🏢 150+ {getTranslation(currentLang, "activeOffices")}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-lg px-4 py-2">
                📈 98% {getTranslation(currentLang, "customerSatisfaction")}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "trustedByLeadingCompanies")}
            </h2>
            <p className="text-gray-600">{getTranslation(currentLang, "joinSuccessfulBusinesses")}</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
                {getVisibleLogos().map((customer, index) => (
                  <div
                    key={`${currentLogoIndex}-${index}`}
                    className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={customer.logo || "/placeholder.svg"}
                      alt={customer.name}
                      className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(customerLogos.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLogoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentLogoIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">{getTranslation(currentLang, "activeVisaOffices")}</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">{getTranslation(currentLang, "happyCustomers")}</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">{getTranslation(currentLang, "processedApplications")}</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">{getTranslation(currentLang, "successRate")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "whatCustomersSay")}
            </h2>
            <p className="text-xl text-gray-600">{getTranslation(currentLang, "realExperiencesFromUsers")}</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="p-8 md:p-12 shadow-xl">
              <div className="flex items-start space-x-4">
                <Quote className="h-12 w-12 text-blue-600 flex-shrink-0 opacity-50" />
                <div className="flex-1">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonials[currentTestimonialIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonialIndex].content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentTestimonialIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonialIndex].name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentTestimonialIndex].name}
                        </h4>
                        <p className="text-gray-600">{testimonials[currentTestimonialIndex].position}</p>
                        <p className="text-blue-600 font-medium">{testimonials[currentTestimonialIndex].company}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "successStories")}
            </h2>
            <p className="text-xl text-gray-600">{getTranslation(currentLang, "howBusinessesGrow")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{getTranslation(currentLang, "productivityIncrease")}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">+65%</div>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "averageProductivityIncrease")}</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{getTranslation(currentLang, "customerSatisfaction")}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">+40%</div>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "higherCustomerSatisfaction")}</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{getTranslation(currentLang, "errorReduction")}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">-80%</div>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "fewerProcessingErrors")}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "joinSuccessfulBusinesses")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "startYourSuccessStory")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "startFreeTrial")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {getTranslation(currentLang, "requestDemo")}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {getTranslation(currentLang, "noCreditCard")} • {getTranslation(currentLang, "cancelAnytime")} •{" "}
              {getTranslation(currentLang, "support24_7")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">VisaFlow CRM</span>
              </div>
              <p className="text-gray-400">{getTranslation(currentLang, "crmSolutionDesignedForVisaOffices")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "product")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "features")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "pricing")}
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "roadmap")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "support")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "helpCenter")}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "contact")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "apiDocumentation")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "company")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VisaFlow CRM. {getTranslation(currentLang, "allRightsReserved")}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
