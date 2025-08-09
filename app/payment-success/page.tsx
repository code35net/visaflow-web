"use client"

import { useEffect, useState, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Mail, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getTranslation, type Language, type TranslationKey } from "@/lib/translations"

function PaymentSuccessContent() {
  const [orderNumber] = useState(
    () => "CD-VF-" + Math.random().toString(36).slice(2, 11).toUpperCase()
  )
  const searchParams = useSearchParams()
  const plan = (searchParams.get("plan") as "monthly" | "yearly" | "additional") || "monthly"

  const [currentLang, setCurrentLang] = useState<Language>("tr")
  const t = (key: TranslationKey) => getTranslation(currentLang, key)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) setCurrentLang(savedLang)
    const handleLanguageChange = (event: CustomEvent) => setCurrentLang(event.detail as Language)
    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  // Plan adlarını i18n'den çek
  const planNameKeyMap: Record<typeof plan, TranslationKey> = {
    monthly: "pricing.monthlyPlan",
    yearly: "pricing.yearlyPlan",
    additional: "pricing.additionalUser",
  }
  const currentPlanName = t(planNameKeyMap[plan])

  const users = searchParams.get("users") || "1"
  const totalAmount = searchParams.get("total") || ""

  useEffect(() => {
    // confirmation e-mail simülasyonu
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
              {t("paymentSuccess.title")} 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t("paymentSuccess.congratulations")}</p>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
              {t("paymentSuccess.orderNumber")}: {orderNumber}
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
                  <CardTitle>{t("paymentSuccess.orderDetails")}</CardTitle>
                  <CardDescription>{t("paymentSuccess.planDetails")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-lg">{currentPlanName}</h3>
                      <p className="text-gray-600">{t("pricing.freeTrial14Days")}</p>
                      {plan === "additional" && (
                        <p className="text-sm text-blue-600">
                          {users} {t("paymentSuccess.users")}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-blue-600">
                        {totalAmount ? `€${totalAmount}` : "—"}
                      </div>
                      <div className="text-sm text-gray-600">{t("paymentSuccess.vatIncluded")}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{t("paymentSuccess.orderDate")}:</span>
                      <span>
                        {new Date().toLocaleDateString(currentLang === "tr" ? "tr-TR" : "en-US")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("paymentSuccess.paymentMethod")}:</span>
                      <span>{t("paymentSuccess.creditCard")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("paymentSuccess.status")}:</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {t("paymentSuccess.active")}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("paymentSuccess.nextSteps")}</CardTitle>
                  <CardDescription>{t("paymentSuccess.startUsing")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{t("paymentSuccess.emailCheck")}</h4>
                        <p className="text-sm text-gray-600">
                          {t("paymentSuccess.emailCheckDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{t("paymentSuccess.accountSetup")}</h4>
                        <p className="text-sm text-gray-600">
                          {t("paymentSuccess.accountSetupDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{t("paymentSuccess.dataImport")}</h4>
                        <p className="text-sm text-gray-600">
                          {t("paymentSuccess.dataImportDescription")}
                        </p>
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
                  {t("paymentSuccess.goToDashboard")}
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  {t("paymentSuccess.downloadInvoice")}
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                {t("paymentSuccess.questions")}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  {t("paymentSuccess.contactSupport")}
                </Link>
              </p>
            </div>

            {/* Support Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("pricing.emailSupport")}</h3>
                <p className="text-sm text-gray-600">support@visaflowcrm.com</p>
                <p className="text-xs text-gray-500 mt-1">{t("paymentSuccess.responseTime")}</p>
              </Card>

              <Card className="text-center p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("paymentSuccess.freeTraining")}</h3>
                <p className="text-sm text-gray-600">{t("paymentSuccess.personalizedSetup")}</p>
                <p className="text-xs text-gray-500 mt-1">{t("paymentSuccess.annualPlanCustomers")}</p>
              </Card>

              <Card className="text-center p-6">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("paymentSuccess.dataSecurity")}</h3>
                <p className="text-sm text-gray-600">256-bit SSL</p>
                <p className="text-xs text-gray-500 mt-1">GDPR</p>
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
