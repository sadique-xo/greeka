"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/cafe-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3 px-4 md:px-8" : "py-6 px-4 md:px-8"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 rounded-full px-6 py-3",
            scrolled
              ? "backdrop-blur-xl bg-white/90 border border-[#D6E4F0] shadow-[0_4px_20px_rgba(26,82,118,0.08)]"
              : "bg-transparent"
          )}
        >
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1A5276]">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#95A5B6] -mt-0.5">
              {siteConfig.tagline}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5D6D7E] hover:text-[#1A5276] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.telLink}>
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Book a Table
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-[#1A5276] hover:bg-[#F0F6FB] rounded-full transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-white/98 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#1A5276]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl font-semibold text-[#1B2631] hover:text-[#1A5276] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.telLink} onClick={() => setMobileOpen(false)}>
            <Button size="lg" className="gap-2 mt-4">
              <Phone className="h-5 w-5" />
              Book a Table
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
