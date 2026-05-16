"use client";

import { useEffect, useState } from "react";

import { GlyphIcon } from "./icon-mark";
import SiteLogo from "./site-logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export default function StickyHeader({ profile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
      <a className="site-brand" href="#home">
        <span className="site-brand-mark">
          <SiteLogo className="site-brand-logo" />
        </span>
        <span className="site-brand-copy">
          <strong>{profile.name}</strong>
          <small>{profile.title}</small>
        </span>
      </a>

      <nav className="site-nav">
        {navLinks.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-action" href={`mailto:${profile.email}`}>
        <GlyphIcon icon="mail" className="button-icon" />
        Contact
      </a>
    </header>
  );
}
