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
import { getTranslation, type Language } from "@/lib/translations"

function CheckoutContent() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Billing Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "TR",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const [additionalUsers, setAdditionalUsers] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
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
    monthly: {
      name: "Aylık Plan",
      basePrice: 69,
      price: "€82.80",
      period: "/ ay",
      description: "Küçük ofisler için ideal",
      features: ["Sınırsız müşteri", "Tüm temel özellikler", "Email desteği", "5 GB depolama"],
    },
    yearly: {
      name: "Yıllık Plan",
      basePrice: 662,
      price: "€794.40",
      period: "/ yıl",
      originalPrice: "€993.60",
      originalBasePrice: 828,
      discount: "%20 İndirim",
      description: "En popüler seçim",
      features: ["Sınırsız müşteri", "Tüm premium özellikler", "Öncelikli destek", "50 GB depolama", "Ücretsiz eğitim"],
    },
    additional: {
      name: "Ek Kullanıcı",
      basePrice: 2,
      price: "€2.40",
      period: "/ kullanıcı / ay",
      description: "Ekibinizi büyütün",
      features: ["Tam sistem erişimi", "Rol tabanlı yetkilendirme", "Kişisel dashboard", "Aktivite takibi"],
    },
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails]

  // Calculate totals
  const calculateTotals = () => {
    let subtotal = 0
    let vat = 0
    let total = 0

    if (plan === "additional") {
      // Sadece ek kullanıcı planı
      subtotal = currentPlan.basePrice * Math.max(1, additionalUsers)
    } else {
      // Ana plan + ek kullanıcılar
      subtotal = currentPlan.basePrice + (currentPlan.basePrice === 2 ? 0 : additionalUsers * 2)
    }

    vat = subtotal * 0.2
    total = subtotal + vat

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
    if (increment) {
      setAdditionalUsers((prev) => prev + 1)
    } else {
      if (plan === "additional") {
        setAdditionalUsers((prev) => Math.max(1, prev - 1))
      } else {
        setAdditionalUsers((prev) => Math.max(0, prev - 1))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.2 // 80% success rate

      if (isSuccess) {
        router.push(`/payment-success?plan=${plan}&users=${additionalUsers}&total=${totals.total}`)
      } else {
        router.push(`/payment-failed?plan=${plan}&users=${additionalUsers}&total=${totals.total}`)
      }
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/pricing" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation(currentLang, "backToPricing")}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "checkout")}
            </h1>
            <p className="text-xl text-gray-600">{getTranslation(currentLang, "securePayment")}</p>
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
                      {getTranslation(currentLang, "orderSummary")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{currentPlan.name}</h3>
                        <p className="text-sm text-gray-600">{currentPlan.description}</p>
                      </div>
                      <div className="text-right">
                        {currentPlan.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{currentPlan.originalPrice}</div>
                        )}
                        <div className="font-bold text-lg">{currentPlan.price}</div>
                        <div className="text-sm text-gray-600">{currentPlan.period}</div>
                      </div>
                    </div>

                    {/* Additional Users Section - Tüm planlar için */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Label className="font-semibold">{getTranslation(currentLang, "additionalUsersCount")}</Label>
                        <div className="flex items-center space-x-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleUserCountChange(false)}
                            disabled={additionalUsers <= 0}
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
                          ? `${additionalUsers} ${getTranslation(currentLang, "additionalUsers")} × €2.40 = €${(additionalUsers * 2.4).toFixed(2)}`
                          : getTranslation(currentLang, "noAdditionalUsers")}
                      </p>
                    </div>

                    {currentPlan.discount && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{currentPlan.discount}</Badge>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{getTranslation(currentLang, "includedFeatures")}:</h4>
                      {currentPlan.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{getTranslation(currentLang, "subtotal")}:</span>
                        <span>€{totals.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{getTranslation(currentLang, "vat")} (%20):</span>
                        <span>€{totals.vat}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>{getTranslation(currentLang, "total")}:</span>
                        <span>€{totals.total}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-sm text-blue-800">
                        <Shield className="h-4 w-4 mr-2" />
                        {getTranslation(currentLang, "freeTrial")}
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
                      <CardTitle>{getTranslation(currentLang, "personalInformation")}</CardTitle>
                      <CardDescription>{getTranslation(currentLang, "personalInformationDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">{getTranslation(currentLang, "firstName")} *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder={getTranslation(currentLang, "firstNamePlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">{getTranslation(currentLang, "lastName")} *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder={getTranslation(currentLang, "lastNamePlaceholder")}
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
                          <Label htmlFor="phone">{getTranslation(currentLang, "phone")}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+90 555 123 45 67"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">{getTranslation(currentLang, "company")}</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={getTranslation(currentLang, "companyPlaceholder")}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Billing Address */}
                  <Card>
                    <CardHeader>
                      <CardTitle>{getTranslation(currentLang, "billingAddress")}</CardTitle>
                      <CardDescription>{getTranslation(currentLang, "billingAddressDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="address">{getTranslation(currentLang, "address")} *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder={getTranslation(currentLang, "addressPlaceholder")}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">{getTranslation(currentLang, "city")} *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder={getTranslation(currentLang, "cityPlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">{getTranslation(currentLang, "state")}</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder={getTranslation(currentLang, "statePlaceholder")}
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">{getTranslation(currentLang, "zipCode")}</Label>
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
                        <Label htmlFor="country">{getTranslation(currentLang, "country")} *</Label>
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
                        {getTranslation(currentLang, "paymentInformation")}
                      </CardTitle>
                      <CardDescription>{getTranslation(currentLang, "paymentInformationDescription")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">{getTranslation(currentLang, "cardName")} *</Label>
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
                        <Label htmlFor="cardNumber">{getTranslation(currentLang, "cardNumber")} *</Label>
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
                          <Label htmlFor="expiryDate">{getTranslation(currentLang, "expiryDate")} *</Label>
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
                          {getTranslation(currentLang, "paymentSecure")}
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
                            {getTranslation(currentLang, "processingPayment")}
                          </div>
                        ) : (
                          `€${totals.total} ${getTranslation(currentLang, "payAndStart")}`
                        )}
                      </Button>

                      <p className="text-center text-sm text-gray-500 mt-4">
                        {getTranslation(currentLang, "termsAndPrivacy")}
                        <a href="#" className="text-blue-600 hover:underline">
                          {getTranslation(currentLang, "termsOfService")}
                        </a>{" "}
                        {getTranslation(currentLang, "and")}
                        <a href="#" className="text-blue-600 hover:underline">
                          {getTranslation(currentLang, "privacyPolicy")}
                        </a>
                        {getTranslation(currentLang, "accept")}
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
