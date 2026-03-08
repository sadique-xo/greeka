import Link from "next/link";
import { siteConfig } from "@/data/cafe-data";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-[#D6E4F0]">
      {/* Greek key decorative border above footer */}
      <div className="greek-key-border" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl font-bold text-[#1A5276] block">
              {siteConfig.name}
            </span>
            <span className="text-sm text-[#95A5B6] uppercase tracking-wider">
              {siteConfig.tagline}
            </span>
            <p className="text-[#5D6D7E] mt-2 italic text-sm">
              {siteConfig.fullTagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1B2631] mb-3">Contact</h4>
            <a
              href={siteConfig.telLink}
              className="block text-[#5D6D7E] hover:text-[#1A5276] transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#5D6D7E] hover:text-[#1A5276] transition-colors mt-1"
            >
              {siteConfig.whatsapp} (WhatsApp)
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-[#1B2631] mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D6D7E] hover:text-[#1A5276] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D6D7E] hover:text-[#1A5276] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5D6D7E] hover:text-[#1A5276] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#1B2631] mb-3">Visit</h4>
            <p className="text-[#5D6D7E] text-sm">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D6E4F0] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#95A5B6]">
            © 2025 {siteConfig.name} {siteConfig.tagline}. All rights reserved.
          </p>
          <p className="text-sm text-[#5D6D7E]">
            Created by{" "}
            <a
              href="https://sadique.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1A5276] hover:text-[#C0765A] transition-colors"
            >
              Sadique (sadique.co)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
