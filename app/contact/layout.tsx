import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "VisaFlow CRM ile iletişime geçin. Telefon: +90 (232) 335 35 09, Email: bilgi@visaflow.tr, WhatsApp destek. İzmir, Çankaya ofisimizi ziyaret edin.",
  alternates: { canonical: "/contact" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VisaFlow CRM",
  description:
    "Küçük ve orta ölçekli vize ofisleri için özel tasarlanmış CRM sistemi.",
  url: "https://visaflow.tr",
  telephone: "+90-232-335-35-09",
  email: "bilgi@visaflow.tr",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "İsmet Kaptan Mah. 1385 Sokak No:3 D:403, Yeni Asır İş Merkezi",
    addressLocality: "Çankaya",
    addressRegion: "İzmir",
    postalCode: "35210",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.4262,
    longitude: 27.1345,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      {children}
    </>
  );
}
