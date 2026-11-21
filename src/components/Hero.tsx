import { ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

const HERO_METRICS = [
  {
    value: '10+ Years',
    label: 'U.S. Timeshare Industry Tenure',
    detail: 'Deep familiarity with resort contracts, deeds, and exit workflows',
  },
  {
    value: '14-Point',
    label: 'Pre-Booking Verification',
    detail: 'Ownership structure, maintenance fees, and mortgage status confirmed',
  },
  {
    value: 'TCPA',
    label: 'Consent-Logged Intake',
    detail: 'Time-stamped verbal & written consent with DNC scrubbing',
  },
  {
    value: '8:30–18:30',
    label: 'U.S. Business Hours Dispatch',
    detail: 'Booked directly onto partner calendars across EST, CST, MST & PST',
  },
];

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="top" className="bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#475569] mb-5">
                <span>Specialised B2B Client Intake</span>
                <span aria-hidden="true">·</span>
                <span>U.S. Timeshare Exit &amp; Consumer Law</span>
              </div>

              <h1
                className="font-display font-bold tracking-tight text-[#0B1F3A] leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)', textWrap: 'balance' }}
              >
                Pre-vetted timeshare consultations delivered straight to your calendar.
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-8">
                Backed by a decade of U.S. timeshare industry experience, Apex Intake Partners
                screens, qualifies, and schedules TCPA-conscious consumer consultations directly onto
                your team&apos;s calendar during U.S. business hours.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                >
                  <span>Schedule Partner Call</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-semibold text-[#0B1F3A] hover:bg-[#F3F6FA] border border-slate-300 hover:border-[#0B1F3A] bg-[#FFFFFF] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                >
                  Inspect Intake Protocol
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#475569]">
              <span>Built for U.S. Timeshare Exit Agencies &amp; Consumer Law Practices</span>
              <span aria-hidden="true">·</span>
              <span>Zero Shared Leads · Dedicated Partner Routing</span>
            </div>
          </div>

          {/* Right Column: Compact 2-Image Editorial Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            <div className="h-[200px] lg:h-[212px] rounded-lg overflow-hidden border border-slate-200 bg-[#F3F6FA]">
              <ResilientImage
                src="/src/assets/images/florida_timeshare_resort_1795215864871.jpg"
                alt="Sunlit coastal Florida timeshare resort property and courtyard pool"
                caption="Florida coastal timeshare resort"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="h-[200px] lg:h-[212px] rounded-lg overflow-hidden border border-slate-200 bg-[#F3F6FA]">
              <ResilientImage
                src="/src/assets/images/owner_executive_consultation_1795215864573.jpg"
                alt="U.S. timeshare owners smiling and discussing contract review with legal and exit executives in a bright office"
                caption="Pre-vetted owner and partner executive consultation"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Quantitative Strip */}
      <div className="border-t border-slate-200 bg-[#F3F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {HERO_METRICS.map((item) => (
              <div key={item.label} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <div className="font-mono text-2xl font-medium tracking-tight text-[#0B1F3A] tabular-nums">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#0B1F3A] mt-1">{item.label}</div>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
