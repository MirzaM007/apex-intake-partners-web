import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#07172B] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-5">
            <a href="#top" aria-label="Apex Intake Partners top" className="inline-block">
              <BrandLogo variant="gold-white" className="h-11 sm:h-12" />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-sm">
              Specialised B2B client intake and appointment setting agency serving U.S. timeshare
              exit companies and consumer law firms.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-white mb-3">Operations &amp; Dispatch</h3>
            <dl className="space-y-1.5 text-xs text-slate-300">
              <div>
                <dt className="inline text-slate-400">Business Hours: </dt>
                <dd className="inline font-mono text-white tabular-nums">
                  Mon–Fri · 08:30 – 18:30 EST
                </dd>
              </div>
              <div>
                <dt className="inline text-slate-400">Coverage: </dt>
                <dd className="inline text-slate-200">All 50 U.S. States (EST–PST)</dd>
              </div>
              <div>
                <dt className="inline text-slate-400">Partner Desk: </dt>
                <dd className="inline text-slate-200">partners@apexintakepartners.com</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-white mb-3">Sections</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#capabilities"
                  className="text-slate-300 hover:text-[#F5A900] transition-colors duration-150"
                >
                  Intake Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="text-slate-300 hover:text-[#F5A900] transition-colors duration-150"
                >
                  TCPA Compliance
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-slate-300 hover:text-[#F5A900] transition-colors duration-150"
                >
                  Partner Case Results
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-slate-300 hover:text-[#F5A900] transition-colors duration-150 cursor-pointer text-left"
                >
                  Schedule Partner Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Apex Intake Partners. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Apex Intake Partners provides B2B client intake and appointment scheduling services. We
            are not a law firm and do not provide legal representation or advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
