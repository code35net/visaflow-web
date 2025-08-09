"use client"

import { useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { XCircle, RefreshCw, Phone, Mail, CreditCard, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { getTranslation, type Language, type TranslationKey } from "@/lib/translations"

function PaymentFailedContent() {
  const [orderNumber] = useState(() =>
    "VF-ERR-" + Math.random().toString(36).slice(2, 11).toUpperCase()
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

  // Plan adlarını çeviriden çek
  const planNameKeyMap: Record<typeof plan, TranslationKey> = {
    monthly: "pricing.monthlyPlan",
    yearly: "pricing.yearlyPlan",
    additional: "pricing.additionalUser",
  }

  const currentPlanName = t(planNameKeyMap[plan])
  const users = searchParams.get("users") || "1"
  const totalAmount = searchParams.get("total") || ""

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
              {t("paymentFailed.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t("paymentFailed.message")}</p>
            <Badge variant="destructive" className="text-lg px-4 py-2">
              {t("paymentFailed.errorCode")}: {orderNumber}
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
                    {t("paymentFailed.failedOrder")}
                  </CardTitle>
                  <CardDescription>{t("paymentFailed.unprocessedOrder")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <h3 className="font-semibold text-lg">{currentPlanName}</h3>
                      <p className="text-gray-600">{t("paymentFailed.paymentUnprocessed")}</p>
                      {plan === "additional" && (
                        <p className="text-sm text-red-600">{users} {t("checkout.additionalUsers")}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-red-600">
                        {totalAmount ? `€${totalAmount}` : "—"}
                      </div>
                      <div className="text-sm text-gray-600">{t("paymentSuccess.vatIncluded")}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{t("paymentFailed.attemptDate")}:</span>
                      <span>{new Date().toLocaleDateString(currentLang === "tr" ? "tr-TR" : "en-US")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("paymentFailed.paymentMethod")}:</span>
                      <span>{t("paymentSuccess.creditCard")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("paymentFailed.status")}:</span>
                      <Badge variant="destructive">{t("paymentSuccess.failed")}</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={`/checkout?plan=${plan}`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          {t("paymentFailed.actions.tryAgain")}
                        </Button>
                      </Link>
                      <Link href="/pricing" className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          {t("paymentFailed.actions.backToPlans")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("paymentFailed.quickSolutions")}</CardTitle>
                  <CardDescription>{t("paymentFailed.quickSolutions")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{t("paymentFailed.issues.card.title")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {t("paymentFailed.issues.card.desc")}
                        </p>
                        <p className="text-xs text-blue-700 mt-1">
                          {t("paymentFailed.solution")}: {t("paymentFailed.issues.card.solution")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <RefreshCw className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{t("paymentFailed.issues.balance.title")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {t("paymentFailed.issues.balance.desc")}
                        </p>
                        <p className="text-xs text-blue-700 mt-1">
                          {t("paymentFailed.solution")}: {t("paymentFailed.issues.balance.solution")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{t("paymentFailed.issues.block.title")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {t("paymentFailed.issues.block.desc")}
                        </p>
                        <p className="text-xs text-blue-700 mt-1">
                          {t("paymentFailed.solution")}: {t("paymentFailed.issues.block.solution")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Mail className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">{t("paymentFailed.issues.tech.title")}</h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {t("paymentFailed.issues.tech.desc")}
                        </p>
                        <p className="text-xs text-blue-700 mt-1">
                          {t("paymentFailed.solution")}: {t("paymentFailed.issues.tech.solution")}
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
                {t("paymentFailed.commonIssues")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { tTitle: "paymentFailed.issues.balance.title", tDesc: "paymentFailed.issues.balance.desc", tSol: "paymentFailed.issues.balance.solution" },
                  { tTitle: "paymentFailed.issues.card.title", tDesc: "paymentFailed.issues.card.desc", tSol: "paymentFailed.issues.card.solution" },
                  { tTitle: "paymentFailed.issues.block.title", tDesc: "paymentFailed.issues.block.desc", tSol: "paymentFailed.issues.block.solution" },
                  { tTitle: "paymentFailed.issues.tech.title", tDesc: "paymentFailed.issues.tech.desc", tSol: "paymentFailed.issues.tech.solution" },
                ].map((i, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{t(i.tTitle as TranslationKey)}</CardTitle>
                      <CardDescription>{t(i.tDesc as TranslationKey)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>{t("paymentFailed.solution")}:</strong> {t(i.tSol as TranslationKey)}
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
                  <CardTitle>{t("paymentFailed.support.title")}</CardTitle>
                  <CardDescription>{t("paymentFailed.support.subtitle")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold">{t("contact.phoneSupport")}</h3>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-xs text-gray-500">{t("contact.mondayFriday")}</p>
                    </div>
                    <div className="text-center">
                      <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold">{t("pricing.emailSupport")}</h3>
                      <p className="text-sm text-gray-600">support@visaflowcrm.com</p>
                      <p className="text-xs text-gray-500">{t("contact.response24Hours")}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Mail className="mr-2 h-4 w-4" />
                        {t("paymentFailed.support.contactTeam")}
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      {t("contact.callNow")}
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
