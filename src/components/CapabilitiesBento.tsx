import { useState } from 'react';
import { Check, Clock, ShieldCheck } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

type PracticeTrack = 'exit' | 'law';
type TimeZoneKey = 'EST' | 'CST' | 'MST' | 'PST';

const TRACK_DETAILS: Record<
  PracticeTrack,
  {
    title: string;
    summary: string;
    criteria: string[];
    disqualifiers: string[];
    handoffFormat: string;
  }
> = {
  exit: {
    title: 'Timeshare Exit Agency Qualification',
    summary:
      'Designed for exit consultancies requiring verified owners with active financial obligations and decision-maker attendance.',
    criteria: [
      'Named deeded or points-based resort developer verified (Wyndham, Marriott, Hilton, Westgate, Diamond, etc.)',
      'Annual maintenance fee burden and remaining mortgage balance documented prior to booking',
      'All primary contract signatories confirmed available for the scheduled consultation window',
      'Clear intent to pursue permanent contract termination rather than short-term rental listing',
    ],
    disqualifiers: [
      'Unverifiable ownership or third-party inquiries without power of attorney',
      'Owners seeking temporary resale appraisals or timeshare exchange trades',
      'Prior active litigation or bankruptcy stay disclosed during intake',
    ],
    handoffFormat: 'Direct calendar invite + 14-field intake brief pushed via webhook or CRM sync',
  },
  law: {
    title: 'Consumer Law Firm Intake Protocol',
    summary:
      'Structured for consumer protection attorneys evaluating misrepresentation, breach of fiduciary duty, and statutory rescission claims.',
    criteria: [
      'Purchase date, state of execution, and developer entity logged for statute review',
      'Specific sales-table misrepresentation indicators captured in the owner’s own words',
      'Financing terms, interest rate, and ongoing collection or credit impact recorded',
      'Conflict-check metadata (owner full legal name, co-borrower, and resort entity) pre-screened',
    ],
    disqualifiers: [
      'Matters already retained by outside legal counsel',
      'Non-consumer commercial intervals or corporate timeshare portfolios',
      'Prospects unwilling to provide state of residence or contract execution year',
    ],
    handoffFormat: 'Clio / Lawmatics conflict-ready summary + recorded TCPA consent log',
  },
};

const US_TIMEZONES: Record<
  TimeZoneKey,
  { label: string; window: string; coverage: string }
> = {
  EST: {
    label: 'Eastern Time',
    window: '08:30 – 18:30 EST',
    coverage: 'FL, NY, GA, NC, VA, PA, OH, MI',
  },
  CST: {
    label: 'Central Time',
    window: '08:30 – 18:30 CST',
    coverage: 'TX, IL, TN, MO, MN, WI, LA',
  },
  MST: {
    label: 'Mountain Time',
    window: '08:30 – 18:30 MST',
    coverage: 'AZ, CO, UT, NV (Border), NM',
  },
  PST: {
    label: 'Pacific Time',
    window: '08:30 – 18:30 PST',
    coverage: 'CA, NV, WA, OR',
  },
};

