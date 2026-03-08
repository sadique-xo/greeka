import { testimonials, siteConfig } from "@/data/cafe-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#C0765A] mb-3">
          Reviews
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B2631] mb-4">
          What People Say
        </h2>
        <p className="text-[#5D6D7E] mb-12">
          {siteConfig.stats.rating}★ on Google ({siteConfig.stats.reviews}+ reviews) · Ranked Fine Dining
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review) => (
            <Card key={review.id} className="h-full overflow-hidden">
              {/* Decorative gradient header */}
              <div className="h-2 bg-gradient-to-r from-[#1A5276] via-[#5DADE2] to-[#C0765A]" />
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < review.rating
                          ? "fill-[#D4AC0D] text-[#D4AC0D]"
                          : "text-[#D6E4F0]"
                      )}
                    />
                  ))}
                </div>
                <p className="text-[#5D6D7E] text-sm flex-grow mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1B2631]">{review.name}</p>
                  <p className="text-xs text-[#95A5B6]">{review.source}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
