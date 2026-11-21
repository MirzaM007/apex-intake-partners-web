import { getCalApi } from '@calcom/embed-react';

export const CAL_LINK = 'elliotthill/15min';
const CAL_NAMESPACE = 'partner-call';

export interface CalPrefill {
  name?: string;
  email?: string;
  notes?: string;
}

let initPromise: Promise<Awaited<ReturnType<typeof getCalApi>>> | null = null;

export function initCalBooking() {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!initPromise) {
    initPromise = getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#F5A900',
            'cal-brand-emphasis': '#E09800',
            'cal-brand-text': '#0B1F3A',
            'cal-brand-subtle': '#FEF3C7',
          },
          dark: {
            'cal-brand': '#F5A900',
            'cal-brand-emphasis': '#E09800',
            'cal-brand-text': '#0B1F3A',
          },
        },
        styles: {
          branding: {
            brandColor: '#0B1F3A',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });

      cal('preload', {
        calLink: CAL_LINK,
        type: 'modal',
      });

      return cal;
    });
  }

  return initPromise;
}

export async function openPartnerCallModal(prefill?: CalPrefill) {
  const api = await (initCalBooking() ?? getCalApi({ namespace: CAL_NAMESPACE }));
  const config: Record<string, string> = {
    layout: 'month_view',
    theme: 'light',
  };

  if (prefill?.name) {
    config.name = prefill.name;
  }
  if (prefill?.email) {
    config.email = prefill.email;
  }
  if (prefill?.notes) {
    config.notes = prefill.notes;
  }

  api('modal', {
    calLink: CAL_LINK,
    config,
  });
}
