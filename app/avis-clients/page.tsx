import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StarRating } from "@/components/ui/StarRating";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { testimonials, aggregateRating } from "@/lib/data/testimonials";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Avis Clients | Témoignages",
  description:
    "Découvrez les avis de nos clients satisfaits. Note moyenne de 4.8/5 sur Google. Témoignages vérifiés de nos chantiers de maçonnerie.",
};

export default function AvisClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Avis de nos clients
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure carte de visite.
            Découvrez leurs témoignages.
          </p>
        </div>
      </section>

      {/* Aggregate Rating */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center bg-neutral-50 rounded-2xl px-12 py-10 border border-neutral-200">
            <p className="text-6xl font-bold text-primary mb-2">
              {aggregateRating.average}
              <span className="text-2xl text-neutral-400 font-normal">/5</span>
            </p>
            <StarRating rating={aggregateRating.average} size={28} className="mb-3" />
            <p className="text-neutral-500">
              {aggregateRating.count} avis Google
            </p>

            {/* Distribution bars */}
            <div className="mt-6 w-full max-w-xs space-y-2">
              {([5, 4, 3, 2, 1] as const).map((star) => {
                const count = aggregateRating.distribution[star];
                const percentage = (count / aggregateRating.count) * 100;
                return (
                  <div key={star} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-neutral-500">{star}</span>
                    <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-neutral-400">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <SectionTitle
          title="Ce que disent nos clients"
          subtitle="Tous les avis proviennent de clients ayant réalisé des travaux avec nous."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  {/* Initials avatar */}
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} size={16} className="mb-3" />

                <blockquote className="text-neutral-600 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>{testimonial.projectType}</span>
                  <time dateTime={testimonial.date}>
                    {new Date(testimonial.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA to leave a review */}
      <SectionWrapper background="neutral">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Vous avez travaillé avec nous ?
          </h2>
          <p className="text-neutral-500 mb-8">
            Votre avis compte ! Partagez votre expérience sur Google pour aider
            d&apos;autres propriétaires à faire le bon choix.
          </p>
          <Button
            href="https://g.page/review"
            variant="accent"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} className="mr-2" />
            Laisser un avis Google
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
