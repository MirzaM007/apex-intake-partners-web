/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { ProofSection } from './components/ProofSection';
import { PartnerInquirySection } from './components/PartnerInquirySection';
import { Footer } from './components/Footer';
import { initCalBooking, openPartnerCallModal } from './lib/calBooking';

export default function App() {
  useEffect(() => {
    initCalBooking();
  }, []);

  const handleOpenBooking = () => {
    void openPartnerCallModal();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0B1F3A]">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <CapabilitiesBento />
        <ProofSection onOpenBooking={handleOpenBooking} />
        <PartnerInquirySection />
      </main>
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
