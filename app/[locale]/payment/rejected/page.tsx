"use client"

import { useState } from "react"
import { XCircle, AlertTriangle, CreditCard, Phone, Mail, ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation } from "@/i18n/utils"

interface LocalePaymentRejectedPageProps {
  params: {
    locale: Locale
  }
}

export default function LocalePaymentRejectedPage({ params }: LocalePaymentRejectedPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)
  const searchParams = useSearchParams()
  const router = useRouter()
  const plan = searchParams.get("plan") || "monthly"
  const amount = searchParams.get("amount") || "69"

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  const [isRetrying, setIsRetrying] = useState(false)

  // Simulate different error types
  const errorTypes = [
    {
      code: "CARD_DECLINED",
      title: "Card Declined",
      description: "Your card was declined by your bank. Please try a different payment method or contact your bank.",
      severity: "high",
    },
    {
      code: "INSUFFICIENT_FUNDS",
      title: "Insufficient Funds",
      description: "There are insufficient funds on your card to complete this transaction.",
      severity: "high",
    },
    {
      code: "EXPIRED_CARD",
      title: "Expired Card",
      description: "The card you're trying to use has expired. Please use a different card.",
      severity: "medium",
    },
    {
      code: "INVALID_CVV",
      title: "Invalid Security Code",
      description: "The CVV/security code you entered is incorrect. Please check and try again.",
      severity: "low",
    },
    {
      code: "PROCESSING_ERROR",
      title: "Processing Error",
      description: "There was a temporary issue processing your payment. Please try again.",
      severity: "low",
    },
  ]

  const currentError = errorTypes[Math.floor(Math.random() * errorTypes.length)]

  const planNames = {
    monthly: "Monthly Plan",
    yearly: "Yearly Plan",
    additional: "Additional User Plan",
  }

  const currentPlan = planNames[plan as keyof typeof planNames] || "Monthly Plan"

  const handleRetryPayment = async () => {
    setIsRetrying(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsRetrying(false)
    router.push(`${getLocalizedPath("/payment")}?plan=${plan}`)
  }

  const troubleshootingSteps = [
    {
      step: 1,
      title: "Check your card details",
      description: "Verify that your card number, expiry date, and CVV are correct",
    },
    {
      step: 2,
      title: "Ensure sufficient funds",
      description: "Make sure your account has enough funds to cover the transaction",
    },
    {
      step: 3,
      title: "Contact your bank",
      description: "Your bank may have blocked the transaction for security reasons",
    },
    {
      step: 4,
      title: "Try a different card",
      description: "Use an alternative payment method if available",
    },
    {
      step: 5,
      title: "Check billing address",
      description: "Ensure your billing address matches your card statement",
    },
    {
      step: 6,
      title: "Clear browser cache",
      description: "Clear your browser cache and cookies, then try again",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Error Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Failed</h1>
            <p className="text-xl text-gray-600 mb-4">
              We couldn't process your payment. Don't worry, no charges were made to your account.
            </p>
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Error: {currentError.code}</Badge>
          </div>

          {/* Error Details */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>{currentError.title}:</strong> {currentError.description}
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  Order Summary
                </CardTitle>
                <CardDescription>The order that failed to process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <div className="font-medium">{currentPlan}</div>
                    <div className="text-sm text-gray-600">VisaFlow CRM Subscription</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">€{amount}</div>
                    <div className="text-sm text-gray-600">incl. VAT</div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attempted:</span>
                    <span className="font-medium">{new Date().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-red-100 text-red-800">Failed</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Error Code:</span>
                    <span className="font-medium text-red-600">{currentError.code}</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <Button onClick={handleRetryPayment} className="w-full" disabled={isRetrying}>
                    {isRetrying ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Retrying...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                      </>
                    )}
                  </Button>

                  <Link href={getLocalizedPath("/pricing")}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Choose Different Plan
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Troubleshooting
                </CardTitle>
                <CardDescription>Steps to resolve payment issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {troubleshootingSteps.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Common Issues */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader>
              <CardTitle>Common Payment Issues</CardTitle>
              <CardDescription>Solutions for frequently encountered problems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">International Cards</h4>
                    <p className="text-sm text-gray-600">
                      Some international cards may be blocked. Contact your bank to enable international transactions.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Security Blocks</h4>
                    <p className="text-sm text-gray-600">
                      Banks may block unusual transactions. Call your bank to verify and approve the payment.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Alternative Methods</h4>
                    <p className="text-sm text-gray-600">
                      Try using PayPal, bank transfer, or a different credit/debit card.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Browser Issues</h4>
                    <p className="text-sm text-gray-600">
                      Clear cookies, disable ad blockers, or try a different browser.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="text-center">
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Our billing support team is ready to assist you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Billing Support</h4>
                  <p className="text-sm text-gray-600 mb-3">Speak with our billing specialists</p>
                  <p className="font-semibold text-blue-600">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Email Support</h4>
                  <p className="text-sm text-gray-600 mb-3">Get detailed payment assistance</p>
                  <p className="font-semibold text-green-600">billing@visaflowcrm.com</p>
                  <p className="text-xs text-gray-500 mt-1">24/7 Response</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Our team is here to help resolve any payment issues quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath("/contact")}>
                <Button>
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={getLocalizedPath("/")}>
                <Button variant="outline">Return to Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
