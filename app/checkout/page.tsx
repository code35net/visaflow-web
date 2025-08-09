"use client"

import type React from "react"

import { useState, Suspense, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Shield, ArrowLeft, CheckCircle, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { getTranslation, type Language, type TranslationKey } from "@/lib/translations"

function CheckoutContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "TR",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const [additionalUsers, setAdditionalUsers] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = (searchParams.get("plan") as "monthly" | "yearly" | "additional") || "monthly"
  const [currentLang, setCurrentLang] = useState<Language>("tr")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) setCurrentLang(savedLang)
    const handleLanguageChange = (event: CustomEvent) => setCurrentLang(event.detail as Language)
    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  // Yardımcı çeviri fonksiyonu: sadece TranslationKey kabul eder
  const t = (key: TranslationKey) => getTranslation(currentLang, key)

  type PlanConfig = {
  nameKey: TranslationKey
  basePrice: number
  price: string
  periodKey: TranslationKey
  descriptionKey: TranslationKey
  featureKeys: readonly TranslationKey[]
  originalPrice?: string
  originalBasePrice?: number
  discountKey?: TranslationKey
}

const planDetails: Record<"monthly" | "yearly" | "additional", PlanConfig> = {
  monthly: {
    nameKey: "pricing.monthlyPlan",
    basePrice: 72.45,
    price: "€ 72.45",
    periodKey: "pricing.month",
    descriptionKey: "pricing.smallOfficesIdeal",
    featureKeys: [
      "pricing.unlimitedCustomers",
      "pricing.allBasicFeatures",
      "pricing.emailSupport",
      "pricing.storage5GB",
      "pricing.basicReporting",
    ],
  },
  yearly: {
    nameKey: "pricing.yearlyPlan",
    basePrice: 695.52,
    price: "€ 695.52",
    periodKey: "pricing.year",
    originalPrice: "€ 869.40",
    originalBasePrice: 828,
    discountKey: "pricing.discount20",
    descriptionKey: "pricing.growingOfficesBest",
    featureKeys: [
      "pricing.allPremiumFeatures",
      "pricing.storage50GB",
      "pricing.advancedReporting",
      "pricing.freeTrainingSetup",
      "contact.phoneSupport",
    ],
  },
  additional: {
    nameKey: "pricing.additionalUser",
    basePrice: 2,
    price: "€ 2",
    periodKey: "pricing.month",
    descriptionKey: "pricing.expandYourTeam",
    featureKeys: [
      "pricing.fullSystemAccess",
      "pricing.roleBasedAuth",
      "pricing.personalDashboard",
      "pricing.activityTracking",
    ],
  },
}
 

  const currentPlan = planDetails[plan]

  // Tutar hesapları
  const calculateTotals = () => {
    let subtotal =
      plan === "additional"
        ? currentPlan.basePrice * Math.max(1, additionalUsers)
        : currentPlan.basePrice + additionalUsers * 2

    const vat = subtotal * 0.2
    const total = subtotal + vat

    return {
      subtotal: subtotal.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
    }
  }

  const totals = calculateTotals()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUserCountChange = (increment: boolean) => {
    if (increment) setAdditionalUsers((p) => p + 1)
    else setAdditionalUsers((p) => (plan === "additional" ? Math.max(1, p - 1) : Math.max(0, p - 1)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2
      if (isSuccess) router.push(`/payment-success?plan=${plan}&users=${additionalUsers}&total=${totals.total}`)
      else router.push(`/payment-failed?plan=${plan}&users=${additionalUsers}&total=${totals.total}`)
    }, 3000)
  }

  // Dönem metni: tüm planlar için aynı format
  const periodText = `/ ${t(currentPlan.periodKey).toLowerCase()}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/pricing" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("checkout.backToPricing")}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("checkout.title")}</h1>
            <p className="text-xl text-gray-600">{t("checkout.securePayment")}</p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 text-green-500 mr-2" />
                      {t("checkout.orderSummary")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{t(currentPlan.nameKey)}</h3>
                        <p className="text-gray-600 text-sm">{t(currentPlan.descriptionKey)}</p>
                      </div>
                      <div className="text-right">
                        {"originalBasePrice" in currentPlan && currentPlan.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{currentPlan.originalPrice}</div>
                        )}
                        <div className="font-bold text-lg">
                          {currentPlan.price} <small>{periodText}</small>
                        </div>
                      </div>
                    </div>

                    {/* Additional Users */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Label className="font-semibold">{t("checkout.additionalUsersCount")}</Label>
                        <div className="flex items-center space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleUserCountChange(false)}
                            disabled={plan !== "additional" ? additionalUsers <= 0 : additionalUsers <= 1}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-semibold text-lg w-8 text-center">{additionalUsers}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleUserCountChange(true)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-blue-700">
                        {additionalUsers > 0
                          ? `${additionalUsers} ${t("checkout.additionalUsers")} × €2 = €${(additionalUsers * 2).toFixed(2)}`
                          : t("checkout.noAdditionalUsers")}
                      </p>
                    </div>

                    {currentPlan.discountKey && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {t(currentPlan.discountKey)}
                      </Badge>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{t("checkout.includedFeatures")}:</h4>
                      {currentPlan.featureKeys.map((fk) => (
                        <div key={fk} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {t(fk)}
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{t("checkout.subtotal")}:</span>
                        <span>€{totals.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("checkout.vat")} (%20):</span>
                        <span>€{totals.vat}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>{t("checkout.total")}:</span>
                        <span>€{totals.total}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-sm text-blue-800">
                        <Shield className="h-4 w-4 mr-2" />
                        {t("pricing.freeTrial14Days")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("checkout.personalInformation")}</CardTitle>
                      <CardDescription>{t("checkout.personalInformationDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">{t("contact.firstName")} *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder={t("contact.firstNamePlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">{t("contact.lastName")} *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder={t("contact.lastNamePlaceholder")}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="email@example.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">{t("contact.phone")}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+90 555 123 45 67"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">{t("navigation.company")}</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={t("checkout.companyPlaceholder")}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Billing Address */}
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("checkout.billingAddress")}</CardTitle>
                      <CardDescription>{t("checkout.billingAddressDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="address">{t("contact.address")} *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder={t("checkout.addressPlaceholder")}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">{t("checkout.city")} *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder={t("checkout.cityPlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">{t("checkout.state")}</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder={t("checkout.statePlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">{t("checkout.zipCode")}</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="12345"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country">{t("checkout.country")} *</Label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="TR">Türkiye</option>
                          <option value="US">United States</option>
                          <option value="GB">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="ES">Spain</option>
                          <option value="IT">Italy</option>
                          <option value="NL">Netherlands</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        {t("checkout.paymentInformation")}
                      </CardTitle>
                      <CardDescription>{t("checkout.paymentInformationDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">{t("checkout.cardName")} *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required
                          placeholder="JOHN DOE"
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">{t("checkout.cardNumber")} *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">{t("checkout.expiryDate")} *</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-sm text-gray-600">
                          <Shield className="h-4 w-4 mr-2 text-green-500" />
                          {t("checkout.paymentSecure")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Submit Button */}
                  <Card>
                    <CardContent className="pt-6">
                      <Button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4"
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {t("checkout.processingPayment")}
                          </div>
                        ) : (
                          `€${totals.total} ${t("checkout.payAndStart")}`
                        )}
                      </Button>

                      <p className="text-center text-sm text-gray-500 mt-4">
                        {t("checkout.termsAndPrivacyPrefix")}
                        <a href="#" className="text-blue-600 hover:underline">
                          {t("checkout.termsOfService")}
                        </a>{" "}
                        {t("checkout.and")}
                        <a href="#" className="text-blue-600 hover:underline">
                          {t("checkout.privacyPolicy")}
                        </a>
                        {t("checkout.accept")}
                      </p>
                    </CardContent>
                  </Card>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
