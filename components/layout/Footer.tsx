import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/data/company";
import { footerServices, footerLinks } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">{company.name}</h3>
            <p className="text-neutral-300 text-sm mb-6">
              Entreprise de maçonnerie générale à {company.address.city} et environs.
              Construction, rénovation, extension — Devis gratuit sous 48h.
            </p>
            <div className="flex gap-3">
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-block bg-white/10 text-xs px-3 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Nos services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-start gap-3 text-neutral-300 text-sm hover:text-accent transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 text-neutral-300 text-sm hover:text-accent transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {company.address.street}<br />
                  {company.address.postalCode} {company.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-xs">
            &copy; {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-neutral-400 text-xs hover:text-neutral-300 transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
