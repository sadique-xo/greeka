import Link from "next/link";
import { menuHighlights } from "@/data/cafe-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MenuHighlights() {
  return (
    <section className="py-24 px-6 bg-[#F0F6FB]">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#C0765A] mb-3">
          Must Try
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B2631] mb-12">
          Chef&apos;s Favorites
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuHighlights.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              {/* Placeholder image with soft blue/white gradient */}
              <div className="h-32 bg-gradient-to-br from-[#E8F4FC] via-[#F0F6FB] to-white group-hover:from-[#D6EAF8] transition-colors duration-300" />
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded",
                      item.tagColor === "blue"
                        ? "bg-[#5DADE2]/20 text-[#1A5276]"
                        : "bg-[#C0765A]/20 text-[#C0765A]"
                    )}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs font-medium text-[#1A5276]">
                    ₹{item.price}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1B2631] mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5D6D7E] line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button variant="outline" size="lg" className="gap-2">
              View Full Menu
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
