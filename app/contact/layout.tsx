import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "VisaFlow CRM ile iletişime geçin. Telefon: +90 (232) 335 35 09, Email: bilgi@visaflow.tr, WhatsApp destek. İzmir, Çankaya ofisimizi ziyaret edin.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
