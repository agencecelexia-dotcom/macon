import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionTitle({ title, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-neutral-500",
          align === "center" && "max-w-2xl mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
