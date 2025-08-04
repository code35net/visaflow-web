"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Calendar,
  CheckCircle,
  Clock,
  Zap,
  Smartphone,
  Bot,
  BarChart3,
  Plug,
  Languages,
  Shield,
  Expand,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function RoadmapPage() {
  const [currentLang, setCurrentLang] = useState<Language>("tr")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) setCurrentLang(savedLang)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail as Language)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

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
              2024 <span className="text-blue-600">{getTranslation(currentLang, "roadmap2024")}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "roadmapHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Q1 2024 */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-6">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Q1 2024</h2>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {getTranslation(currentLang, "completed")}
                  </Badge>
                </div>
              </div>

              <div className="ml-18 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "customerPortal")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "customerPortalDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "applicationStatusTracking")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "documentUploadSystem")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "appointmentScheduling")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "mobileApp")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "mobileAppDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "offlineSupport")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "pushNotifications")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "cameraIntegration")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Q2 2024 */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Q2 2024</h2>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {getTranslation(currentLang, "inDevelopment")}
                  </Badge>
                </div>
              </div>

              <div className="ml-18 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Bot className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "aiAssistant")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "aiAssistantDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "automaticFormFilling")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "smartSuggestionSystem")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "chatbotSupport")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "advancedAnalytics")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "advancedAnalyticsDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "realTimeDashboard")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "customizableReports")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "predictiveAnalysis")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Q3 2024 */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-6">
                  <Calendar className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Q3 2024</h2>
                  <Badge variant="secondary">{getTranslation(currentLang, "planned")}</Badge>
                </div>
              </div>

              <div className="ml-18 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Plug className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "apiIntegration")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "apiIntegrationDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "restApiDevelopment")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "webhookSupport")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "zapierIntegration")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Languages className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "multiLanguageSupport")}</CardTitle>
                        <CardDescription>
                          {getTranslation(currentLang, "multiLanguageSupportDescription")}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "frenchAndGerman")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "spanishAndItalian")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "chineseAndJapanese")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Q4 2024 */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-6">
                  <Calendar className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Q4 2024</h2>
                  <Badge variant="secondary">{getTranslation(currentLang, "planned")}</Badge>
                </div>
              </div>

              <div className="ml-18 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "blockchainIntegration")}</CardTitle>
                        <CardDescription>
                          {getTranslation(currentLang, "blockchainIntegrationDescription")}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "digitalSignatureSystem")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "documentVerification")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "secureDataSharing")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Expand className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{getTranslation(currentLang, "globalExpansion")}</CardTitle>
                        <CardDescription>{getTranslation(currentLang, "globalExpansionDescription")}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "europeanDataCenters")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "asiaPacificExpansion")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {getTranslation(currentLang, "localCompliance")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "experienceTheFuture")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "digitalizeVisaOperations")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "freeTrial")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {getTranslation(currentLang, "requestDemo")}
              </Button>
            </div>
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
              <p className="text-gray-400">{getTranslation(currentLang, "crmSolutionForVisaOffices")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "product")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "homePage")}
                  </Link>
                </li>
                <li>
                  <a href="/#features" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "features")}
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "pricing")}
                  </a>
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
                  <a href="/#contact" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "contact")}
                  </a>
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
            <p>&copy; 2024 VisaFlow CRM. {getTranslation(currentLang, "allRightsReserved")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
