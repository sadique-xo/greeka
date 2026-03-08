import { siteConfig } from "@/data/cafe-data";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Location() {
  return (
    <section id="visit" className="py-24 px-6 bg-[#F0F6FB]">
      <div className="max-w-6xl mx-auto">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#1A5276] mb-3">
          Find Us
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B2631] mb-12">
          Visit Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden border border-[#D6E4F0] shadow-lg aspect-[4/3] min-h-[300px] bg-[#E8F4FC]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58356.899!2d85.3315!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104a5f7e841%3A0x1b0a2d9e8e8e8e8e!2sKanke%20Road%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greeka Kitchen & Bar Location"
              className="min-h-[300px]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#1B2631] mb-2">
                Address
              </h3>
              <p className="text-[#5D6D7E] mb-1">
                {siteConfig.address.line1}
              </p>
              <p className="text-[#5D6D7E] mb-1">
                {siteConfig.address.line2}
              </p>
              <p className="text-[#5D6D7E]">{siteConfig.address.city}</p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-[#1B2631] mb-2">
                Hours
              </h3>
              <p className="text-[#5D6D7E]">
                {siteConfig.hours.days}: {siteConfig.hours.time}
              </p>
              <p className="text-sm text-[#95A5B6] mt-1">
                {siteConfig.hours.closed}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {siteConfig.features.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 rounded-full bg-white/80 text-xs text-[#1A5276] border border-[#D6E4F0]"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 w-full sm:w-auto">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Button>
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a href={siteConfig.telLink}>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="pt-6 border-t border-[#D6E4F0]">
              <p className="text-sm text-[#5D6D7E] mb-2">Order Online:</p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.orderOnline.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A5276] hover:text-[#C0765A] transition-colors font-medium text-sm"
                >
                  Zomato
                </a>
                <a
                  href={siteConfig.orderOnline.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A5276] hover:text-[#C0765A] transition-colors font-medium text-sm"
                >
                  Swiggy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
