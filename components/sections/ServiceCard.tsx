import Link from "next/link";
import { Building2, Hammer, Maximize2, Wrench } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  Hammer,
  Maximize2,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <Link href={`/${service.slug}`} className="group block h-full">
      <div className="h-full bg-white rounded-2xl shadow-premium border border-neutral-200/60 overflow-hidden transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2">
        {/* Image placeholder with premium gradient */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(230,126,34,0.2),transparent_70%)]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={36} className="text-white/80" />
            </div>
          </div>
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center border border-accent/10">
              <Icon size={18} className="text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary tracking-tight">{service.title}</h3>
          </div>
          <p className="text-neutral-500 text-sm mb-5 line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
            En savoir plus <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
