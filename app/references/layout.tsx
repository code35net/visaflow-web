import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "150+ aktif vize ofisi VisaFlow CRM kullanıyor. %98 müşteri memnuniyeti, +65% verimlilik artışı. Referanslarımızı ve başarı hikayelerini keşfedin.",
  alternates: { canonical: "/references" },
};

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
