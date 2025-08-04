import { Users, FileText, Calendar, Shield, MessageSquare, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface LocaleFeaturesPageProps {
  params: {
    locale: Locale
  }
}

export default function LocaleFeaturesPage({ params }: LocaleFeaturesPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for <span className="text-blue-600">Modern Visa Offices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t(translations, "homepage.featuresDescription")}
            </p>
            <Link href={getLocalizedPath("/contact")}>
              <Button size="lg" className="text-lg px-8 py-3">
                {t(translations, "homepage.startFreeTrial")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(translations, "homepage.featuresTitle")}</p>
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

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Document Security</CardTitle>
                <CardDescription>
                  Secure document storage with encryption, access controls, and audit trails for sensitive client
                  information and legal documents.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Communication Hub</CardTitle>
                <CardDescription>
                  Centralized communication with clients via email, SMS, and in-app messaging. Keep all conversations
                  organized and accessible.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>
                  Detailed insights on application success rates, processing times, revenue metrics, and business
                  performance analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how VisaFlow CRM can transform your visa office operations.
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
