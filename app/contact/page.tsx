import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Devis Gratuit | Contactez-nous",
  description:
    "Demandez votre devis gratuit pour vos travaux de maçonnerie. Réponse sous 48h. Appelez-nous ou remplissez le formulaire en ligne.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Demandez votre devis gratuit
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez une réponse personnalisée sous 48h.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Formulaire multi-étapes */}
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Nos coordonnées</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${company.phoneRaw}`} className="flex items-start gap-3 text-neutral-600 hover:text-accent transition-colors">
                    <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="font-medium">{company.phone}</p>
                      <p className="text-sm text-neutral-400">Lun-Ven 8h-18h</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-neutral-600 hover:text-accent transition-colors">
                    <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-neutral-600">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    {company.address.street}<br />
                    {company.address.postalCode} {company.address.city}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-neutral-600">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  {company.hours}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-4">Nos garanties</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={18} className="text-accent shrink-0" />
                  <span>Assurance décennale</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award size={18} className="text-accent shrink-0" />
                  <span>{company.yearsExperience}+ ans d&apos;expérience</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock size={18} className="text-accent shrink-0" />
                  <span>Réponse garantie sous 48h</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">
              Carte Google Maps (à intégrer)
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
