"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Users,
  Calendar,
  FileText,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getTranslation, type Language } from "@/lib/translations";
import {
  Star,
  ArrowLeft,
  Quote,
  Building2,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) setCurrentLang(savedLang);

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail as Language);
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener,
    );
    return () =>
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener,
      );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                {getTranslation(currentLang, "navigation.justOneDay")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(currentLang, "hero.title")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {getTranslation(currentLang, "hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                >
                  {getTranslation(currentLang, "hero.startFreeTrial")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/visa-crm-dashboard.png"
                  alt="VisaFlow CRM Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">
                    {getTranslation(currentLang, "hero.quickRegister")}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">
                    {getTranslation(currentLang, "hero.reporting")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">
                {getTranslation(currentLang, "testimonials.activeVisaOffices")}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">
                {getTranslation(currentLang, "testimonials.happyCustomers")}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">
                {getTranslation(
                  currentLang,
                  "testimonials.processedApplications",
                )}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">
                {getTranslation(currentLang, "testimonials.successRate")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "mainFeatures.header")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(currentLang, "mainFeatures.text")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.customerManagement.title",
                  )}
                </CardTitle>
                <CardDescription>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.customerManagement.desc1",
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.customerManagement.desc2",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.customerManagement.desc3",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.customerManagement.desc4",
                    )}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.applicationTracking.title",
                  )}
                </CardTitle>
                <CardDescription>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.applicationTracking.desc1",
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.applicationTracking.desc2",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.applicationTracking.desc3",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.applicationTracking.desc4",
                    )}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.reservationSystem.title",
                  )}
                </CardTitle>
                <CardDescription>
                  {getTranslation(
                    currentLang,
                    "mainFeatures.items.reservationSystem.desc1",
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.reservationSystem.desc2",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.reservationSystem.desc3",
                    )}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {getTranslation(
                      currentLang,
                      "mainFeatures.items.reservationSystem.desc4",
                    )}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "detailedFeatures.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature1.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature1.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature1.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature1.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature1.list3",
                  )}
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature2.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature2.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature2.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature2.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature2.list3",
                  )}
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature3.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature3.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature3.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature3.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature3.list3",
                  )}
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature4.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature4.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature4.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature4.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature4.list3",
                  )}
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature5.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature5.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature5.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature5.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature5.list3",
                  )}
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {getTranslation(currentLang, "detailedFeatures.feature6.title")}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {getTranslation(currentLang, "detailedFeatures.feature6.desc")}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature6.list1",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature6.list2",
                  )}
                </li>
                <li>
                  {getTranslation(
                    currentLang,
                    "detailedFeatures.feature6.list3",
                  )}
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
