import type { Metadata } from "next";
import { montserrat, inter } from "./fonts";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ClickToCall } from "@/components/ui/ClickToCall";
import { JsonLdScript } from "@/components/seo/JsonLdScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Maçonnerie [Nom] | Construction & Rénovation à [Ville]",
    template: "%s | Maçonnerie [Nom]",
  },
  description:
    "Entreprise de maçonnerie à [Ville] et environs. Construction neuve, rénovation, extension. Devis gratuit sous 48h. Garantie décennale.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maçonnerie [Nom]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLdScript />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <ClickToCall />
        <CookieConsent />
      </body>
    </html>
  );
}
