import { Shield, Clock, Users, Award } from "lucide-react";
import { company } from "@/lib/data/company";

const items = [
  {
    icon: Award,
    label: `+ de ${company.yearsExperience} ans d'expérience`,
  },
  {
    icon: Shield,
    label: "Assurance décennale",
  },
  {
    icon: Clock,
    label: "Devis gratuit 48h",
  },
  {
    icon: Users,
    label: `${company.clientsSatisfied}+ clients satisfaits`,
  },
];

export function ReassuranceBar() {
  return (
    <section className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon size={24} className="text-accent shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
