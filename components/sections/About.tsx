import { siteConfig, aboutContent } from "@/data/cafe-data";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A5276] mb-3">
          {aboutContent.label}
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B2631] mb-8 max-w-2xl">
          Where{" "}
          <span className="text-[#C0765A]">{aboutContent.highlighted.ecstasy}</span>{" "}
          Meets{" "}
          <span className="text-[#1A5276]">{aboutContent.highlighted.greeko}</span>{" "}
          Ambiance
        </h2>
        <p className="text-lg text-[#5D6D7E] leading-relaxed max-w-2xl mb-16">
          {aboutContent.text}
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {aboutContent.stats.map((stat, i) => (
            <Card key={i} className="overflow-hidden group">
              <CardContent className="p-8 text-center">
                <p className="font-serif text-4xl font-bold text-[#1A5276] group-hover:text-[#C0765A] transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-sm text-[#5D6D7E] mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-[#95A5B6] mt-8 italic">
          {siteConfig.hashtag}
        </p>
      </div>
    </section>
  );
}
