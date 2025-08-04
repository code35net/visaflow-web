"use client"

import { useState } from "react"
import { CheckCircle, Download, Calendar, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation } from "@/i18n/utils"

interface LocalePaymentSuccessPageProps {
  params: {
    locale: Locale
  }
}

export default function LocalePaymentSuccessPage({ params }: LocalePaymentSuccessPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "monthly"
  const amount = searchParams.get("amount") || "69"

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  const [orderNumber] = useState(
    () => `VF-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`,
  )

  const planNames = {
    monthly: "Monthly Plan",
    yearly: "Yearly Plan",
    additional: "Additional User Plan",
  }

  const currentPlan = planNames[plan as keyof typeof planNames] || "Monthly Plan"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600 mb-2">Welcome to VisaFlow CRM! Your account has been activated.</p>
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Order #{orderNumber}</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Order Confirmation
                </CardTitle>
                <CardDescription>Your purchase details and receipt</CardDescription>
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
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-800">Paid</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  What's Next?
                </CardTitle>
                <CardDescription>Get started with your new VisaFlow CRM account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Access Your Dashboard</h4>
                      <p className="text-sm text-gray-600 mt-1">Log in to your account and explore the features</p>
                      <Button size="sm" className="mt-2">
                        Go to Dashboard
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Schedule Onboarding</h4>
                      <p className="text-sm text-gray-600 mt-1">Book a free 30-minute setup session with our team</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Import Your Data</h4>
                      <p className="text-sm text-gray-600 mt-1">Upload existing client data and documents</p>
                      <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                        Import Guide
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="text-center">
              <CardTitle>Need Help Getting Started?</CardTitle>
              <CardDescription>Our support team is here to help you succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Phone Support</h4>
                  <p className="text-sm text-gray-600 mb-3">Speak with our experts</p>
                  <p className="font-semibold text-blue-600">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Email Support</h4>
                  <p className="text-sm text-gray-600 mb-3">Get detailed assistance</p>
                  <p className="font-semibold text-green-600">support@visaflowcrm.com</p>
                  <p className="text-xs text-gray-500 mt-1">24/7 Response</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Thank you for choosing VisaFlow CRM. We're excited to help you transform your visa office operations!
            </p>
            <Link href={getLocalizedPath("/")}>
              <Button variant="outline">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
