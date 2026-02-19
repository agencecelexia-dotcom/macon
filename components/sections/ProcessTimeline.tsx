import type { ProcessStep } from "@/lib/data/services";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.step} className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
              {step.step}
            </div>
            <h3 className="font-bold text-primary">{step.title}</h3>
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed pl-[52px]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
