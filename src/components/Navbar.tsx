import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const NAV_LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Case Results', href: '#results' },
  { label: 'Coverage', href: '#coverage' },
];

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B1F3A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Gold-and-white Brand Logo */}
        <a
          href="#top"
          aria-label="Apex Intake Partners home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A900] rounded-sm"
        >
          <BrandLogo variant="gold-white" className="h-10 lg:h-14" />
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-5 lg:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white hover:underline underline-offset-4 decoration-[#F5A900] transition-colors duration-150 whitespace-nowrap shrink-0 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A900] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Gold Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A900]"
          >
            Schedule Partner Call
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-200 hover:text-white hover:bg-white/10 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A900]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10 bg-[#0B1F3A] px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 min-h-[44px] text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center w-full px-5 py-3 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer"
            >
              Schedule Partner Call
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
