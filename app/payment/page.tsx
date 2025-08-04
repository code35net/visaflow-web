"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Lock, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { defaultLocale } from "@/i18n/config"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [additionalUsers, setAdditionalUsers] = useState(0)

  const plan = searchParams.get("plan") || "monthly"

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
    country: "",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const planDetails = {
    monthly: {
      name: "Monthly Plan",
      price: 69,
      period: "month",
      description: "Perfect for getting started",
      features: ["Unlimited clients", "All core features", "Email support", "Unlimited storage", "API access"],
    },
    yearly: {
      name: "Yearly Plan",
      price: 662,
      period: "year",
      description: "Save 20% with annual billing",
      features: [
        "Unlimited clients",
        "All core features",
        "Priority phone support",
        "Unlimited storage",
        "Advanced analytics",
        "Priority support",
      ],
    },
    additional: {
      name: "Additional User",
      price: 48,
      period: "user/month",
      description: "30% off for additional team members",
      features: [
        "Team collaboration",
        "All core features",
        "Custom integrations",
        "Dedicated onboarding",
        "Team training",
      ],
    },
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails] || planDetails.monthly
  const vatRate = 0.21
  const subtotal = currentPlan.price + additionalUsers * 48
  const vatAmount = subtotal * vatRate
  const total = subtotal + vatAmount

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value)
    handleInputChange("cardNumber", formatted)
  }

  const handleExpiryChange = (value: string) => {
    const formatted = formatExpiryDate(value)
    handleInputChange("expiryDate", formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // 80% success rate simulation
    const isSuccess = Math.random() > 0.2

    if (isSuccess) {
      router.push("/payment/success?order=" + Math.random().toString(36).substr(2, 9).toUpperCase())
    } else {
      router.push("/payment/rejected?error=card_declined")
    }
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale={defaultLocale} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/pricing" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Pricing
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Purchase</h1>
            <p className="text-gray-600 mt-2">Secure checkout for your VisaFlow CRM subscription</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  <span className={`ml-2 text-sm ${currentStep >= step ? "text-blue-600" : "text-gray-500"}`}>
                    {step === 1 && "Personal Info"}
                    {step === 2 && "Billing Address"}
                    {step === 3 && "Payment Details"}
                  </span>
                  {step < 3 && <div className="w-16 h-px bg-gray-300 ml-4" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{currentPlan.name}</h3>
                      <p className="text-sm text-gray-600">{currentPlan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">€{currentPlan.price}</div>
                      <div className="text-sm text-gray-600">/{currentPlan.period}</div>
                    </div>
                  </div>

                  {additionalUsers > 0 && (
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Additional Users</h3>
                        <p className="text-sm text-gray-600">{additionalUsers} users</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">€{additionalUsers * 48}</div>
                        <div className="text-sm text-gray-600">/month</div>
                      </div>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>€{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>VAT (21%)</span>
                      <span>€{vatAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg border-t pt-2 mt-2">
                      <span>Total</span>
                      <span>€{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">What's included:</h4>
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center text-sm text-blue-800">
                      <Shield className="h-4 w-4 mr-2" />
                      14-day money-back guarantee
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentStep === 1 && "Personal Information"}
                    {currentStep === 2 && "Billing Address"}
                    {currentStep === 3 && "Payment Details"}
                  </CardTitle>
                  <CardDescription>
                    {currentStep === 1 && "Please provide your contact information"}
                    {currentStep === 2 && "Enter your billing address details"}
                    {currentStep === 3 && "Secure payment information"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="additionalUsers">Additional Users</Label>
                          <Select
                            value={additionalUsers.toString()}
                            onValueChange={(value) => setAdditionalUsers(Number.parseInt(value))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of additional users" />
                            </SelectTrigger>
                            <SelectContent>
                              {[0, 1, 2, 3, 4, 5, 10, 15, 20].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num === 0 ? "No additional users" : `${num} additional user${num > 1 ? "s" : ""}`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {additionalUsers > 0 && (
                            <p className="text-sm text-gray-600 mt-1">
                              €48/user/month (€33.60/user/month when billed yearly)
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Billing Address */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address">Street Address *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange("city", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State/Province</Label>
                            <Input
                              id="state"
                              value={formData.state}
                              onChange={(e) => handleInputChange("state", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange("zipCode", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select
                              value={formData.country}
                              onValueChange={(value) => handleInputChange("country", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="US">United States</SelectItem>
                                <SelectItem value="CA">Canada</SelectItem>
                                <SelectItem value="GB">United Kingdom</SelectItem>
                                <SelectItem value="DE">Germany</SelectItem>
                                <SelectItem value="FR">France</SelectItem>
                                <SelectItem value="ES">Spain</SelectItem>
                                <SelectItem value="IT">Italy</SelectItem>
                                <SelectItem value="NL">Netherlands</SelectItem>
                                <SelectItem value="AU">Australia</SelectItem>
                                <SelectItem value="TR">Turkey</SelectItem>
                                <SelectItem value="AZ">Azerbaijan</SelectItem>
                                <SelectItem value="EE">Estonia</SelectItem>
                                <SelectItem value="RU">Russia</SelectItem>
                                <SelectItem value="SA">Saudi Arabia</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Payment Details */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center text-sm text-green-800">
                            <Lock className="h-4 w-4 mr-2" />
                            Your payment information is encrypted and secure
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input
                            id="cardName"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange("cardName", e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <div className="relative">
                            <Input
                              id="cardNumber"
                              value={formData.cardNumber}
                              onChange={(e) => handleCardNumberChange(e.target.value)}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              required
                            />
                            <CreditCard className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleExpiryChange(e.target.value)}
                              placeholder="MM/YY"
                              maxLength={5}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                              placeholder="123"
                              maxLength={4}
                              required
                            />
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">Payment Summary</h4>
                          <div className="space-y-1 text-sm text-blue-800">
                            <div className="flex justify-between">
                              <span>{currentPlan.name}</span>
                              <span>€{currentPlan.price}</span>
                            </div>
                            {additionalUsers > 0 && (
                              <div className="flex justify-between">
                                <span>{additionalUsers} Additional Users</span>
                                <span>€{additionalUsers * 48}</span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span>VAT (21%)</span>
                              <span>€{vatAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-medium border-t border-blue-200 pt-1">
                              <span>Total</span>
                              <span>€{total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <div>
                        {currentStep > 1 && (
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous
                          </Button>
                        )}
                      </div>
                      <div>
                        {currentStep < 3 ? (
                          <Button type="button" onClick={nextStep}>
                            Next Step
                          </Button>
                        ) : (
                          <Button type="submit" disabled={isProcessing} className="min-w-[200px]">
                            {isProcessing ? (
                              <div className="flex items-center">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Processing...
                              </div>
                            ) : (
                              <>
                                <Lock className="mr-2 h-4 w-4" />
                                Complete Purchase - €{total.toFixed(2)}
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer locale={defaultLocale} />
    </div>
  )
}
