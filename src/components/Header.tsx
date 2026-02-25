"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About", sectionId: "about" },
  { href: "/expertise", label: "Expertise", sectionId: "expertise" },
  { href: "/experience", label: "Experience", sectionId: "experience" },
  { href: "/portfolio", label: "Portfolio", sectionId: "portfolio" },
  { href: "/education", label: "Education", sectionId: "education" },
  { href: "/certifications", label: "Certifications", sectionId: "certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact", sectionId: "contact" },
  { href: "/interests", label: "Interests" },
];

const sectionLinks = navLinks.filter(
  (link): link is (typeof navLinks)[number] & { sectionId: string } =>
    typeof link.sectionId === "string",
);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isSectionPage = pathname === "/" || sectionLinks.some((link) => link.href === pathname);

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 10);

    if (!isSectionPage) return;

    let found = "";
    for (let i = sectionLinks.length - 1; i >= 0; i--) {
      const { href, sectionId } = sectionLinks[i];
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const top = el.offsetTop - 80;
      if (y >= top) {
        found = href;
        break;
      }
    }

    setActive(found || (pathname !== "/" ? pathname : ""));
  }, [isSectionPage, pathname]);

  useEffect(() => {
    setMenuOpen(false);
    if (!isSectionPage) {
      setActive(pathname);
      return;
    }
    if (pathname !== "/") {
      setActive(pathname);
    }
  }, [isSectionPage, pathname]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? "scrolled" : ""}`}>
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo animation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-100" : "text-white"
            }`}
          >
            Rejo Z Mathew
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden space-x-1 md:flex md:space-x-3">
          {navLinks.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : scrolled
                    ? "text-gray-100 hover:text-primary"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className={`md:hidden rounded p-1 transition-colors duration-300 focus:outline-none ${
            scrolled ? "text-gray-100" : "text-white"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full origin-top overflow-hidden bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
              {navLinks.map(({ href, label }) => {
                const isAct = active === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-primary ${
                      isAct ? "bg-primary/10 text-primary font-semibold" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
