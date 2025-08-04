"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CreditCard, Lock, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation } from "@/i18n/utils"

interface LocalePaymentPageProps {
  params: {
    locale: Locale
  }
}

export default function LocalePaymentPage({ params }: LocalePaymentPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = searchParams.get("plan") || "monthly"

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [additionalUsers, setAdditionalUsers] = useState(0)

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
    country: "United States",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const planPrices = {
    monthly: { base: 69, name: "Monthly Plan", billing: "per month" },
    yearly: { base: 662, name: "Yearly Plan", billing: "per year", discount: "20% off" },
    additional: { base: 48, name: "Additional User", billing: "per user/month" },
  }

  const currentPlan = planPrices[plan as keyof typeof planPrices] || planPrices.monthly
  const additionalUserCost = additionalUsers * 48
  const subtotal = currentPlan.base + additionalUserCost
  const vat = Math.round(subtotal * 0.21) // 21% VAT
  const total = subtotal + vat

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    // Format card number
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19)
    }

    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5)
    }

    // Format CVV
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4)
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate payment result (90% success rate)
    const isSuccess = Math.random() > 0.1

    if (isSuccess) {
      router.push(`${getLocalizedPath("/payment/success")}?plan=${plan}&amount=${total}`)
    } else {
      router.push(`${getLocalizedPath("/payment/rejected")}?plan=${plan}&amount=${total}`)
    }
  }

  const steps = [
    { number: 1, title: "Personal Information", description: "Your contact details" },
    { number: 2, title: "Billing Address", description: "Where to send invoices" },
    { number: 3, title: "Payment Details", description: "Secure payment information" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href={getLocalizedPath("/")} className="inline-block mb-4">
              <div className="text-2xl font-bold text-blue-600">VisaFlow CRM</div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Purchase</h1>
            <p className="text-gray-600">Secure checkout powered by industry-leading encryption</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ml-4 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-300"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    {steps[currentStep - 1].title}
                  </CardTitle>
                  <CardDescription>{steps[currentStep - 1].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Company/Organization</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button type="button" onClick={handleNextStep}>
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Billing Address */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="address">Street Address *</Label>
                          <Input
                            id="address"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State/Province</Label>
                            <Input
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                            <Input
                              id="zipCode"
                              name="zipCode"
                              required
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select
                              value={formData.country}
                              onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="United States">United States</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                <SelectItem value="Germany">Germany</SelectItem>
                                <SelectItem value="France">France</SelectItem>
                                <SelectItem value="Australia">Australia</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={handlePrevStep}>
                            Back
                          </Button>
                          <Button type="button" onClick={handleNextStep}>
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Payment Details */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <div className="relative mt-1">
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              required
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="pl-10"
                            />
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              required
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              required
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-blue-800 mb-2">
                            <Shield className="w-4 h-4" />
                            <span className="font-medium">Secure Payment</span>
                          </div>
                          <p className="text-sm text-blue-700">
                            Your payment information is encrypted and secure. We use industry-standard SSL encryption to
                            protect your data.
                          </p>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={handlePrevStep}>
                            Back
                          </Button>
                          <Button type="submit" disabled={isProcessing} className="min-w-[140px]">
                            {isProcessing ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                              </div>
                            ) : (
                              <>
                                Complete Purchase
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{currentPlan.name}</div>
                      <div className="text-sm text-gray-600">{currentPlan.billing}</div>
                      {currentPlan.discount && (
                        <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                          {currentPlan.discount}
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-medium">€{currentPlan.base}</div>
                    </div>
                  </div>

                  {plan !== "additional" && (
                    <div className="space-y-2">
                      <Label htmlFor="additionalUsers">Additional Users</Label>
                      <Select
                        value={additionalUsers.toString()}
                        onValueChange={(value) => setAdditionalUsers(Number.parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4, 5, 10, 15, 20].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "user" : "users"} {num > 0 && `(+€${num * 48})`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {additionalUsers > 0 && (
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Additional Users</div>
                        <div className="text-sm text-gray-600">{additionalUsers} × €48</div>
                      </div>
                      <div className="font-medium">€{additionalUserCost}</div>
                    </div>
                  )}

                  <hr />

                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>€{subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>VAT (21%)</span>
                    <span>€{vat}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>€{total}</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span>PCI DSS compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">What's included:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unlimited client management</li>
                      <li>• Application tracking system</li>
                      <li>• Document storage & security</li>
                      <li>• Email & phone support</li>
                      <li>• Advanced analytics</li>
                      <li>• API access</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Secured by 256-bit SSL encryption. Your payment information is safe and secure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
