// Updated Roadmap with grouped sections and full card content
"use client";

import { useState, useEffect } from "react";
import { getTranslation, type Language } from "@/lib/translations";
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
  Calendar,
  CheckCircle,
  Code,
  Clock,
  Zap,
  Smartphone,
  Bot,
  BarChart3,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function RoadmapPage() {
  const [currentLang, setCurrentLang] = useState<Language>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) setCurrentLang(savedLang);
    const handleLanguageChange = (event: CustomEvent) =>
      setCurrentLang(event.detail as Language);
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
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">
                {getTranslation(currentLang, "roadmap.title")}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "roadmap.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* In Development */}
            <div>
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {getTranslation(currentLang, "roadmap.inDevelopment")}
                  </h2>
                  <Badge className="bg-blue-100 text-blue-800">
                    Q1 – Q2 2026
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {getTranslation(
                            currentLang,
                            "roadmap.customerPortal",
                          )}
                          <Badge className="bg-blue-100 text-blue-800 text-xs">
                            v2
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          {currentLang === "tr"
                            ? "Gelişmiş müşteri self-servis portalı"
                            : "Advanced customer self-service portal"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {currentLang === "tr"
                          ? "Online ödeme entegrasyonu"
                          : "Online payment integration"}
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {currentLang === "tr"
                          ? "Anlık mesajlaşma sistemi"
                          : "Real-time messaging system"}
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {currentLang === "tr"
                          ? "Randevu planlama ve takvim"
                          : "Appointment scheduling & calendar"}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>
                          {getTranslation(
                            currentLang,
                            "roadmap.advancedAnalytics",
                          )}
                        </CardTitle>
                        <CardDescription>
                          {getTranslation(
                            currentLang,
                            "roadmap.advancedAnalyticsDescription",
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.realTimeDashboard",
                        )}
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.customizableReports",
                        )}
                      </li>
                      <li className="flex items-center">
                        <Code className="h-4 w-4 text-blue-600 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.predictiveAnalysis",
                        )}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Planned */}
            <div>
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mr-6">
                  <Calendar className="h-6 w-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {getTranslation(currentLang, "roadmap.planned")}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Bot className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>
                          {getTranslation(currentLang, "roadmap.aiAssistant")}
                        </CardTitle>
                        <CardDescription>
                          {getTranslation(
                            currentLang,
                            "roadmap.aiAssistantDescription",
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.automaticFormFilling",
                        )}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.smartSuggestionSystem",
                        )}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.chatbotSupport")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>
                          {getTranslation(currentLang, "roadmap.mobileApp")}
                        </CardTitle>
                        <CardDescription>
                          {getTranslation(
                            currentLang,
                            "roadmap.mobileAppDescription",
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.offlineSupport")}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.pushNotifications",
                        )}
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.cameraIntegration",
                        )}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Completed */}
            <div>
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-6">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {getTranslation(currentLang, "roadmap.completed")}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {getTranslation(
                            currentLang,
                            "roadmap.customerPortal",
                          )}
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            v1
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          {getTranslation(
                            currentLang,
                            "roadmap.customerPortalDescription",
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.applicationStatusTracking",
                        )}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(
                          currentLang,
                          "roadmap.documentUploadSystem",
                        )}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.customerListing")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>
                          {getTranslation(
                            currentLang,
                            "roadmap.normalAnalytics",
                          )}
                        </CardTitle>
                        <CardDescription>
                          {getTranslation(
                            currentLang,
                            "roadmap.normalAnalyticsDescription",
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.normalDashboard")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.normalReports")}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {getTranslation(currentLang, "roadmap.normalAnalysis")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "roadmap.experienceTheFuture")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {getTranslation(currentLang, "roadmap.digitalizeVisaOperations")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                {getTranslation(currentLang, "hero.startFreeTrial")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
