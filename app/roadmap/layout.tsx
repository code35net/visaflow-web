import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yol Haritası",
  description:
    "VisaFlow CRM yol haritası. Müşteri portalı v2, gelişmiş raporlama, AI asistanı ve mobil uygulama gibi yakında gelecek özellikler.",
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
