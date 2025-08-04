"use client"

import { useState, useEffect } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Globe, Phone, Mail, MapPin, ArrowLeft, Clock, MessageCircle, HeadphonesIcon, Send } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation(currentLang, "backToHome")}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "getInTouch")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "contactHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{getTranslation(currentLang, "phoneSupport")}</h3>
              <p className="text-gray-600 mb-4">{getTranslation(currentLang, "phoneSupportHours")}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">+1 (555) 123-4567</p>
              <Button variant="outline" className="w-full bg-transparent">
                {getTranslation(currentLang, "callNow")}
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{getTranslation(currentLang, "emailSupport")}</h3>
              <p className="text-gray-600 mb-4">{getTranslation(currentLang, "emailResponseGuarantee")}</p>
              <p className="text-lg font-semibold text-blue-600 mb-4">hello@visaflowcrm.com</p>
              <Button variant="outline" className="w-full bg-transparent">
                {getTranslation(currentLang, "sendEmail")}
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{getTranslation(currentLang, "liveSupport")}</h3>
              <p className="text-gray-600 mb-4">{getTranslation(currentLang, "instantHelp")}</p>
              <p className="text-lg font-semibold text-green-600 mb-4">● Online</p>
              <Button variant="outline" className="w-full bg-transparent">
                {getTranslation(currentLang, "startChat")}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {getTranslation(currentLang, "sendMessage")}
              </h2>
              <p className="text-xl text-gray-600">{getTranslation(currentLang, "formDescription")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{getTranslation(currentLang, "firstName")}</Label>
                      <Input
                        id="firstName"
                        placeholder={getTranslation(currentLang, "firstNamePlaceholder")}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{getTranslation(currentLang, "lastName")}</Label>
                      <Input
                        id="lastName"
                        placeholder={getTranslation(currentLang, "lastNamePlaceholder")}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="company">{getTranslation(currentLang, "company")}</Label>
                    <Input
                      id="company"
                      placeholder={getTranslation(currentLang, "companyNamePlaceholder")}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{getTranslation(currentLang, "phone")}</Label>
                    <Input id="phone" placeholder="+90 555 123 45 67" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">{getTranslation(currentLang, "subject")}</Label>
                    <select
                      id="subject"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{getTranslation(currentLang, "selectSubject")}</option>
                      <option value="demo">{getTranslation(currentLang, "demoRequest")}</option>
                      <option value="pricing">{getTranslation(currentLang, "pricing")}</option>
                      <option value="technical">{getTranslation(currentLang, "technicalSupport")}</option>
                      <option value="partnership">{getTranslation(currentLang, "partnership")}</option>
                      <option value="other">{getTranslation(currentLang, "other")}</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">{getTranslation(currentLang, "yourMessage")}</Label>
                    <Textarea
                      id="message"
                      placeholder={getTranslation(currentLang, "messagePlaceholder")}
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Send className="mr-2 h-5 w-5" />
                    {getTranslation(currentLang, "sendMessageButton")}
                  </Button>
                </form>
              </Card>

              {/* Company Info */}
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{getTranslation(currentLang, "address")}</h3>
                      <p className="text-gray-600">
                        123 Business Avenue
                        <br />
                        Suite 100
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {getTranslation(currentLang, "workingHours")}
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>{getTranslation(currentLang, "mondayFriday")} 09:00 - 18:00</p>
                        <p>{getTranslation(currentLang, "saturday")} 10:00 - 16:00</p>
                        <p>
                          {getTranslation(currentLang, "sunday")} {getTranslation(currentLang, "closed")}
                        </p>
                        <p className="text-sm text-blue-600 mt-2">
                          * {getTranslation(currentLang, "emergencyEmailSupport")}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <HeadphonesIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {getTranslation(currentLang, "supportLevels")}
                      </h3>
                      <div className="text-gray-600 space-y-2">
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "emailSupport")}:</span>
                          <span className="text-green-600">24 {getTranslation(currentLang, "hours")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "phoneSupport")}:</span>
                          <span className="text-blue-600">{getTranslation(currentLang, "workingHours")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "liveSupport")}:</span>
                          <span className="text-green-600">{getTranslation(currentLang, "instant")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "findUs")}
            </h2>
            <p className="text-xl text-gray-600">{getTranslation(currentLang, "visitOffice")}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                  <div className="h-96 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959542207!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="VisaFlow CRM Office Location"
                    ></iframe>
                  </div>
                </Card>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{getTranslation(currentLang, "mainOffice")}</h3>
                      <p className="text-gray-600 mb-4">
                        123 Business Avenue
                        <br />
                        Suite 100
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        {getTranslation(currentLang, "getDirections")}
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{getTranslation(currentLang, "officeHours")}</h3>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "mondayFriday")}:</span>
                          <span>09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "saturday")}:</span>
                          <span>10:00 - 16:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{getTranslation(currentLang, "sunday")}:</span>
                          <span>{getTranslation(currentLang, "closed")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {getTranslation(currentLang, "quickContact")}
                      </h3>
                      <div className="text-gray-600 space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Phone:</span> +1 (555) 123-4567
                        </div>
                        <div>
                          <span className="font-medium">Email:</span> hello@visaflowcrm.com
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-green-600 text-xs font-medium">
                            {getTranslation(currentLang, "currentlyOpen")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "ctaTitle")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                {getTranslation(currentLang, "freeTrial")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {getTranslation(currentLang, "requestDemo")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">VisaFlow CRM</span>
              </div>
              <p className="text-gray-400">{getTranslation(currentLang, "footerDescription")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "product")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "features")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "pricing")}
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "roadmap")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "support")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "helpCenter")}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "contact")}
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API {getTranslation(currentLang, "documentation")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{getTranslation(currentLang, "company")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "aboutUs")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "privacy")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {getTranslation(currentLang, "terms")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VisaFlow CRM. {getTranslation(currentLang, "allRightsReserved")}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
