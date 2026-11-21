import { FormEvent, useState } from 'react';
import { AlertCircle, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { openPartnerCallModal } from '../lib/calBooking';

type VolumeTier = '15' | '30' | '60';
type PracticeType = 'Timeshare Exit Company' | 'Consumer Law Firm';

const VOLUME_OPTIONS: {
  id: VolumeTier;
  label: string;
  weeklyRange: string;
  monthlyEst: string;
  advisorSeats: string;
}[] = [
  {
    id: '15',
    label: '15 / week',
    weeklyRange: '15 pre-vetted slots',
    monthlyEst: '60 – 65 consultations / mo',
    advisorSeats: '1 – 2 intake consultants or attorneys',
  },
  {
    id: '30',
    label: '30 / week',
    weeklyRange: '30 pre-vetted slots',
    monthlyEst: '120 – 130 consultations / mo',
    advisorSeats: '3 – 5 intake consultants or attorneys',
  },
  {
    id: '60',
    label: '60+ / week',
    weeklyRange: '60+ pre-vetted slots',
    monthlyEst: '240+ consultations / mo',
    advisorSeats: 'Dedicated multi-seat floor or firm',
  },
];

const CRM_OPTIONS = [
  'Salesforce',
  'HubSpot',
  'Clio',
  'Lawmatics',
  'Calendly Enterprise',
  'Other / Custom Webhook',
];

interface FormErrors {
  fullName?: string;
  email?: string;
  firmName?: string;
  phone?: string;
}

export function PartnerInquirySection() {
  const [selectedVolume, setSelectedVolume] = useState<VolumeTier>('30');
  const [practiceType, setPracticeType] = useState<PracticeType>('Timeshare Exit Company');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [firmName, setFirmName] = useState('');
  const [phone, setPhone] = useState('');
  const [crm, setCrm] = useState('Salesforce');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const activeTier = VOLUME_OPTIONS.find((item) => item.id === selectedVolume) ?? VOLUME_OPTIONS[1];

  const handleOpenCalendarWithContext = (includeFormFields = false) => {
    const contextNotes = [
      `Practice: ${practiceType}`,
      `Weekly Target: ${activeTier.weeklyRange}`,
      `CRM: ${crm}`,
      firmName.trim() ? `Firm: ${firmName.trim()}` : '',
      notes.trim() ? `Notes: ${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    void openPartnerCallModal({
      name: includeFormFields && fullName.trim() ? fullName.trim() : undefined,
      email: includeFormFields && email.trim() ? email.trim() : undefined,
      notes: contextNotes,
    });
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (!firmName.trim()) {
      nextErrors.firmName = 'Please enter your firm or agency name.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit U.S. business phone number.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    handleOpenCalendarWithContext(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setFirmName('');
    setPhone('');
    setNotes('');
    setErrors({});
  };

  return (
    <section id="partner-briefing" className="py-20 lg:py-24 bg-[#F3F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Capacity Alignment & Direct Booking */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#0B1F3A] mb-2">Partner Onboarding</p>
            <h2
              className="font-display text-3xl font-bold tracking-tight text-[#0B1F3A]"
              style={{ textWrap: 'balance' }}
            >
              Align weekly consultation capacity with your calendar.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-3 leading-relaxed">
              We partner with a limited number of exit firms and consumer law practices per region
              to preserve booking exclusivity. Configure your weekly volume or book your partner
              call directly.
            </p>

            {/* Interactive Capacity Selector */}
            <div className="mt-8 bg-[#FFFFFF] border border-slate-200 rounded-lg p-6">
              <div className="text-xs font-semibold text-[#0B1F3A] mb-3">1. Practice Focus</div>
              <div
                role="radiogroup"
                aria-label="Select practice type"
                className="grid grid-cols-2 gap-1 p-1 bg-[#F3F6FA] rounded-md mb-6"
              >
                {(['Timeshare Exit Company', 'Consumer Law Firm'] as PracticeType[]).map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={practiceType === option}
                      onClick={() => setPracticeType(option)}
                      className={`px-3 py-2 min-h-[40px] text-xs font-semibold rounded transition-colors duration-150 whitespace-nowrap truncate focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0B1F3A] ${
                        practiceType === option
                          ? 'bg-[#0B1F3A] text-white shadow-xs'
                          : 'text-[#475569] hover:text-[#0B1F3A]'
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>

              <div className="text-xs font-semibold text-[#0B1F3A] mb-3">
                2. Target Weekly Consultation Volume
              </div>
              <div
                role="radiogroup"
                aria-label="Select weekly consultation volume"
                className="grid grid-cols-3 gap-1 p-1 bg-[#F3F6FA] rounded-md"
              >
                {VOLUME_OPTIONS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    role="radio"
                    aria-checked={selectedVolume === tier.id}
                    onClick={() => setSelectedVolume(tier.id)}
                    className={`py-2 min-h-[40px] text-xs font-mono font-medium rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#0B1F3A] ${
                      selectedVolume === tier.id
                        ? 'bg-[#0B1F3A] text-white shadow-xs'
                        : 'text-[#475569] hover:text-[#0B1F3A]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              <dl className="mt-6 pt-5 border-t border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#475569]">Projected Monthly Volume</dt>
                  <dd className="font-mono font-medium text-[#0B1F3A] tabular-nums">
                    {activeTier.monthlyEst}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#475569]">Recommended Calendar Staffing</dt>
                  <dd className="font-medium text-[#0B1F3A] text-right">
                    {activeTier.advisorSeats}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#475569]">Dispatch Window</dt>
                  <dd className="font-mono font-medium text-[#0B1F3A] tabular-nums">
                    Mon–Fri · 08:30–18:30 Local
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => handleOpenCalendarWithContext(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Book a Call Directly</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Partner Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-slate-200 rounded-lg p-6 sm:p-8">
              {submitted ? (
                <div className="py-6">
                  <div className="flex items-center gap-3 text-[#0B1F3A] mb-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-bold text-[#0B1F3A]">
                      Partner Details Prepared — Select Your Call Time
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                    Your details for <span className="font-semibold text-[#0B1F3A]">{fullName}</span>{' '}
                    ({email}) have been pre-filled into the Cal.com scheduler. If the calendar
                    popup did not appear, open it below to confirm your 15-minute slot.
                  </p>

                  <dl className="border-t border-b border-slate-200 py-5 space-y-2.5 text-sm mb-6">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#475569]">Organization</dt>
                      <dd className="font-medium text-[#0B1F3A]">{firmName}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#475569]">Practice Focus</dt>
                      <dd className="font-medium text-[#0B1F3A]">{practiceType}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#475569]">Target Capacity</dt>
                      <dd className="font-mono font-medium text-[#0B1F3A] tabular-nums">
                        {activeTier.weeklyRange}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#475569]">Calendar / CRM</dt>
                      <dd className="font-medium text-[#0B1F3A]">{crm}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenCalendarWithContext(true)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                    >
                      <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Schedule Partner Call</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F3F6FA] hover:bg-slate-200 border border-slate-200 rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                    >
                      Edit Inquiry Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 mb-6 border-b border-slate-200">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">
                        Schedule a 15-Minute Partner Briefing
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1">
                        Pre-fill your practice details to open our live Cal.com booking calendar.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenCalendarWithContext(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <CalendarCheck className="w-4 h-4 text-[#0B1F3A]" aria-hidden="true" />
                      <span>Open Calendar Now</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="partner-full-name"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="partner-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }}
                        placeholder="Jordan Ellis"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-full-name' : undefined}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#0B1F3A] bg-[#FFFFFF] border rounded-md transition-colors duration-150 focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A] ${
                          errors.fullName ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="error-full-name"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="partner-work-email"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="partner-work-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="jordan@firmname.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#0B1F3A] bg-[#FFFFFF] border rounded-md transition-colors duration-150 focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A] ${
                          errors.email ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="partner-firm-name"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Firm or Exit Agency Name
                      </label>
                      <input
                        id="partner-firm-name"
                        name="firmName"
                        type="text"
                        autoComplete="organization"
                        value={firmName}
                        onChange={(e) => {
                          setFirmName(e.target.value);
                          if (errors.firmName) setErrors((prev) => ({ ...prev, firmName: undefined }));
                        }}
                        placeholder="Meridian Consumer Law LLP"
                        aria-invalid={Boolean(errors.firmName)}
                        aria-describedby={errors.firmName ? 'error-firm-name' : undefined}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#0B1F3A] bg-[#FFFFFF] border rounded-md transition-colors duration-150 focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A] ${
                          errors.firmName ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.firmName && (
                        <p
                          id="error-firm-name"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.firmName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="partner-phone"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Direct Business Phone
                      </label>
                      <input
                        id="partner-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="(407) 555-0148"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        className={`w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#0B1F3A] bg-[#FFFFFF] border rounded-md transition-colors duration-150 focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A] ${
                          errors.phone ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="partner-crm"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Primary Calendar or CRM
                      </label>
                      <select
                        id="partner-crm"
                        name="crm"
                        value={crm}
                        onChange={(e) => setCrm(e.target.value)}
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#0B1F3A] bg-[#FFFFFF] border border-slate-300 rounded-md focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A]"
                      >
                        {CRM_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="partner-selected-tier"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Selected Weekly Consultation Volume
                      </label>
                      <input
                        id="partner-selected-tier"
                        type="text"
                        readOnly
                        value={`${activeTier.weeklyRange} · ${practiceType}`}
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm text-[#475569] bg-[#F3F6FA] border border-slate-200 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="partner-notes"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                    >
                      Target States, Developer Focus, or Intake Notes (Optional)
                    </label>
                    <textarea
                      id="partner-notes"
                      name="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify state bar jurisdictions, preferred booking hours, or developer criteria..."
                      className="w-full px-3.5 py-2.5 text-sm text-[#0B1F3A] bg-[#FFFFFF] border border-slate-300 rounded-md focus:outline-2 focus:outline-offset-0 focus:outline-[#0B1F3A]"
                    />
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-[#475569] max-w-sm">
                      Confidential B2B inquiry. Submitting opens our live calendar with your
                      details pre-filled.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-sm font-semibold text-[#0B1F3A] bg-[#F5A900] hover:bg-[#E09800] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
                    >
                      Schedule Partner Call
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
