"use client";

import { useState, useEffect } from "react";
import { getTranslation, type Language } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  UserCheck,
  Mail,
  RefreshCw,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
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

  const sections = [
    {
      titleKey: "privacy.section1Title" as const,
      contentKey: "privacy.section1Content" as const,
      icon: Shield,
    },
    {
      titleKey: "privacy.section2Title" as const,
      contentKey: "privacy.section2Content" as const,
      icon: Eye,
      itemsKey: "privacy.section2Items" as const,
    },
    {
      titleKey: "privacy.section3Title" as const,
      contentKey: "privacy.section3Content" as const,
      icon: Lock,
      itemsKey: "privacy.section3Items" as const,
    },
    {
      titleKey: "privacy.section4Title" as const,
      contentKey: "privacy.section4Content" as const,
      icon: Shield,
    },
    {
      titleKey: "privacy.section5Title" as const,
      contentKey: "privacy.section5Content" as const,
      icon: Lock,
    },
    {
      titleKey: "privacy.section6Title" as const,
      contentKey: "privacy.section6Content" as const,
      icon: Cookie,
    },
    {
      titleKey: "privacy.section7Title" as const,
      contentKey: "privacy.section7Content" as const,
      icon: UserCheck,
      itemsKey: "privacy.section7Items" as const,
    },
    {
      titleKey: "privacy.section8Title" as const,
      contentKey: "privacy.section8Content" as const,
      icon: Mail,
    },
    {
      titleKey: "privacy.section9Title" as const,
      contentKey: "privacy.section9Content" as const,
      icon: RefreshCw,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "privacy.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              {getTranslation(currentLang, "privacy.subtitle")}
            </p>
            <p className="text-sm text-gray-500">
              {getTranslation(currentLang, "privacy.lastUpdated")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        {getTranslation(currentLang, section.titleKey)}
                      </h2>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {getTranslation(currentLang, section.contentKey)}
                      </p>
                      {section.itemsKey && (
                        <ul className="mt-4 space-y-2">
                          {getTranslation(currentLang, section.itemsKey)
                            .split("|")
                            .map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start text-gray-600"
                              >
                                <span className="text-blue-600 mr-2 mt-1">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
