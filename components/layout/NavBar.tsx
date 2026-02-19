"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { company } from "@/lib/data/company";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-heading font-bold text-xl md:text-2xl transition-colors",
              isScrolled || !isHome ? "text-primary" : "text-white"
            )}
          >
            {company.name}
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.href
                    ? "text-accent"
                    : isScrolled || !isHome
                      ? "text-primary"
                      : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.phoneRaw}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent",
                isScrolled || !isHome ? "text-primary" : "text-white"
              )}
            >
              <Phone size={16} />
              {company.phone}
            </a>
            <Button href="/contact" variant="accent" size="sm">
              Devis gratuit
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors cursor-pointer",
              isScrolled || !isHome ? "text-primary" : "text-white"
            )}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block text-base font-medium transition-colors",
                  pathname === link.href ? "text-accent" : "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-neutral-200" />
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 text-primary font-medium"
            >
              <Phone size={18} />
              {company.phone}
            </a>
            <Button href="/contact" variant="accent" size="md" className="w-full">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
