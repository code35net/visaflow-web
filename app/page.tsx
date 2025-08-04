"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Calendar, FileText, BarChart3, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { getTranslation, type Language } from "@/lib/translations"

export default function HomePage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">14 günlük ücretsiz deneme</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {getTranslation(currentLang, "heroTitle")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{getTranslation(currentLang, "heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  {getTranslation(currentLang, "startFreeTrial")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/visa-crm-dashboard.png"
                  alt="VisaFlow CRM Dashboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">150+ Aktif Ofis</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">%98 Memnuniyet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Aktif Vize Ofisi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">İşlenen Başvuru</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vize ofisleriniz için her şey bir arada
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Müşteri yönetiminden başvuru takibine, randevu sisteminden raporlamaya kadar tüm ihtiyaçlarınızı
              karşılayan kapsamlı CRM çözümü.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Müşteri Yönetimi</CardTitle>
                <CardDescription>Tüm müşteri bilgilerini tek yerden yönetin ve takip edin</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detaylı müşteri profilleri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    İletişim geçmişi takibi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Otomatik hatırlatmalar
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Başvuru Takibi</CardTitle>
                <CardDescription>Vize başvurularını adım adım takip edin ve yönetin</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Başvuru durumu takibi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Belge yönetimi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Otomatik bildirimler
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Randevu Sistemi</CardTitle>
                <CardDescription>Akıllı randevu planlama ve takvim entegrasyonu</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Online randevu alma
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Takvim senkronizasyonu
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SMS/Email hatırlatma
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Güçlü özellikler, kolay kullanım</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Güvenli Belge Saklama</h3>
              <p className="text-gray-600 text-sm mb-4">Müşteri belgelerini güvenli şekilde saklayın ve yönetin</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• SSL şifreleme</li>
                <li>• Otomatik yedekleme</li>
                <li>• Erişim kontrolü</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Raporlama & Analitik</h3>
              <p className="text-gray-600 text-sm mb-4">Detaylı raporlar ve analizlerle işinizi büyütün</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Performans raporları</li>
                <li>• Gelir analizi</li>
                <li>• Müşteri istatistikleri</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Çok Kullanıcılı Sistem</h3>
              <p className="text-gray-600 text-sm mb-4">Ekibinizle birlikte çalışın, yetkileri yönetin</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Rol tabanlı erişim</li>
                <li>• Ekip yönetimi</li>
                <li>• Aktivite takibi</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Otomatik Hatırlatmalar</h3>
              <p className="text-gray-600 text-sm mb-4">Önemli tarihleri kaçırmayın, otomatik bildirimler alın</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Randevu hatırlatmaları</li>
                <li>• Belge son tarihleri</li>
                <li>• Takip bildirimleri</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Çoklu Dil Desteği</h3>
              <p className="text-gray-600 text-sm mb-4">6 farklı dilde hizmet verin, global müşterilere ulaşın</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• İngilizce, Türkçe, Arapça</li>
                <li>• Rusça, Estonca</li>
                <li>• RTL dil desteği</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Akıllı Formlar</h3>
              <p className="text-gray-600 text-sm mb-4">
                Özelleştirilebilir formlarla veri toplama sürecini hızlandırın
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Dinamik form oluşturma</li>
                <li>• Otomatik validasyon</li>
                <li>• Mobil uyumlu</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Basit ve şeffaf fiyatlandırma</h2>
            <p className="text-xl text-gray-600">
              14 günlük ücretsiz deneme ile başlayın, istediğiniz zaman iptal edin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Aylık Plan</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-4">€69</div>
                <div className="text-gray-500">/ ay</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Sınırsız müşteri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Tüm özellikler
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Email desteği
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Başlayın</Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-blue-600 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">En Popüler</Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Yıllık Plan</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-4">€662</div>
                <div className="text-gray-500">/ yıl</div>
                <Badge variant="secondary" className="mt-2">
                  %20 İndirim
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Sınırsız müşteri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Tüm özellikler
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Öncelikli destek
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ücretsiz eğitim
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Başlayın</Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Ek Kullanıcı</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-4">€2</div>
                <div className="text-gray-500">/ kullanıcı / ay</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Tam erişim
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Rol yönetimi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Aktivite takibi
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Kullanıcı Ekle
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Tüm fiyatlara %20 KDV dahildir • 14 günlük ücretsiz deneme</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Ücretsiz Denemeyi Başlat
            </Button>
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
              <p className="text-gray-400">Vize ofisleri için özel tasarlanmış CRM çözümü</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Özellikler
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fiyatlandırma
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Dokümantasyonu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Gizlilik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Şartlar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VisaFlow CRM. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
