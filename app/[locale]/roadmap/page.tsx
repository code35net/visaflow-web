import { Calendar, CheckCircle, Clock, ArrowRight, Target, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface LocaleRoadmapPageProps {
  params: {
    locale: Locale
  }
}

export default function LocaleRoadmapPage({ params }: LocaleRoadmapPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  const roadmapItems = [
    {
      quarter: "Q1 2024",
      status: "completed",
      title: "Core CRM Features",
      description: "Complete client management, application tracking, and document storage system.",
      features: ["Client Database", "Application Workflow", "Document Management", "Basic Reporting"],
    },
    {
      quarter: "Q2 2024",
      status: "completed",
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics dashboard with business insights.",
      features: ["Advanced Reports", "Performance Metrics", "Revenue Analytics", "Success Rate Tracking"],
    },
    {
      quarter: "Q3 2024",
      status: "in-progress",
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with offline capabilities.",
      features: ["iOS App", "Android App", "Offline Mode", "Push Notifications"],
    },
    {
      quarter: "Q4 2024",
      status: "planned",
      title: "AI-Powered Features",
      description: "Intelligent automation and AI-driven insights for better decision making.",
      features: ["Document OCR", "Smart Categorization", "Predictive Analytics", "Automated Workflows"],
    },
    {
      quarter: "Q1 2025",
      status: "planned",
      title: "Third-Party Integrations",
      description: "Seamless integration with popular tools and government systems.",
      features: ["Government APIs", "Payment Gateways", "Email Marketing", "Calendar Systems"],
    },
    {
      quarter: "Q2 2025",
      status: "planned",
      title: "Enterprise Features",
      description: "Advanced features for large organizations and multi-office operations.",
      features: ["Multi-Office Support", "Advanced Permissions", "Custom Branding", "API Access"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "planned":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "planned":
        return <Target className="h-5 w-5 text-gray-600" />
      default:
        return <Target className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Product <span className="text-blue-600">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See what we're building next. Our roadmap shows the features and improvements we're working on to make
              VisaFlow CRM even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath("/contact")}>
                <Button size="lg" className="text-lg px-8 py-3">
                  {t(translations, "homepage.startFreeTrial")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Request Feature
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getStatusColor(item.status)}>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(item.status)}
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace("-", " ")}
                        </div>
                      </Badge>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.quarter}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-lg">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Request Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Have a Feature Request?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for ways to improve VisaFlow CRM. Let us know what features would help your visa
              office work more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quick Feedback</h3>
                <p className="text-gray-600 mb-4">Share your ideas through our feedback form</p>
                <Button>Submit Idea</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 mb-4">Discuss features with other users</p>
                <Button variant="outline">Join Forum</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Direct Contact</h3>
                <p className="text-gray-600 mb-4">Speak directly with our product team</p>
                <Link href={getLocalizedPath("/contact")}>
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and be among the first to access new features as they're released.
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
    </div>
  )
}
