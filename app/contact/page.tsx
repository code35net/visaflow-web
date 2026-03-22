"use client";

import { useState, useEffect } from "react";
import { getTranslation, type Language } from "@/lib/translations";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ContactPage() {
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
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {getTranslation(currentLang, "contact.getInTouch")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {getTranslation(currentLang, "contact.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {getTranslation(currentLang, "contact.phoneSupport")}
              </h3>
              <p className="text-gray-600 mb-4">
                {getTranslation(currentLang, "contact.phoneSupportHours")}
              </p>
              <a
                href="tel:+902323353509"
                className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                +90 (232) 335 35 09
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {getTranslation(currentLang, "contact.sendEmail")}
              </h3>
              <p className="text-gray-600 mb-4">
                {getTranslation(currentLang, "contact.emailResponseGuarantee")}
              </p>
              <a
                href="mailto:bilgi@visaflow.tr"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                bilgi@visaflow.tr
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {getTranslation(currentLang, "contact.liveSupport")}
              </h3>
              <p className="text-gray-600 mb-4">
                {getTranslation(currentLang, "contact.instantHelp")}
              </p>
              <a
                href="https://wa.me/902323353509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                  <div className="h-96 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.6599875336688!2d27.134549076624538!3d38.4262218718285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd900524a29af%3A0xecd24c76d174ace1!2zWWVuaSBBc8SxciDEsMWfIE1lcmtlemk!5e0!3m2!1sen!2str!4v1754518664863!5m2!1sen!2str"
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
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {getTranslation(currentLang, "contact.mainOffice")}
                      </h3>
                      <p className="text-gray-600">
                        İsmet Kaptan Mah.
                        <br />
                        1385 Sokak No:3 D:403
                        <br />
                        Yeni Asır İş Merkezi
                        <br />
                        Çankaya / İzmir
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {getTranslation(currentLang, "contact.workingHours")}
                      </h3>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>
                            {getTranslation(
                              currentLang,
                              "contact.mondayFriday",
                            )}
                            :
                          </span>
                          <span> 09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>
                            {getTranslation(currentLang, "contact.saturday")}:
                          </span>
                          <span>
                            {getTranslation(currentLang, "contact.closed")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>
                            {getTranslation(currentLang, "contact.sunday")}:
                          </span>
                          <span>
                            {getTranslation(currentLang, "contact.closed")}
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

      <Footer />
    </div>
  );
}
