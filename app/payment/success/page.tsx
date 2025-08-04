"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle, Download, Calendar, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { defaultLocale } from "@/i18n/config"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("order") || "VF" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale={defaultLocale} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for choosing VisaFlow CRM. Your subscription is now active.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Order #{orderNumber}
            </Badge>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Confirmation</CardTitle>
              <CardDescription>Your subscription details and next steps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Subscription Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan:</span>
                      <span className="font-medium">Monthly Plan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Billing Cycle:</span>
                      <span className="font-medium">Monthly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Billing Date:</span>
                      <span className="font-medium">
                        {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount Paid:</span>
                      <span className="font-medium">€83.49</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Status:</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Users Included:</span>
                      <span className="font-medium">1 User</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage:</span>
                      <span className="font-medium">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support Level:</span>
                      <span className="font-medium">Email Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>Get started with your VisaFlow CRM account in 3 simple steps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access Your Dashboard</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Log in to your new VisaFlow CRM dashboard and explore the features
                  </p>
                  <Button className="w-full">
                    Access Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Schedule Onboarding</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Book a free onboarding session with our team to get you started
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Session
                  </Button>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Download Receipt</h3>
                  <p className="text-gray-600 text-sm mb-4">Download your payment receipt for your records</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Receipt
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Our support team is here to help you get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600 text-sm mb-2">Speak with our support team directly</p>
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
                    <p className="text-gray-600 text-sm mb-2">Get help via email within 24 hours</p>
                    <p className="text-blue-600 font-medium">support@visaflowcrm.com</p>
                    <p className="text-gray-500 text-xs">24/7 support available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <div className="text-center">
            <div className="space-x-4">
              <Link href="/">
                <Button variant="outline">Return to Homepage</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>
        </div>
      </div>

      <Footer locale={defaultLocale} />
    </div>
  )
}
