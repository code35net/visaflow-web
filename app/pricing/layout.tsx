import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "VisaFlow CRM fiyatlandırma planları. Aylık €79, yıllık %20 indirimle €758. 2 kullanıcı dahil, ek kullanıcı €2/ay. Tüm planlarda sınırsız müşteri ve başvuru.",
  alternates: { canonical: "/pricing" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "VisaFlow CRM demo nasıl talep edilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İletişim sayfamızdan demo talebi gönderebilir veya doğrudan bizi arayabilirsiniz. Demo, uzman ekibimiz tarafından canlı olarak sunulur.",
      },
    },
    {
      "@type": "Question",
      name: "Plan değişikliği yapılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, istediğiniz zaman plan değişikliği yapabilirsiniz. Değişiklik bir sonraki fatura döneminde geçerli olur.",
      },
    },
    {
      "@type": "Question",
      name: "Verilerim güvende mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. 256-bit SSL şifreleme, günlük otomatik yedekleme ve KVKK/GDPR uyumlu veri işleme ile verileriniz güvende.",
      },
    },
    {
      "@type": "Question",
      name: "Kurulum ücreti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, kurulum tamamen ücretsizdir. Ekibimiz sisteminizi 1 gün içinde hazır hale getirir.",
      },
    },
    {
      "@type": "Question",
      name: "Kaç kullanıcı eklenebilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm planlara 2 kullanıcı dahildir. Sınırsız ek kullanıcı ekleyebilirsiniz, her biri aylık €2.",
      },
    },
    {
      "@type": "Question",
      name: "Destek hizmeti nasıl çalışır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık planda email desteği, yıllık planda 7/24 telefon ve email desteği sunulmaktadır.",
      },
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
