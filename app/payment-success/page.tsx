"use client"

import { useEffect, useState, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getTranslation, type Language } from "@/lib/translations"

function PaymentSuccessContent() {
  const [orderNumber] = useState(() => "CD-" + "VF"+ Math.random().toString(36).substr(2, 9).toUpperCase())
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

  useEffect(() => {
    // Send confirmation email (simulation)
    console.log("Confirmation email sent for order:", orderNumber)
  }, [orderNumber])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Success Header */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "paymentSuccessful")} 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "congratulations")}</p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
              {getTranslation(currentLang, "orderNumber")}: {orderNumber}
            </Badge>
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>{getTranslation(currentLang, "orderDetails")}</CardTitle>
                  <CardDescription>{getTranslation(currentLang, "planDetails")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-lg">{currentPlan.name}</h3>
                      <p className="text-gray-600">{getTranslation(currentLang, "freeTrial")}</p>
                      {plan === "additional" && (
                        <p className="text-sm text-blue-600">
                          {users} {getTranslation(currentLang, "users")}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-blue-600">€{totalAmount}</div>
                      <div className="text-sm text-gray-600">{getTranslation(currentLang, "vatIncluded")}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "orderDate")}:</span>
                      <span>{new Date().toLocaleDateString("tr-TR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "paymentMethod")}:</span>
                      <span>{getTranslation(currentLang, "creditCard")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{getTranslation(currentLang, "status")}:</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {getTranslation(currentLang, "active")}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>{getTranslation(currentLang, "nextSteps")}</CardTitle>
                  <CardDescription>{getTranslation(currentLang, "startUsing")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{getTranslation(currentLang, "emailCheck")}</h4>
                        <p className="text-sm text-gray-600">{getTranslation(currentLang, "emailCheckDescription")}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{getTranslation(currentLang, "accountSetup")}</h4>
                        <p className="text-sm text-gray-600">
                          {getTranslation(currentLang, "accountSetupDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{getTranslation(currentLang, "dataImport")}</h4>
                        <p className="text-sm text-gray-600">{getTranslation(currentLang, "dataImportDescription")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {getTranslation(currentLang, "goToDashboard")}
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  {getTranslation(currentLang, "downloadInvoice")}
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                {getTranslation(currentLang, "questions")}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  {getTranslation(currentLang, "contactSupport")}
                </Link>
              </p>
            </div>

            {/* Support Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{getTranslation(currentLang, "emailSupport")}</h3>
                <p className="text-sm text-gray-600">support@visaflowcrm.com</p>
                <p className="text-xs text-gray-500 mt-1">{getTranslation(currentLang, "responseTime")}</p>
              </Card>

              <Card className="text-center p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{getTranslation(currentLang, "freeTraining")}</h3>
                <p className="text-sm text-gray-600">{getTranslation(currentLang, "personalizedSetup")}</p>
                <p className="text-xs text-gray-500 mt-1">{getTranslation(currentLang, "annualPlanCustomers")}</p>
              </Card>

              <Card className="text-center p-6">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{getTranslation(currentLang, "dataSecurity")}</h3>
                <p className="text-sm text-gray-600">256-bit SSL şifreleme</p>
                <p className="text-xs text-gray-500 mt-1">GDPR uyumlu</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  )
}
