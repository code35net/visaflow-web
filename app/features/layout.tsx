import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özellikler",
  description:
    "Müşteri yönetimi, başvuru takibi, randevu sistemi, güvenli belge depolama, raporlama ve çok kullanıcılı sistem. VisaFlow CRM ile tüm vize ofis ihtiyaçlarınız tek platformda.",
  alternates: { canonical: "/features" },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
