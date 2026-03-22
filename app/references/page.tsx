"use client";

import { useState, useEffect } from "react";
import { getTranslation, type Language } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Star,
  ArrowLeft,
  Quote,
  Users,
  Building2,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TestimonialsPage() {
  const [currentLang, setCurrentLang] = useState<Language>("tr");
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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

  // Customer logos data
  const customerLogos = [
    { name: "Red And More", logo: "/references/redandmore.jpg" },
    { name: "Esmirna Visa", logo: "/references/esmirna.png" },
    { name: "Adventura Turizm", logo: "/references/adventura.png" },
    { name: "EDubai", logo: "/references/edubai.png" },
    { name: "Ez Visas", logo: "/references/ezvisas.webp" },
    { name: "Prism Visa", logo: "/references/prismvisa.png" },
    { name: "VisaHQ", logo: "/references/visahq.png" },
    { name: "Vizamaz", logo: "/references/vizamaz.png" },
    { name: "Experience Qatar", logo: "/references/experience_qa.webp" },
    { name: "Viisa Ekspert", logo: "/references/viisaekspert.svg" },
    { name: "Gala Travel", logo: "/references/galatravel.png" },
    { name: "Al Arab", logo: "/references/alarab.png" },
  ];

  // Auto-rotate logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex(
        (prev) => (prev + 1) % Math.ceil(customerLogos.length / 6),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [customerLogos.length]);

  const getVisibleLogos = () => {
    const logosPerSlide = 6;
    const start = currentLogoIndex * logosPerSlide;
    return customerLogos.slice(start, start + logosPerSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "testimonials.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "testimonials.heroSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-lg px-4 py-2">
                ⭐ 4.9/5{" "}
                {getTranslation(currentLang, "testimonials.averageRating")}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-lg px-4 py-2">
                🏢 150+{" "}
                {getTranslation(currentLang, "testimonials.activeVisaOffices")}
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-lg px-4 py-2">
                📈 98%{" "}
                {getTranslation(
                  currentLang,
                  "testimonials.customerSatisfaction",
                )}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {getTranslation(
                currentLang,
                "testimonials.trustedByLeadingCompanies",
              )}
            </h2>
            <p className="text-gray-600">
              {getTranslation(
                currentLang,
                "testimonials.joinSuccessfulBusinesses",
              )}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
                {getVisibleLogos().map((customer, index) => (
                  <div
                    key={`${currentLogoIndex}-${index}`}
                    className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Image
                      src={customer.logo || "/placeholder.svg"}
                      alt={customer.name}
                      width={200}
                      height={80}
                      className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(customerLogos.length / 6) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLogoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentLogoIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(currentLang, "testimonials.successStories")}
            </h2>
            <p className="text-xl text-gray-600">
              {getTranslation(currentLang, "testimonials.howBusinessesGrow")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {getTranslation(
                    currentLang,
                    "testimonials.productivityIncrease",
                  )}
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +65%
                </div>
                <p className="text-gray-600 text-sm">
                  {getTranslation(
                    currentLang,
                    "testimonials.averageProductivityIncrease",
                  )}
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {getTranslation(
                    currentLang,
                    "testimonials.customerSatisfaction",
                  )}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  +40%
                </div>
                <p className="text-gray-600 text-sm">
                  {getTranslation(
                    currentLang,
                    "testimonials.higherCustomerSatisfaction",
                  )}
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {getTranslation(currentLang, "testimonials.errorReduction")}
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  -80%
                </div>
                <p className="text-gray-600 text-sm">
                  {getTranslation(
                    currentLang,
                    "testimonials.fewerProcessingErrors",
                  )}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(
                currentLang,
                "testimonials.joinSuccessfulBusinesses",
              )}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(
                currentLang,
                "testimonials.startYourSuccessStory",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                {getTranslation(currentLang, "hero.startFreeTrial")}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {getTranslation(currentLang, "common.noCreditCard")} •{" "}
              {getTranslation(currentLang, "common.cancelAnytime")} •{" "}
              {getTranslation(currentLang, "common.support24_7")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
