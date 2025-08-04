"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, CheckCircle, ArrowLeft, X, Star, Clock, Users } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
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
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation(currentLang, "backToHome")}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "simpleTransparentPricing")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "pricingSubtitle")}
            </p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
              💰 {getTranslation(currentLang, "first100Customers")}
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
                <CardTitle className="text-2xl mb-2">{getTranslation(currentLang, "monthlyPlan")}</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "smallOfficesIdeal")}
                </CardDescription>
                <div className="text-5xl font-bold text-blue-600 mt-6">€82.80</div>
                <div className="text-gray-500">/ {getTranslation(currentLang, "monthlyPlan").toLowerCase()}</div>
                <div className="text-sm text-gray-500">€69 + %20 KDV</div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "unlimitedCustomers")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "allBasicFeatures")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "emailSupport")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "storage5GB")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "basicReporting")}</span>
                  </li>
                  <li className="flex items-center min-h-[1.5rem]">
                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-400">{getTranslation(currentLang, "prioritySupport")}</span>
                  </li>
                  <li className="flex items-center min-h-[1.5rem]">
                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-400">{getTranslation(currentLang, "apiAccess")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=monthly">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      {getTranslation(currentLang, "buyNow")}
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {getTranslation(currentLang, "freeTrial14Days")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Yearly Plan - Most Popular */}
            <Card className="p-8 border-4 border-blue-600 hover:shadow-xl transition-all duration-300 relative scale-105 flex flex-col h-full">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2">
                🔥 {getTranslation(currentLang, "mostPopular")}
              </Badge>
              <CardHeader className="text-center pb-8 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">{getTranslation(currentLang, "yearlyPlan")}</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "growingOfficesBest")}
                </CardDescription>
                <div className="mt-6">
                  <div className="text-center">
                    <span className="text-lg text-gray-400 line-through">€993.60</span>
                  </div>
                  <div className="text-5xl font-bold text-blue-600 text-center mt-2">€794.40</div>
                </div>
                <div className="text-gray-500 text-center">
                  / {getTranslation(currentLang, "yearlyPlan").toLowerCase()}
                </div>
                <div className="text-sm text-gray-500 text-center">€662 + %20 KDV</div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">
                  {getTranslation(currentLang, "discount20")}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "unlimitedCustomers")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "allPremiumFeatures")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "priority24Support")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "storage50GB")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "advancedReporting")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "freeTrainingSetup")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "apiAccess")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=yearly">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      {getTranslation(currentLang, "buyNow")}
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {getTranslation(currentLang, "freeTrial14Days")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Users */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col h-full">
              <CardHeader className="text-center pb-8 flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">{getTranslation(currentLang, "additionalUser")}</CardTitle>
                <CardDescription className="min-h-[3rem] flex items-center justify-center">
                  {getTranslation(currentLang, "expandYourTeam")}
                </CardDescription>
                <div className="text-5xl font-bold text-blue-600 mt-6">€2.40</div>
                <div className="text-gray-500">
                  / {getTranslation(currentLang, "additionalUser").toLowerCase()} / ay
                </div>
                <div className="text-sm text-gray-500">€2 + %20 KDV</div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "fullSystemAccess")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "roleBasedAuth")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "personalDashboard")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "activityTracking")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "individualReporting")}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{getTranslation(currentLang, "mobileAppAccess")}</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/checkout?plan=additional">
                    <Button
                      variant="outline"
                      className="w-full text-lg py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      {getTranslation(currentLang, "addUser")}
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {getTranslation(currentLang, "additionalToPlan")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Notes */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Fiyatlandırma Notları</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">KDV ve Vergiler</h4>
                  <p className="text-gray-600 text-sm">
                    Tüm fiyatlara %20 KDV dahildir. Türkiye dışındaki müşteriler için yerel vergi oranları uygulanır.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ödeme Yöntemleri</h4>
                  <p className="text-gray-600 text-sm">
                    Visa, Mastercard, American Express kabul edilir. Güvenli ödeme için SSL şifreleme kullanılır.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">İptal Politikası</h4>
                  <p className="text-gray-600 text-sm">
                    İstediğiniz zaman iptal edebilirsiniz. İptal sonrası verileriniz 30 gün boyunca saklanır.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Destek</h4>
                  <p className="text-gray-600 text-sm">
                    Tüm planlar email desteği içerir. Yıllık plan müşterileri öncelikli telefon desteği alır.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getTranslation(currentLang, "faq")}</h2>
            <p className="text-xl text-gray-600">{getTranslation(currentLang, "pricingFAQ")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{getTranslation(currentLang, "howFreeTrialWorks")}</h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "freeTrialAnswer")}</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{getTranslation(currentLang, "canChangePlan")}</h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "changePlanAnswer")}</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {getTranslation(currentLang, "dataSecurityQuestion")}
                </h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "dataSecurityAnswer")}</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{getTranslation(currentLang, "setupFeeQuestion")}</h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "setupFeeAnswer")}</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{getTranslation(currentLang, "howManyUsers")}</h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "usersAnswer")}</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{getTranslation(currentLang, "supportService")}</h3>
                <p className="text-gray-600 text-sm">{getTranslation(currentLang, "supportAnswer")}</p>
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
              {getTranslation(currentLang, "getStartedNow")}, hiçbir risk yok
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(currentLang, "freeTrial14Days")} ile VisaFlow CRM'i risk almadan test edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "startFreeTrial")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Satış Ekibiyle Konuş
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
              <p className="text-gray-400">Vize ofisleri için özel tasarlanmış CRM çözümü</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
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
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "contact")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Dokümantasyonu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gizlilik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Şartlar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VisaFlow CRM. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
