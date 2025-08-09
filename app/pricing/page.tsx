"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, ArrowLeft, X, Star, Clock, Users } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getTranslation, type Language } from "@/lib/translations"

export default function PricingPage() {
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
              {getTranslation(currentLang, "pricing.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "pricing.subtitle")}
            </p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
              💰 {getTranslation(currentLang, "pricing.noteFirst100")}
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Monthly Plan */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col h-full">
              <CardHeader className="text-center pb-8 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {getTranslation(currentLang, "pricing.monthlyPlan")}
                </CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "pricing.smallOfficesIdeal")}
                </CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-6">
                  €69 <small>/ {getTranslation(currentLang, "pricing.month").toLowerCase()}</small>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.unlimitedCustomers")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.allBasicFeatures")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.fullSystemAccess")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.roleBasedAuth")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.personalDashboard")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.emailSupport")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.storage5GB")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.basicReporting")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=monthly">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      {getTranslation(currentLang, "pricing.buyNow")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Yearly Plan - Most Popular */}
            <Card className="p-8 border-4 border-blue-600 hover:shadow-xl transition-all duration-300 relative scale-105 flex flex-col h-full">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2">
                🔥 {getTranslation(currentLang, "pricing.mostPopular")}
              </Badge>
              <CardHeader className="text-center pb-8 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {getTranslation(currentLang, "pricing.yearlyPlan")}
                </CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "pricing.growingOfficesBest")}
                </CardDescription>
                <div className="mt-6">
                  <div className="text-center">
                    <span className="text-lg text-gray-400 line-through">€ 869.4</span>
                  </div>
                  <div className="text-4xl font-bold text-blue-600 text-center mt-2">
                    € 695.52 <small>/ {getTranslation(currentLang, "pricing.year").toLowerCase()}</small>
                  </div>
                </div>

                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">
                  {getTranslation(currentLang, "pricing.discount20")}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.allPremiumFeatures")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.storage50GB")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.advancedReporting")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.freeTrainingSetup")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "contact.phoneSupport")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=yearly">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      {getTranslation(currentLang, "pricing.buyNow")}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Additional Users */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col h-full">
              <CardHeader className="text-center pb-8 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">
                  {getTranslation(currentLang, "pricing.additionalUser")}
                </CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "pricing.expandYourTeam")}
                </CardDescription>
                <div className="text-4xl font-bold text-blue-600 mt-6">
                  €2 <small>/ {getTranslation(currentLang, "pricing.month").toLowerCase()}</small>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.activityTracking")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.individualReporting")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "pricing.mobileAppAccess")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=additional">
                    <Button
                      variant="outline"
                      className="w-full text-lg py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      {getTranslation(currentLang, "pricing.addUser")}
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {getTranslation(currentLang, "pricing.additionalToPlan")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Notes */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💡 {getTranslation(currentLang, "pricing.notesTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {getTranslation(currentLang, "pricing.taxesTitle")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {getTranslation(currentLang, "pricing.taxesDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {getTranslation(currentLang, "pricing.paymentMethodsTitle")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {getTranslation(currentLang, "pricing.paymentMethodsDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {getTranslation(currentLang, "pricing.cancellationTitle")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {getTranslation(currentLang, "pricing.cancellationDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {getTranslation(currentLang, "pricing.supportTitle")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {getTranslation(currentLang, "pricing.supportDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "common.faq")}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation(currentLang, "common.pricingFAQ")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.howFreeTrialWorks")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.freeTrialAnswer")}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.canChangePlan")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.changePlanAnswer")}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.dataSecurityQuestion")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.dataSecurityAnswer")}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.setupFeeQuestion")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.setupFeeAnswer")}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.howManyUsers")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.usersAnswer")}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "common.supportService")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {getTranslation(currentLang, "common.supportAnswer")}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "common.getStartedNow")}, {getTranslation(currentLang, "common.noRisk")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(currentLang, "common.testWithoutRisk")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="text-lg px-8 py-3 bg-transparent border rounded">
                  {getTranslation(currentLang, "common.contactSalesTeam")}
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {getTranslation(currentLang, "common.noCreditCard")} • {getTranslation(currentLang, "common.cancelAnytime")} • {getTranslation(currentLang, "common.support24_7")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
