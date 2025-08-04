"use client"

import { useSearchParams } from "next/navigation"
import { XCircle, CreditCard, Phone, Mail, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { defaultLocale } from "@/i18n/config"

export default function PaymentRejectedPage() {
  const searchParams = useSearchParams()
  const errorCode = searchParams.get("error") || "payment_failed"

  const errorMessages = {
    card_declined: {
      title: "Card Declined",
      description: "Your card was declined by your bank. Please try a different payment method or contact your bank.",
      code: "CARD_DECLINED",
    },
    insufficient_funds: {
      title: "Insufficient Funds",
      description: "Your card has insufficient funds to complete this transaction.",
      code: "INSUFFICIENT_FUNDS",
    },
    expired_card: {
      title: "Expired Card",
      description: "The card you're trying to use has expired. Please use a different card.",
      code: "EXPIRED_CARD",
    },
    invalid_cvc: {
      title: "Invalid Security Code",
      description: "The security code (CVC) you entered is incorrect. Please check and try again.",
      code: "INVALID_CVC",
    },
    payment_failed: {
      title: "Payment Failed",
      description: "We were unable to process your payment. Please try again or use a different payment method.",
      code: "PAYMENT_FAILED",
    },
  }

  const currentError = errorMessages[errorCode as keyof typeof errorMessages] || errorMessages.payment_failed

  const troubleshootingSteps = [
    "Verify your card details are entered correctly",
    "Check that your card has sufficient funds",
    "Ensure your card is not expired",
    "Try using a different payment method",
    "Contact your bank to authorize the transaction",
    "Clear your browser cache and try again",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale={defaultLocale} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Error Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <XCircle className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Unsuccessful</h1>
            <p className="text-xl text-gray-600 mb-4">
              We were unable to process your payment. Don't worry, no charges were made to your account.
            </p>
          </div>

          {/* Error Details */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <div className="font-semibold">{currentError.title}</div>
              <div className="mt-1">{currentError.description}</div>
              <div className="mt-2 text-sm font-mono">Error Code: {currentError.code}</div>
            </AlertDescription>
          </Alert>

          {/* Troubleshooting Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What Can You Do?</CardTitle>
              <CardDescription>Follow these steps to resolve the payment issue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshootingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Try Payment Again</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Return to the payment page and try again with the same or different payment method
                  </p>
                  <Link href="/payment">
                    <Button className="w-full">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Retry Payment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <ArrowLeft className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Choose Different Plan</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Go back to pricing and select a different plan that better suits your needs
                  </p>
                  <Link href="/pricing">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Pricing Plans
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Our billing support team is here to help resolve payment issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Billing Support</h3>
                    <p className="text-gray-600 text-sm mb-2">Speak with our billing team for immediate assistance</p>
                    <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-xs">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600 text-sm mb-2">Send us details about your payment issue</p>
                    <p className="text-blue-600 font-medium">billing@visaflowcrm.com</p>
                    <p className="text-gray-500 text-xs">Response within 2 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Issues */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Payment Issues</CardTitle>
              <CardDescription>Quick solutions for frequent payment problems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">International Cards</h4>
                  <p className="text-gray-600 text-sm">
                    Some international cards may be blocked. Contact your bank to authorize international transactions.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">3D Secure Authentication</h4>
                  <p className="text-gray-600 text-sm">
                    Your bank may require additional authentication. Make sure to complete any pop-up verification
                    steps.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Browser Issues</h4>
                  <p className="text-gray-600 text-sm">
                    Try disabling ad blockers, clearing cookies, or using a different browser.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Options */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Still Having Issues?</h3>
            <div className="space-x-4">
              <Link href="/contact">
                <Button variant="outline">Contact Sales Team</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Return to Homepage</Button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              You can also start with our free 14-day trial - no payment required.
            </p>
          </div>
        </div>
      </div>

      <Footer locale={defaultLocale} />
    </div>
  )
}
