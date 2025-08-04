import { ArrowRight, Check, Phone, Mail, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import { getTranslation, t } from "@/i18n/utils"

interface LocalePricingPageProps {
  params: {
    locale: Locale
  }
}

export default function LocalePricingPage({ params }: LocalePricingPageProps) {
  const locale = params.locale
  const translations = getTranslation(locale)

  const getLocalizedPath = (path: string) => {
    return locale === "en" ? path : `/${locale}${path}`
  }

  // Calculate pricing
  const monthlyPrice = 69
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8) // 20% off
  const additionalUserPrice = Math.round(monthlyPrice * 0.7) // 30% off

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Client Management", starter: true, professional: true, enterprise: true },
        { name: "Application Tracking", starter: true, professional: true, enterprise: true },
        { name: "Document Storage", starter: "5GB", professional: "50GB", enterprise: "Unlimited" },
        { name: "User Accounts", starter: "3 users", professional: "10 users", enterprise: "Unlimited" },
        { name: "Email Notifications", starter: true, professional: true, enterprise: true },
        { name: "Basic Reporting", starter: true, professional: true, enterprise: true },
      ],
    },
    {
      category: "Advanced Features",
      items: [
        { name: "Advanced Analytics", starter: false, professional: true, enterprise: true },
        { name: "Custom Workflows", starter: false, professional: true, enterprise: true },
        { name: "API Access", starter: false, professional: true, enterprise: true },
        { name: "White-label Options", starter: false, professional: false, enterprise: true },
        { name: "Custom Integrations", starter: false, professional: false, enterprise: true },
        { name: "Priority Support", starter: false, professional: true, enterprise: true },
      ],
    },
    {
      category: "Support & Training",
      items: [
        { name: "Email Support", starter: true, professional: true, enterprise: true },
        { name: "Phone Support", starter: false, professional: true, enterprise: true },
        { name: "24/7 Support", starter: false, professional: false, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
        { name: "Onboarding Training", starter: false, professional: true, enterprise: true },
        { name: "Custom Training Sessions", starter: false, professional: false, enterprise: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "What happens if I exceed my user limit?",
      answer: "You'll be automatically charged for additional users at the discounted rate of €48/user/month.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer special pricing for non-profit organizations. Contact our sales team for more information.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your visa office. Start with our free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath("/contact")}>
                <Button size="lg" className="text-lg px-8 py-3">
                  {t(translations, "homepage.startFreeTrial")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {t(translations, "homepage.schedulDemo")}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">{t(translations, "homepage.freeTrialNote")}</p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.monthly")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €69
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perMonth")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.monthlyDesc")}</CardDescription>
                <p className="text-sm text-gray-500">{t(translations, "homepage.billedMonthly")}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.unlimitedClients")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.emailSupport")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.documentStorage")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    API access
                  </li>
                </ul>
                <Link href={`${getLocalizedPath("/payment")}?plan=monthly`}>
                  <Button className="w-full mb-3">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
                <Link href={getLocalizedPath("/contact")}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started (Free Trial)
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                {t(translations, "homepage.mostPopular")}
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.yearly")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €662
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perYear")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.yearlyDesc")}</CardDescription>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-gray-500">{t(translations, "homepage.billedYearly")}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {t(translations, "homepage.savePercent")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.unlimitedClients")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.phoneSupport")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.documentStorage")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.advancedAnalytics")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.prioritySupport")}
                  </li>
                </ul>
                <Link href={`${getLocalizedPath("/payment")}?plan=yearly`}>
                  <Button className="w-full mb-3">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
                <Link href={getLocalizedPath("/contact")}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started (Free Trial)
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Additional User */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t(translations, "homepage.additionalUser")}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  €48
                  <span className="text-lg text-gray-600">{t(translations, "homepage.perUser")}</span>
                </div>
                <CardDescription>{t(translations, "homepage.additionalUserDesc")}</CardDescription>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-gray-500">€33.60/user/month when billed yearly</p>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {t(translations, "homepage.additionalUserDiscount")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.teamCollaboration")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.allFeatures")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.customIntegrations")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.onboarding")}
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    {t(translations, "homepage.training")}
                  </li>
                </ul>
                <Link href={`${getLocalizedPath("/payment")}?plan=additional`}>
                  <Button className="w-full mb-3">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
                <Link href={getLocalizedPath("/contact")}>
                  <Button variant="outline" className="w-full bg-transparent">
                    {t(translations, "homepage.contactSales")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for, contact our support team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your visa office
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our sales team</p>
                <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed information</p>
                <p className="text-blue-600 font-semibold">sales@visaflowcrm.com</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Demo</h3>
                <p className="text-gray-600 mb-4">See VisaFlow in action</p>
                <Button className="mt-2">Book Demo</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of visa offices that trust VisaFlow CRM to streamline their operations and grow their
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath("/contact")}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                {t(translations, "homepage.startFreeTrial")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              {t(translations, "homepage.contactSales")}
            </Button>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
