import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "VisaFlow CRM fiyatlandırma planları. Aylık €79, yıllık %20 indirimle €758. 2 kullanıcı dahil, ek kullanıcı €2/ay. Tüm planlarda sınırsız müşteri ve başvuru.",
  alternates: { canonical: "/pricing" },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "VisaFlow CRM",
      description: "Vize ofisleri için CRM yazılımı",
      offers: [
        {
          "@type": "Offer",
          name: "Aylık Plan",
          price: "79",
          priceCurrency: "EUR",
          billingDuration: "P1M",
        },
        {
          "@type": "Offer",
          name: "Yıllık Plan",
          price: "758",
          priceCurrency: "EUR",
          billingDuration: "P1Y",
        },
      ],
    }),
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
