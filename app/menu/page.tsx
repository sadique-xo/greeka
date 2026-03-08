"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { menuCategories } from "@/data/cafe-data";
import { Phone, Circle, Wine } from "lucide-react";
import { siteConfig } from "@/data/cafe-data";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-category");
            if (id) setActiveCategory(id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    Object.values(categoryRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    categoryRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setActiveCategory(id);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#F0F6FB] to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A5276] mb-4">
              Full Menu
            </h1>
            <p className="text-[#5D6D7E] mb-8">
              Mediterranean, Indian, Italian & more — crafted with passion
            </p>
            <a href={siteConfig.telLink}>
              <Button className="gap-2">
                <Phone className="h-4 w-4" />
                Book a Table
              </Button>
            </a>
          </div>
        </section>

        {/* Sticky tabs */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-[#D6E4F0] shadow-sm">
          <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
            <div className="flex gap-1 py-4 min-w-max">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                    activeCategory === cat.id
                      ? "bg-[#1A5276] text-white shadow-md"
                      : "text-[#5D6D7E] hover:bg-[#F0F6FB] hover:text-[#1A5276]"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              ref={(el) => {
                categoryRefs.current[category.id] = el;
              }}
              data-category={category.id}
              className="mb-16 scroll-mt-32"
            >
              <h2 className="font-serif text-2xl font-bold text-[#1A5276] mb-6 pb-2 border-b-2 border-[#C0765A]/30">
                {category.name}
              </h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 border-b border-[#D6E4F0]/60 last:border-0"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {item.veg === "both" ? (
                        <Wine className="h-4 w-4 text-[#5DADE2]" />
                      ) : item.veg ? (
                        <div className="w-4 h-4 rounded border border-green-600 flex items-center justify-center">
                          <Circle className="h-1.5 w-1.5 fill-green-600 text-green-600" strokeWidth={0} />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded border border-red-600 flex items-center justify-center">
                          <Circle className="h-1.5 w-1.5 fill-red-600 text-red-600" strokeWidth={0} />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif font-semibold text-[#1B2631]">
                          {item.name}
                        </h3>
                        <span className="text-[#1A5276] font-medium">
                          ₹{item.price}
                        </span>
                      </div>
                      <p className="text-sm text-[#5D6D7E] mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="py-16 px-6 bg-[#F0F6FB]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-[#1B2631] mb-4">
              Ready to dine?
            </h2>
            <p className="text-[#5D6D7E] mb-6">
              Book your table and experience the Greek setting above the city.
            </p>
            <a href={siteConfig.telLink}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Book a Table
              </Button>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
