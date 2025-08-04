"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Globe,
  Users,
  Calendar,
  FileText,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowLeft,
  Smartphone,
  Bell,
  Lock,
  Zap,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function FeaturesPage() {
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
              {getTranslation(currentLang, "powerfulFeatures")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "featuresHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Management */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "customerManagement")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "customerManagementDesc")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "detailedCustomerProfiles")}
                    </h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "personalInfoContactHistory")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "contactHistory")}</h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "allInteractionsInOnePlace")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "segmentation")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "categorizeCustomersForTargetedCampaigns")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Application Tracking */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "applicationTracking")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "applicationTrackingDesc")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "statusTracking")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "instantViewOfApplicationStatus")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "documentManagement")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "securelyStoreAndOrganizeDocuments")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "automaticUpdates")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "automaticNotificationsForStatusChanges")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Appointment System */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "appointmentSystem")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "appointmentSystemDesc")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "onlineBooking")}</h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "customersCanBook247")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "calendarIntegration")}
                    </h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "syncWithGoogleOutlook")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "reminderSystem")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "automaticRemindersViaSmsEmail")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Document Security */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "secureDocumentStorage")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "securelyStoreCustomerDocuments")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "sslEncryption")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "allDataProtectedWith256BitSsl")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "automaticBackup")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "dailyAutomaticBackupAndDataRecovery")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "accessControl")}</h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "roleBasedAccessPermissions")}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "reportingAnalytics")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "detailedReportsAndBusinessIntelligence")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "performanceReports")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "applicationSuccessRatesAndDurationAnalysis")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "revenueAnalysis")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "monthlyAnnualRevenueReportsAndForecasts")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "customizableDashboard")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "customizableDashboardAccordingToYourNeeds")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Multi-User System */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {getTranslation(currentLang, "multiUserSystem")}
                </h3>
                <p className="text-gray-600">{getTranslation(currentLang, "workWithYourTeam")}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "roleBasedAccess")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "adminOperatorCustomerRepresentativeRoles")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "teamManagement")}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "addUserRemoveAndEditPermissions")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{getTranslation(currentLang, "activityTracking")}</h4>
                    <p className="text-sm text-gray-600">{getTranslation(currentLang, "whoDidWhatWhenFullAudit")}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "moreFeatures")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLang, "additionalFeaturesToSimplifyYourBusinessWithVisaFlowCrm")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Smartphone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{getTranslation(currentLang, "mobileFriendly")}</h3>
              <p className="text-sm text-gray-600">{getTranslation(currentLang, "accessFromAnyDevice")}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Bell className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{getTranslation(currentLang, "smartNotifications")}</h3>
              <p className="text-sm text-gray-600">{getTranslation(currentLang, "alertsForImportantEvents")}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{getTranslation(currentLang, "gdprCompliant")}</h3>
              <p className="text-sm text-gray-600">{getTranslation(currentLang, "dataProtectionStandards")}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{getTranslation(currentLang, "fastPerformance")}</h3>
              <p className="text-sm text-gray-600">{getTranslation(currentLang, "loadingInSeconds")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "tryAllFeaturesFree")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(currentLang, "discoverAllFeaturesWith14DayFreeTrial")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "startFreeTrial")}
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
