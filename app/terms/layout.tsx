import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "VisaFlow CRM kullanım şartları. Hizmet tanımı, ödeme koşulları, veri sahipliği, SLA garantisi ve fikri mülkiyet hakları.",
  alternates: { canonical: "/terms" },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
