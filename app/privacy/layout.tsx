import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "VisaFlow CRM gizlilik politikası. KVKK ve GDPR uyumlu veri işleme, 256-bit SSL şifreleme, günlük otomatik yedekleme.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
