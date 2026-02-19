import Link from "next/link";
import { Building2, Hammer, Maximize2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
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
    <Link href={`/${service.slug}`}>
      <Card className="h-full group">
        {/* Image placeholder */}
        <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={48} className="text-primary-400" />
          </div>
        </div>
        <CardContent>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary">{service.title}</h3>
          </div>
          <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
          <span className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
            En savoir plus <ArrowRight size={16} />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
