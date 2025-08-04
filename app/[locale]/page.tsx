import { ArrowRight, Calendar, CheckCircle, FileText, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface LocaleHomePageProps {
  params: {
    locale: Locale
  }
}

export default function LocaleHomePage({ params }: LocaleHomePageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  // Calculate pricing
  const monthlyPrice = 69
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8) // 20% off
  const additionalUserPrice = Math.round(monthlyPrice * 0.7) // 30% off

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                {t(translations, "homepage.badge")}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t(translations, "homepage.heroTitle")}{" "}
                <span className="text-blue-600">{t(translations, "homepage.heroTitleHighlight")}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {t(translations, "homepage.heroDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={getLocalizedPath("/contact")}>
                  <Button size="lg" className="text-lg px-8 py-3">
                    {t(translations, "homepage.startFreeTrial")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                  {t(translations, "homepage.watchDemo")}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">{t(translations, "homepage.freeTrialNote")}</p>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Visa office team using VisaFlow CRM"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t(translations, "homepage.featuresTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(translations, "homepage.featuresDescription")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{t(translations, "homepage.clientManagement")}</CardTitle>
                <CardDescription>{t(translations, "homepage.clientManagementDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>{t(translations, "homepage.applicationTracking")}</CardTitle>
                <CardDescription>{t(translations, "homepage.applicationTrackingDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>{t(translations, "homepage.appointmentScheduling")}</CardTitle>
                <CardDescription>{t(translations, "homepage.appointmentSchedulingDesc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href={getLocalizedPath("/features")}>
              <Button size="lg" variant="outline">
                {t(translations, "homepage.viewAllFeatures")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">{t(translations, "homepage.visaOffices")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">{t(translations, "homepage.applicationsProcessed")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">{t(translations, "homepage.customerSatisfaction")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">{t(translations, "homepage.supportAvailable")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t(translations, "homepage.testimonialsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t(translations, "homepage.testimonialsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "VisaFlow CRM has transformed our operations completely. We've increased our application processing
                  speed by 45% and our client satisfaction scores have never been higher."
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Director, Global Visa Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The document management system is exceptional. We handle sensitive information for thousands of
                  clients, and VisaFlow's security features give us complete peace of mind."
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Dr. Michael Chen"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Michael Chen</div>
                    <div className="text-sm text-gray-600">Managing Partner, Pacific Immigration</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Before VisaFlow, we were drowning in paperwork and missed deadlines. Now everything is automated and
                  organized. Our team can focus on what matters most."
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emma Rodriguez"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Emma Rodriguez</div>
                    <div className="text-sm text-gray-600">Operations Manager, European Visa</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href={getLocalizedPath("/references")}>
              <Button size="lg" variant="outline">
                {t(translations, "homepage.readMoreStories")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t(translations, "homepage.pricingTitle")}
            </h2>
            <p className="text-xl text-gray-600">{t(translations, "homepage.pricingDescription")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.monthly")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €{monthlyPrice}
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perMonth")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.monthlyDesc")}</CardDescription>
                <p className="text-sm text-gray-500">{t(translations, "homepage.billedMonthly")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.unlimitedClients")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.emailSupport")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.documentStorage")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.apiAccess")}
                  </li>
                </ul>
                <Link href={getLocalizedPath("/contact")}>
                  <Button className="w-full mt-6">{t(translations, "nav.getStarted")}</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                {t(translations, "homepage.mostPopular")}
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.yearly")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €{yearlyPrice}
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perYear")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.yearlyDesc")}</CardDescription>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-gray-500">{t(translations, "homepage.billedYearly")}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {t(translations, "homepage.savePercent")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.unlimitedClients")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.phoneSupport")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.documentStorage")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.advancedAnalytics")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.prioritySupport")}
                  </li>
                </ul>
                <Link href={getLocalizedPath("/contact")}>
                  <Button className="w-full mt-6">{t(translations, "nav.getStarted")}</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Additional User */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.additionalUser")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €{additionalUserPrice}
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perUser")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.additionalUserDesc")}</CardDescription>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-gray-500">{t(translations, "homepage.billedPerUser")}</p>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {t(translations, "homepage.additionalUserDiscount")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.teamCollaboration")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.customIntegrations")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.onboarding")}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.training")}
                  </li>
                </ul>
                <Link href={getLocalizedPath("/contact")}>
                  <Button className="w-full mt-6">{t(translations, "homepage.contactSales")}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t(translations, "homepage.ctaTitle")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t(translations, "homepage.ctaDescription")}</p>
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
    </div>
  )
}
