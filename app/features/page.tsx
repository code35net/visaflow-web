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
import { Footer } from "@/components/footer"

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "featuresPage.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "featuresPage.heroSubtitle")}
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
                  {getTranslation(currentLang, "featuresPage.customerManagement")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.customerManagementDesc")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.detailedCustomerProfiles")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.personalInfoContactHistory")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.contactHistory")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.allInteractionsInOnePlace")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.segmentation")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.categorizeCustomersForTargetedCampaigns")}
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
                  {getTranslation(currentLang, "featuresPage.applicationTracking")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.applicationTrackingDesc")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.statusTracking")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.instantViewOfApplicationStatus")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.documentManagement")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.securelyStoreAndOrganizeDocuments")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.automaticUpdates")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.automaticNotificationsForStatusChanges")}
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
                  {getTranslation(currentLang, "featuresPage.appointmentSystem")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.appointmentSystemDesc")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.onlineBooking")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.customersCanBook247")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.calendarIntegration")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.syncWithGoogleOutlook")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.reminderSystem")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.automaticRemindersViaSmsEmail")}
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
                  {getTranslation(currentLang, "featuresPage.secureDocumentStorage")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.securelyStoreCustomerDocuments")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.sslEncryption")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.allDataProtectedWith256BitSsl")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.automaticBackup")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.dailyAutomaticBackupAndDataRecovery")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.accessControl")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.roleBasedAccessPermissions")}
                    </p>
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
                  {getTranslation(currentLang, "featuresPage.reportingAnalytics")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.detailedReportsAndBusinessIntelligence")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.performanceReports")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.applicationSuccessRatesAndDurationAnalysis")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.revenueAnalysis")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.monthlyAnnualRevenueReportsAndForecasts")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.customizableDashboard")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.customizableDashboardAccordingToYourNeeds")}
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
                  {getTranslation(currentLang, "featuresPage.multiUserSystem")}
                </h3>
                <p className="text-gray-600">
                  {getTranslation(currentLang, "featuresPage.workWithYourTeam")}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.roleBasedAccess")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.adminOperatorCustomerRepresentativeRoles")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "featuresPage.teamManagement")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.addUserRemoveAndEditPermissions")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {getTranslation(currentLang, "pricing.activityTracking")}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(currentLang, "featuresPage.whoDidWhatWhenFullAudit")}
                    </p>
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
              {getTranslation(currentLang, "featuresPage.moreFeatures")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLang, "featuresPage.additionalFeaturesToSimplifyYourBusinessWithVisaFlowCrm")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Smartphone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                {getTranslation(currentLang, "featuresPage.mobileFriendly")}
              </h3>
              <p className="text-sm text-gray-600">
                {getTranslation(currentLang, "featuresPage.accessFromAnyDevice")}
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Bell className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                {getTranslation(currentLang, "featuresPage.smartNotifications")}
              </h3>
              <p className="text-sm text-gray-600">
                {getTranslation(currentLang, "featuresPage.alertsForImportantEvents")}
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                {getTranslation(currentLang, "featuresPage.gdprCompliant")}
              </h3>
              <p className="text-sm text-gray-600">
                {getTranslation(currentLang, "featuresPage.dataProtectionStandards")}
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                {getTranslation(currentLang, "featuresPage.fastPerformance")}
              </h3>
              <p className="text-sm text-gray-600">
                {getTranslation(currentLang, "featuresPage.loadingInSeconds")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "featuresPage.tryAllFeaturesFree")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(currentLang, "featuresPage.discoverAllFeaturesWith14DayFreeTrial")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "hero.startFreeTrial")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
