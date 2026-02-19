import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";
import { company } from "@/lib/data/company";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Prêt à lancer votre projet ?",
  subtitle = "Contactez-nous dès maintenant pour un devis gratuit et personnalisé. Réponse sous 48h garantie.",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="accent" size="lg">
            Demander un devis gratuit
          </Button>
          <Button
            href={`tel:${company.phoneRaw}`}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Phone size={20} className="mr-2" />
            {company.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
