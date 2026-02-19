import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { blogPosts } from "@/lib/data/blog-posts";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Maçonnerie | Conseils, Prix & Guides",
  description:
    "Retrouvez nos articles et guides sur la maçonnerie : prix au m², conseils pour choisir son maçon, réglementation, astuces de rénovation et construction.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Notre blog
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Conseils, guides pratiques et actualités de la maçonnerie pour vous
            aider dans vos projets de construction et rénovation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper>
        <SectionTitle
          title="Nos derniers articles"
          subtitle="Guides, conseils et informations utiles pour vos projets."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card>
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
                  <span>Image : {post.title}</span>
                </div>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge>{post.category}</Badge>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readingTime} min de lecture
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
