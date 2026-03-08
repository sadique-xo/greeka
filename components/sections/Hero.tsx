import Link from "next/link";
import { MapPin, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/cafe-data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFCFF] to-[#F0F6FB]" />
      
      {/* Subtle olive pattern overlay */}
      <div className="absolute inset-0 olive-pattern opacity-50" />

      {/* Greek key at top */}
      <div className="absolute top-24 left-0 right-0 greek-key-border" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2E86C1]/50 text-[#1A5276] text-xs font-medium uppercase tracking-widest mb-8 bg-white/60 backdrop-blur-sm">
          Kitchen & Bar · Rooftop · {siteConfig.location}
        </span>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#1A5276] tracking-tight mb-4">
          {siteConfig.name}
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-[#5D6D7E] italic mb-12 max-w-xl">
          {siteConfig.fullTagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/menu">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Utensils className="h-5 w-5" />
              View Menu
            </Button>
          </Link>
          <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <MapPin className="h-5 w-5" />
              Get Directions
            </Button>
          </a>
        </div>

        <div className="flex gap-12 sm:gap-16 text-center">
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#C0765A]">
              {siteConfig.stats.years}
            </p>
            <p className="text-sm text-[#5D6D7E]">Years in Ranchi</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#D4AC0D]">
              {siteConfig.stats.rating}★
            </p>
            <p className="text-sm text-[#5D6D7E]">Google Rating</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A5276]">
              {siteConfig.stats.reviews}+
            </p>
            <p className="text-sm text-[#5D6D7E]">Reviews & Counting</p>
          </div>
        </div>
      </div>

      {/* Greek key at bottom */}
      <div className="absolute bottom-0 left-0 right-0 greek-key-border rotate-180" />
    </section>
  );
}
