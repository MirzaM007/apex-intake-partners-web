import { ResilientImage } from './ResilientImage';

const CASE_OUTCOMES = [
  {
    metric: '+38%',
    timeframe: 'Consultation Show-Rate in 90 Days',
    partner: 'Florida Consumer Protection Law Firm',
    detail:
      'Replaced raw web-form callbacks with pre-verified afternoon consultations, lifting kept appointments from 54% to 74.5% across 410 scheduled matters.',
  },
  {
    metric: '4.2x',
    timeframe: 'Retainer-to-Appointment Efficiency (Q1–Q3)',
    partner: 'National Timeshare Exit Consultancy',
    detail:
      'Eliminated non-qualifying inquiries (renters and paid-off exchange seekers) prior to senior consultant handoff, cutting wasted discovery calls by 61%.',
  },
  {
    metric: '98.6%',
    timeframe: 'Audit-Ready Consent Documentation Rate',
    partner: 'Multi-State Contract Litigation Group',
    detail:
      'Delivered 1,420 exclusive consumer briefings over 12 months with complete timestamped TCPA consent records and zero shared-lead overlap.',
  },
];

interface ProofSectionProps {
  onOpenBooking: () => void;
}

export function ProofSection({ onOpenBooking }: ProofSectionProps) {
  return (
    <section id="results" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Image & Attributable Partner Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-[#0B1F3A] mb-2">
                Partner Outcomes &amp; Evidence
              </p>
              <h2
                className="font-display text-3xl font-bold tracking-tight text-[#0B1F3A]"
                style={{ textWrap: 'balance' }}
              >
                Ten years inside the U.S. timeshare landscape shows in every booking.
              </h2>
              <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
                Our intake specialists understand developer pitch mechanics, biennial point
                structures, and rescission windows—allowing us to qualify consumers without wasting
                attorney or senior advisor time.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 bg-[#F3F6FA] aspect-[4/3]">
              <ResilientImage
                src="/src/assets/images/partner_legal_briefing_1795201247264.jpg"
                alt="Senior consumer law partners reviewing pre-vetted timeshare contract files"
                caption="Partner counsel reviewing verified consumer intake briefs"
                className="w-full h-full object-cover"
              />
            </div>

            <figure className="pt-6 border-t border-slate-200">
              <blockquote className="text-sm sm:text-base text-[#0B1F3A] leading-relaxed">
                &ldquo;Before working with Apex Intake Partners, our attorneys spent nearly half of
                their intake hours sorting out renters and non-decision-makers. Within sixty days of
                switching to their pre-vetted calendar bookings, our consultation-to-retainer rate
                nearly doubled without adding headcount.&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#475569]">
                <span className="font-semibold text-[#0B1F3A]">David Morales</span>
                <span aria-hidden="true">·</span>
                <span>Managing Partner, Morales &amp; Vance Consumer Law</span>
                <span aria-hidden="true">·</span>
                <span>Orlando, FL</span>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Quantified Partner Case Results */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {CASE_OUTCOMES.map((item) => (
                <div
                  key={item.partner}
                  className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-4">
                    <div className="font-mono text-3xl sm:text-4xl font-medium tracking-tight text-[#0B1F3A] tabular-nums">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-[#0B1F3A] mt-1.5">
                      {item.timeframe}
                    </div>
                  </div>
                  <div className="sm:col-span-8">
                    <div className="text-xs font-medium text-[#475569] mb-1.5">{item.partner}</div>
                    <p className="text-sm text-[#475569] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#F3F6FA] border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-display text-base font-semibold text-[#0B1F3A]">
                  Request a sample 14-point intake docket
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1">
                  Review redacted call summaries and consent logs during your partner briefing.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
              >
                Schedule Partner Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
