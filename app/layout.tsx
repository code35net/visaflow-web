import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visaflow.tr"),
  title: {
    default: "VisaFlow CRM — Vize Ofisleri İçin Akıllı CRM Çözümü",
    template: "%s | VisaFlow CRM",
  },
  description:
    "Küçük ve orta ölçekli vize ofisleri için özel tasarlanmış CRM sistemi. Müşteri takibi, başvuru yönetimi ve randevu sistemi.",
  keywords: [
    "vize CRM",
    "müşteri yönetimi",
    "başvuru takibi",
    "randevu sistemi",
    "vize ofisi yazılımı",
    "visa CRM",
    "visa office software",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "VisaFlow CRM — Vize Ofisleri İçin Akıllı CRM Çözümü",
    description:
      "Müşteri yönetimi, başvuru takibi, randevu sistemi ile vize ofis süreçlerinizi dijitalleştirin.",
    url: "https://visaflow.tr",
    siteName: "VisaFlow CRM",
    images: [
      {
        url: "/visaflow-logo.png",
        width: 1200,
        height: 630,
        alt: "VisaFlow CRM",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaFlow CRM — Vize Ofisleri İçin Akıllı CRM",
    description:
      "Müşteri yönetimi, başvuru takibi, randevu sistemi ile vize ofis süreçlerinizi dijitalleştirin.",
    images: ["/visaflow-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://visaflow.tr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VisaFlow CRM",
              url: "https://visaflow.tr",
              logo: "https://visaflow.tr/visaflow-logo.png",
              description:
                "Küçük ve orta ölçekli vize ofisleri için özel tasarlanmış CRM sistemi.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "İsmet Kaptan Mah. 1385 Sokak No:3 D:403, Yeni Asır İş Merkezi",
                addressLocality: "Çankaya",
                addressRegion: "İzmir",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-232-335-35-09",
                contactType: "sales",
                email: "bilgi@visaflow.tr",
                availableLanguage: [
                  "Turkish",
                  "English",
                  "Arabic",
                  "Azerbaijani",
                  "Estonian",
                  "Russian",
                ],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
