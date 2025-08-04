"use client"

import { useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { XCircle, RefreshCw, Phone, Mail, CreditCard, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getTranslation, type Language } from "@/lib/translations"

function PaymentFailedContent() {
  const [orderNumber] = useState(() => "VF-ERR-" + Math.random().toString(36).substr(2, 9).toUpperCase())
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "monthly"

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

  const planDetails = {
    monthly: { name: "Aylık Plan", basePrice: 69, price: "€82.80", period: "/ ay" },
    yearly: { name: "Yıllık Plan", basePrice: 662, price: "€794.40", period: "/ yıl" },
    additional: { name: "Ek Kullanıcı", basePrice: 2, price: "€2.40", period: "/ kullanıcı / ay" },
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails]
  const users = searchParams.get("users") || "1"
  const totalAmount = searchParams.get("total") || currentPlan.price.replace("€", "")

  const commonIssues = [
    {
      title: "Yetersiz Bakiye",
      description: "Kartınızda yeterli bakiye bulunmuyor olabilir",
      solution: "Banka hesabınızı kontrol edin veya farklı bir kart deneyin",
    },
    {
      title: "Kart Bilgileri Hatalı",
      description: "Kart numarası, son kullanma tarihi veya CVV kodu yanlış girilmiş",
      solution: "Kart bilgilerinizi tekrar kontrol ederek yeniden deneyin",
    },
    {
      title: "Banka Tarafından Engelleme",
      description: "Bankanız güvenlik nedeniyle işlemi engelleyebilir",
      solution: "Bankanızı arayarak online ödemelere izin verin",
    },
    {
      title: "Teknik Sorun",
      description: "Geçici bir sistem sorunu yaşanıyor olabilir",
      solution: "Birkaç dakika bekleyip tekrar deneyebilirsiniz",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Failed Header */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "paymentFailed")}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "paymentError")}</p>
            <Badge variant="destructive" className="text-lg px-4 py-2">
              {getTranslation(currentLang, "errorCode")}: {orderNumber}
            </Badge>
          </div>
        </div>
      </section>

      {/* Error Details and Solutions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Failed Order Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                    {getTranslation(currentLang, "failedOrder")}
                  </CardTitle>
                  <CardDescription>{getTranslation(currentLang, "unprocessedOrder")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <h3 className="font-semibold text-lg">{currentPlan.name}</h3>
                      <p className="text-gray-600">{getTranslation(currentLang, "paymentUnprocessed")}</p>
                      {plan === "additional" && <p className="text-sm text-red-600">{users} kullanıcı</p>}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-red-600">€{totalAmount}</div>
                      <div className="text-sm text-gray-600">{getTranslation(currentLang, "vatIncluded")}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "attemptDate")}:</span>
                      <span>{new Date().toLocaleDateString("tr-TR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "paymentMethod")}:</span>
                      <span>{getTranslation(currentLang, "creditCard")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "status")}:</span>
                      <Badge variant="destructive">{getTranslation(currentLang, "failed")}</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/checkout?plan=${plan}`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          {getTranslation(currentLang, "tryAgain")}
                        </Button>
                      </Link>
                      <Link href="/pricing" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          {getTranslation(currentLang, "backToPlans")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>{getTranslation(currentLang, "quickSolutions")}</CardTitle>
                  <CardDescription>{getTranslation(currentLang, "thingsToTry")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{getTranslation(currentLang, "checkCardDetails")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {getTranslation(currentLang, "checkCardDetailsDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <RefreshCw className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{getTranslation(currentLang, "tryDifferentCard")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {getTranslation(currentLang, "tryDifferentCardDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{getTranslation(currentLang, "callYourBank")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {getTranslation(currentLang, "callYourBankDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Mail className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{getTranslation(currentLang, "contactSupport")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {getTranslation(currentLang, "contactSupportDescription")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Common Issues */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {getTranslation(currentLang, "commonIssues")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonIssues.map((issue, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{issue.title}</CardTitle>
                      <CardDescription>{issue.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>{getTranslation(currentLang, "solution")}:</strong> {issue.solution}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Contact */}
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>{getTranslation(currentLang, "stillHavingTrouble")}</CardTitle>
                  <CardDescription>{getTranslation(currentLang, "supportTeamHere")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold">{getTranslation(currentLang, "phoneSupport")}</h3>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-xs text-gray-500">{getTranslation(currentLang, "mondayFriday")}</p>
                    </div>
                    <div className="text-center">
                      <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold">{getTranslation(currentLang, "emailSupport")}</h3>
                      <p className="text-sm text-gray-600">support@visaflowcrm.com</p>
                      <p className="text-xs text-gray-500">{getTranslation(currentLang, "responseWithin24")}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Mail className="mr-2 h-4 w-4" />
                        {getTranslation(currentLang, "contactSupportTeam")}
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      {getTranslation(currentLang, "callNow")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentFailedContent />
    </Suspense>
  )
}