export function CapabilitiesBento() {
  const [activeTrack, setActiveTrack] = useState<PracticeTrack>('exit');
  const [selectedZone, setSelectedZone] = useState<TimeZoneKey>('EST');

  const track = TRACK_DETAILS[activeTrack];
  const zone = US_TIMEZONES[selectedZone];

  return (
    <section id="capabilities" className="py-20 lg:py-24 bg-[#F3F6FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-[#0B1F3A] mb-2">
            Intake Architecture &amp; Qualification
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]"
            style={{ textWrap: 'balance' }}
          >
            Engineered to protect partner calendar bandwidth.
          </h2>
          <p className="text-base text-[#475569] mt-3 leading-relaxed">
            Your senior consultants and intake attorneys should only speak with verified owners
            ready for a substantive review. Every appointment passes through structured U.S. intake
            verification before reaching your calendar.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 01. Spans 2 Columns */}
          <article className="lg:col-span-2 bg-[#FFFFFF] border border-slate-200 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">
                  01. Pre-Vetted Contract &amp; Equity Screening
                </h3>
                <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                  Generic lead generators sell unverified form fills to five firms at once. Our
                  intake specialists speak directly with every prospect—confirming developer
                  name, deeded versus points structure, mortgage balance, and annual maintenance
                  fees—before offering a consultation slot.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-lg font-medium text-[#0B1F3A] tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-[#475569] mt-0.5">
                    Single-partner exclusive bookings
                  </div>
                </div>
                <div>
                  <div className="font-mono text-lg font-medium text-[#0B1F3A] tabular-nums">
                    14 Points
                  </div>
                  <div className="text-xs text-[#475569] mt-0.5">
                    Verified prior to calendar lock
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 min-h-[240px] bg-[#F3F6FA] border-t md:border-t-0 md:border-l border-slate-200">
              <ResilientImage
                src="/src/assets/images/compliance_intake_desk_1795201247104.jpg"
                alt="Quiet executive intake workstation displaying structured client questionnaire"
                caption="14-point contract verification workstation"
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          {/* 02. Spans 1 Column — Compliance */}
          <article
            id="compliance"
            className="lg:col-span-1 bg-[#0B1F3A] text-slate-100 border border-[#0B1F3A] rounded-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[#F5A900] text-xs font-medium mb-3">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Compliance Standard</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white tracking-wide">
                02. TCPA-Conscious Intake &amp; Consent
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Consumer law firms and exit agencies face strict regulatory scrutiny. Our intake
                workflow maintains clear consent documentation and DNC hygiene on every scheduled
                consultation.
              </p>
            </div>

            <ul className="mt-6 pt-5 border-t border-white/15 space-y-2.5 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5A900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Explicit one-to-one partner consent captured &amp; timestamped</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5A900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Federal &amp; State Do-Not-Call list scrubbing prior to outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#F5A900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Archived intake audio &amp; consent certificate attached per booking</span>
              </li>
            </ul>
          </article>

          {/* 03. Spans 1 Column — U.S. Business Hours Coverage */}
          <article
            id="coverage"
            className="lg:col-span-1 bg-[#FFFFFF] border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="h-36 bg-[#F3F6FA] border-b border-slate-200">
                <ResilientImage
                  src="/src/assets/images/us_business_hours_dispatch_1795215864608.jpg"
                  alt="U.S. executive desk with dark-navy and gold clock and appointment ledger during morning business hours"
                  caption="U.S. business hours calendar dispatch"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:px-8 sm:pt-6 sm:pb-0">
                <div className="flex items-center gap-2 text-[#475569] text-xs font-medium mb-2.5">
                  <Clock className="w-4 h-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
                  <span>Live Calendar Sync</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">
                  03. U.S. Business Hours Routing
                </h3>
                <p className="text-sm text-[#475569] mt-2.5 leading-relaxed">
                  Consultations are booked strictly within your team&apos;s operating windows—never
                  dumped overnight or queued without live prospect confirmation.
                </p>
              </div>
            </div>

            <div className="p-6 sm:px-8 sm:pt-5 sm:pb-8 mt-5 border-t border-slate-200">
              <div
                role="tablist"
                aria-label="U.S. scheduling time zones"
                className="grid grid-cols-4 gap-1 p-1 bg-[#F3F6FA] rounded-md mb-4"
              >
                {(Object.keys(US_TIMEZONES) as TimeZoneKey[]).map((tz) => (
                  <button
                    key={tz}
                    type="button"
                    role="tab"
                    aria-selected={selectedZone === tz}
                    onClick={() => setSelectedZone(tz)}
                    className={`py-2 text-xs font-mono font-medium rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0B1F3A] ${
                      selectedZone === tz
                        ? 'bg-[#0B1F3A] text-white shadow-xs'
                        : 'text-[#475569] hover:text-[#0B1F3A]'
                    }`}
                  >
                    {tz}
                  </button>
                ))}
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">{zone.label}</span>
                  <span className="font-mono font-medium text-[#0B1F3A] tabular-nums">
                    {zone.window}
                  </span>
                </div>
                <div className="text-[#475569]">
                  <span>Primary States: </span>
                  <span className="font-medium text-[#0B1F3A]">{zone.coverage}</span>
                </div>
              </div>
            </div>
          </article>

          {/* 04. Spans 2 Columns — Interactive Qualification Standard Explorer */}
          <article className="lg:col-span-2 bg-[#FFFFFF] border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">
                  04. Practice-Specific Intake Standards
                </h3>
                <p className="text-sm text-[#475569] mt-1">
                  Select your organization model to inspect our pre-booking verification checklist.
                </p>
              </div>

              {/* Functional Segmented Control */}
              <div
                role="tablist"
                aria-label="Select partner practice model"
                className="inline-flex items-center gap-1 p-1 bg-[#F3F6FA] rounded-md shrink-0 self-start sm:self-auto"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTrack === 'exit'}
                  onClick={() => setActiveTrack('exit')}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-semibold rounded transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0B1F3A] ${
                    activeTrack === 'exit'
                      ? 'bg-[#0B1F3A] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#0B1F3A]'
                  }`}
                >
                  Timeshare Exit Agencies
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTrack === 'law'}
                  onClick={() => setActiveTrack('law')}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-semibold rounded transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0B1F3A] ${
                    activeTrack === 'law'
                      ? 'bg-[#0B1F3A] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#0B1F3A]'
                  }`}
                >
                  Consumer Law Firms
                </button>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <h4 className="text-sm font-semibold text-[#0B1F3A]">{track.title}</h4>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">{track.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {track.criteria.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <Check
                        className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 md:border-l md:border-slate-200 md:pl-6 flex flex-col justify-between gap-5">
                <div>
                  <h4 className="text-xs font-semibold text-[#0B1F3A]">
                    Automatic Disqualifiers Filtered Out
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-xs text-[#475569]">
                    {track.disqualifiers.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-slate-400 font-mono" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-semibold text-[#0B1F3A]">Delivered Handoff</div>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    {track.handoffFormat}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
