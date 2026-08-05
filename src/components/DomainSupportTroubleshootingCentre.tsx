import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { BookOpen, CheckCircle2, ChevronLeft, ExternalLink, LifeBuoy, Send, ShieldAlert, UserRound, Wrench, X } from 'lucide-react';

type AppearanceConfig = {
  accentColour?: string;
  launcherColour?: string;
  launcherTextColour?: string;
  headerBackground?: string;
  headerTextColour?: string;
  panelBackground?: string;
  panelTextColour?: string;
  position?: 'bottom-right' | 'bottom-left';
  theme?: 'auto' | 'light' | 'dark';
  messageStyle?: 'rounded' | 'compact' | 'square';
  panelWidth?: number;
  panelHeight?: number;
  borderRadius?: number;
  launcherSize?: number;
  launcherLabel?: string;
  headerSubtitle?: string;
  inputPlaceholder?: string;
  showLauncherLabel?: boolean;
  showPoweredBy?: boolean;
};

type BranchConfig = {
  assistantEnabled?: boolean;
  humanTakeoverEnabled?: boolean;
  maintenanceEnabled?: boolean;
  assistantName?: string;
  greeting?: string;
  maintenanceMessage?: string;
  emergencyNotice?: string;
  appearance?: AppearanceConfig;
};

type SupportMessage = {
  id: string;
  senderType: string;
  senderName: string;
  body: string;
};

type Guide = {
  id: string;
  title: string;
  summary: string;
  category: string;
  warning?: string;
  steps: string[];
  sourceTitle: string;
  sourceUrl: string;
  reviewed: string;
};

const API = '/api/customer-service';
const DEFAULT_NAME = 'Sousa Murray Domains Support Assistant';
const DEFAULT_APPEARANCE: Required<AppearanceConfig> = {
  accentColour: '#047857',
  launcherColour: '#047857',
  launcherTextColour: '#ffffff',
  headerBackground: '#0f172a',
  headerTextColour: '#ffffff',
  panelBackground: '#ffffff',
  panelTextColour: '#0f172a',
  position: 'bottom-right',
  theme: 'auto',
  messageStyle: 'rounded',
  panelWidth: 470,
  panelHeight: 780,
  borderRadius: 18,
  launcherSize: 56,
  launcherLabel: 'Domain support',
  headerSubtitle: 'Self-service first · Head Office support when needed',
  inputPlaceholder: 'Describe what is still happening…',
  showLauncherLabel: true,
  showPoweredBy: true,
};

const GUIDES: Guide[] = [
  {
    id: 'domain-not-working',
    title: 'My domain or website is not working',
    summary: 'Check registration, nameservers and the DNS records that connect your domain to the website.',
    category: 'domain_support',
    warning: 'Do not delete or replace DNS records unless you know the correct values. Incorrect changes can interrupt websites and email.',
    steps: [
      'Confirm the domain appears in your Domain Portfolio and has not expired.',
      'Check whether the issue affects the website, email or both.',
      'Check which nameservers the domain is using. This tells you where DNS is managed.',
      'If GoDaddy nameservers are in use, review the DNS zone and confirm the website record matches the value supplied by the website or hosting provider.',
      'Allow time for recent DNS changes to update before making further changes.',
    ],
    sourceTitle: 'GoDaddy: Manage DNS records',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/manage-dns-records-680',
    reviewed: '2 August 2026',
  },
  {
    id: 'nameservers',
    title: 'Nameservers or DNS management',
    summary: 'Find out where DNS is controlled and check that the domain is using the intended nameserver provider.',
    category: 'dns',
    warning: 'Changing nameservers changes where DNS is managed and may break existing website or email connections. Verify the intended nameservers before saving.',
    steps: [
      'Open the domain in the Domain Portfolio and select DNS, then Nameservers.',
      'Identify whether the domain uses GoDaddy nameservers or custom nameservers.',
      'If custom nameservers are shown, manage DNS with that external provider rather than changing records in GoDaddy.',
      'Compare the current nameservers with the exact values supplied by the intended DNS or hosting provider.',
      'After an authorised change, re-check the website and email. Global DNS updates can take time.',
    ],
    sourceTitle: 'GoDaddy: Change my domain nameservers',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/change-my-domain-nameservers-664',
    reviewed: '2 August 2026',
  },
  {
    id: 'website-connection',
    title: 'Connect a domain to a website',
    summary: 'Review the A or CNAME records supplied by your website provider.',
    category: 'dns',
    warning: 'Changing an existing A record can stop a website or connected service from working. Keep a record of the previous value before an authorised change.',
    steps: [
      'Ask the website or hosting provider for the exact DNS record type, name and value.',
      'Confirm the domain uses GoDaddy nameservers before editing the GoDaddy DNS zone.',
      'For a root-domain IP connection, check the A record using @ as the name.',
      'For a service hostname such as www or shop, check whether the provider requires a CNAME instead.',
      'Save only the supplied value and allow time for the change to update.',
    ],
    sourceTitle: 'GoDaddy: Add or edit an A record',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/add-or-edit-an-a-record-42545',
    reviewed: '2 August 2026',
  },
  {
    id: 'transfer',
    title: 'Domain transfer or account move',
    summary: 'Check eligibility, locks, contact details and whether connected products need separate work.',
    category: 'domain_transfer',
    warning: 'A domain transfer does not automatically move every connected website, email or product. Confirm the full migration plan before starting.',
    steps: [
      'Confirm whether this is a registrar transfer or a move between GoDaddy accounts.',
      'Check the domain is active, unlocked and not already involved in another transfer.',
      'Confirm the receiving account details and access to the registrant email address.',
      'Record the current DNS settings and identify any connected website or email products.',
      'Check for extension-specific requirements, especially for .uk domains.',
    ],
    sourceTitle: 'GoDaddy: Domain transfer guidance',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/domains-1000003',
    reviewed: '2 August 2026',
  },
  {
    id: 'renewal',
    title: 'Renewal, expiry or auto-renew',
    summary: 'Check expiry status, payment details and renewal settings before the domain becomes unavailable.',
    category: 'renewal',
    steps: [
      'Open the domain in the Domain Portfolio and check its expiry date and current status.',
      'Check whether auto-renew is enabled and whether the payment method is current.',
      'Review any renewal or failed-payment notice shown in the account.',
      'Do not ignore an expiry warning, even when the website is still temporarily working.',
      'Contact us promptly if the domain is already expired or missing from the portfolio.',
    ],
    sourceTitle: 'GoDaddy: Renew my domains',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/domains-1000003',
    reviewed: '2 August 2026',
  },
  {
    id: 'ssl',
    title: 'SSL certificate or “Not secure” warning',
    summary: 'Check the protected domain name, certificate status and domain-control verification.',
    category: 'ssl',
    warning: 'Do not send private keys, certificate passwords or account credentials through chat or email.',
    steps: [
      'Confirm the warning is for the exact hostname being visited, including www where applicable.',
      'Check whether the certificate is issued, expired, pending verification or installed on a different server.',
      'Confirm where the website is hosted and who is responsible for installing the certificate.',
      'If domain ownership verification is pending, follow the approved DNS or HTML verification method.',
      'Re-test the website in a new browser session after the certificate is installed.',
    ],
    sourceTitle: 'GoDaddy: Verify domain ownership for an SSL certificate',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/verify-domain-ownership-dns-or-html-for-my-ssl-certificate-7452',
    reviewed: '2 August 2026',
  },
  {
    id: 'security',
    title: 'Account security or an unauthorised change',
    summary: 'Protect the account and domain before attempting ordinary technical changes.',
    category: 'security',
    warning: 'Do not continue with DNS, transfer or ownership changes when compromise is suspected. Request a Head Office security review immediately.',
    steps: [
      'Stop making ordinary account changes and record what appears different or unauthorised.',
      'Secure the email account connected to the domain and change compromised passwords through the provider’s official sign-in page.',
      'Check multi-factor authentication and recent account activity.',
      'Review whether Domain Protection is active and whether transfer or DNS changes are pending.',
      'Request a Head Office Customer Adviser and select security review.',
    ],
    sourceTitle: 'GoDaddy: What is Domain Protection?',
    sourceUrl: 'https://www.godaddy.com/en-uk/help/what-is-domain-protection-32311',
    reviewed: '2 August 2026',
  },
];

function makeId(prefix: string) {
  try { return `${prefix}-${crypto.randomUUID()}`; }
  catch { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
}

async function api(path: string, options: RequestInit = {}) {
  const response = await fetch(`${API}/${path}`, {
    credentials: 'include',
    cache: 'no-store',
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.error?.message || payload?.error || payload?.message || 'Customer support is temporarily unavailable.');
  return payload;
}

function normaliseMessage(value: Record<string, unknown>): SupportMessage {
  return {
    id: String(value.id || value.externalMessageId || value.external_message_id || makeId('message')),
    senderType: String(value.senderType || value.sender_type || 'system'),
    senderName: String(value.senderName || value.sender_name || 'Customer Service'),
    body: String(value.body || ''),
  };
}

export default function DomainSupportTroubleshootingCentre() {
  const [config, setConfig] = useState<BranchConfig>({ assistantEnabled: false });
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Guide | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const [description, setDescription] = useState('');
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [resolved, setResolved] = useState(false);
  const [adviserRequested, setAdviserRequested] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const sessionId = useRef(makeId('domain-support'));
  const conversationCreated = useRef(false);

  const hidden = typeof window !== 'undefined' && (window.location.pathname.startsWith('/admin') || window.location.pathname.startsWith('/reseller'));
  const assistantName = config.assistantName || DEFAULT_NAME;
  const appearance = useMemo(() => ({ ...DEFAULT_APPEARANCE, ...(config.appearance || {}) }), [config.appearance]);
  const onLeft = appearance.position === 'bottom-left';

  useEffect(() => {
    let active = true;
    api('config').then(data => {
      if (active) setConfig(data.config || data.branch || data || {});
    }).catch(() => {}).finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!open || !conversationCreated.current) return;
    let active = true;
    const poll = async () => {
      try {
        const data = await api(`conversations/${encodeURIComponent(sessionId.current)}/messages`);
        if (active) setMessages((data.messages || []).map((item: Record<string, unknown>) => normaliseMessage(item)));
      } catch { /* retry */ }
    };
    void poll();
    const timer = window.setInterval(poll, 8000);
    return () => { active = false; window.clearInterval(timer); };
  }, [open]);

  function selectGuide(guide: Guide) {
    setSelected(guide);
    setCompleted([]);
    setDescription('');
    setResolved(false);
    setAdviserRequested(false);
    setError('');
  }

  function toggleStep(index: number) {
    setCompleted(current => current.includes(index) ? current.filter(item => item !== index) : [...current, index]);
  }

  async function ensureConversation(guide: Guide) {
    if (conversationCreated.current) return;
    await api('conversations', {
      method: 'POST',
      body: JSON.stringify({
        externalConversationId: sessionId.current,
        authenticated: false,
        category: guide.category,
        priority: guide.category === 'security' ? 'high' : 'normal',
        pagePath: window.location.pathname,
        pageTitle: document.title,
        serviceContext: {
          website: 'Sousa Murray Domains',
          supportModel: 'godaddy_informed_self_service_first',
          guideId: guide.id,
          guideTitle: guide.title,
          sourceTitle: guide.sourceTitle,
          sourceUrl: guide.sourceUrl,
        },
      }),
    });
    conversationCreated.current = true;
  }

  async function requestAdviser() {
    if (!selected || busy || adviserRequested) return;
    setBusy(true);
    setError('');
    try {
      await ensureConversation(selected);
      const completedSteps = selected.steps.filter((_, index) => completed.includes(index));
      const summary = [
        `Support topic: ${selected.title}`,
        `Guide used: ${selected.sourceTitle}`,
        `Guide reviewed by Sousa Murray Domains: ${selected.reviewed}`,
        `Completed checks: ${completedSteps.length ? completedSteps.map((step, index) => `${index + 1}. ${step}`).join(' | ') : 'None marked as completed'}`,
        `Customer description: ${description.trim() || 'No additional description supplied'}`,
      ].join('\n');

      await api(`conversations/${encodeURIComponent(sessionId.current)}/messages`, {
        method: 'POST',
        body: JSON.stringify({
          externalMessageId: makeId('troubleshooting'),
          senderType: 'customer',
          senderName: 'Sousa Murray Domains customer',
          body: summary,
          metadata: { guideId: selected.id, completedStepCount: completedSteps.length, pagePath: window.location.pathname },
        }),
      });
      await api(`conversations/${encodeURIComponent(sessionId.current)}/events`, {
        method: 'POST',
        body: JSON.stringify({
          eventType: 'request_human',
          pagePath: window.location.pathname,
          metadata: { reason: 'self_service_not_resolved', guideId: selected.id, category: selected.category },
        }),
      });
      setAdviserRequested(true);
      const data = await api(`conversations/${encodeURIComponent(sessionId.current)}/messages`);
      setMessages((data.messages || []).map((item: Record<string, unknown>) => normaliseMessage(item)));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'A Head Office Customer Adviser could not be requested.');
    } finally {
      setBusy(false);
    }
  }

  if (!ready || hidden || !config.assistantEnabled) return null;

  const panelStyle: CSSProperties = {
    width: `min(calc(100vw - 1.5rem), ${appearance.panelWidth}px)`,
    height: `min(calc(100vh - 7rem), ${appearance.panelHeight}px)`,
    borderRadius: appearance.borderRadius,
    backgroundColor: appearance.panelBackground,
    color: appearance.panelTextColour,
  };
  const cardRadius = appearance.messageStyle === 'square' ? 4 : appearance.messageStyle === 'compact' ? 10 : Math.max(12, appearance.borderRadius - 2);

  return (
    <>
      <div className={`fixed bottom-5 z-[80] flex items-center gap-2 ${onLeft ? 'left-5' : 'right-5'}`}>
        {appearance.showLauncherLabel && appearance.launcherLabel && !open && (
          <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg sm:block">{appearance.launcherLabel}</span>
        )}
        <button
          type="button"
          onClick={() => setOpen(value => !value)}
          style={{ width: appearance.launcherSize, height: appearance.launcherSize, backgroundColor: appearance.launcherColour, color: appearance.launcherTextColour }}
          className="flex items-center justify-center rounded-full shadow-2xl transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          aria-label={open ? 'Close Domain Hub support' : 'Open Domain Hub support'}
        >
          {open ? <X className="h-6 w-6" /> : <LifeBuoy className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <section
          role="dialog"
          aria-label={assistantName}
          style={panelStyle}
          className={`fixed inset-x-3 bottom-20 z-[79] flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden border border-slate-200 shadow-2xl sm:left-auto ${onLeft ? 'sm:left-5' : 'sm:right-5'}`}
        >
          <header className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: appearance.headerBackground, color: appearance.headerTextColour }}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Wrench className="h-5 w-5" /></span>
              <div><p className="text-sm font-bold">{assistantName}</p>{appearance.showPoweredBy && <p className="text-[11px] opacity-75">{appearance.headerSubtitle}</p>}</div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close"><X className="h-4 w-4" /></button>
          </header>

          {config.emergencyNotice && <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-950">{config.emergencyNotice}</div>}

          <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: appearance.panelBackground, color: appearance.panelTextColour }}>
            {config.maintenanceEnabled ? (
              <div className="border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950" style={{ borderRadius: cardRadius }}>{config.maintenanceMessage || 'The Domain Hub Support Centre is temporarily unavailable while maintenance is completed.'}</div>
            ) : !selected ? (
              <div>
                <div className="mb-4 border border-slate-200 p-4 text-sm leading-6 shadow-sm" style={{ borderRadius: cardRadius }}>
                  <strong className="block text-base">How can we help?</strong>
                  <span className="mt-1 block opacity-75">{config.greeting || 'Choose the closest issue. We will show safe troubleshooting steps based on official GoDaddy guidance before you need to contact us.'}</span>
                </div>
                <div className="space-y-2">{GUIDES.map(guide => <button key={guide.id} type="button" onClick={() => selectGuide(guide)} className="w-full border p-4 text-left transition hover:brightness-95" style={{ borderRadius: cardRadius, borderColor: `${appearance.accentColour}40`, backgroundColor: appearance.panelBackground, color: appearance.panelTextColour }}><strong className="block text-sm">{guide.title}</strong><span className="mt-1 block text-xs leading-5 opacity-75">{guide.summary}</span></button>)}</div>
              </div>
            ) : (
              <div className="space-y-4">
                <button type="button" onClick={() => setSelected(null)} className="flex items-center gap-1 text-xs font-bold" style={{ color: appearance.accentColour }}><ChevronLeft className="h-4 w-4" />Choose another issue</button>
                <div className="border border-slate-200 p-4 shadow-sm" style={{ borderRadius: cardRadius }}><strong className="block text-base">{selected.title}</strong><p className="mt-1 text-sm leading-6 opacity-75">{selected.summary}</p></div>

                {selected.warning && <div className="flex gap-3 border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950" style={{ borderRadius: cardRadius }}><ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" /><span><strong className="block">Important before changing anything</strong>{selected.warning}</span></div>}

                <div className="border border-slate-200 p-4" style={{ borderRadius: cardRadius }}>
                  <div className="mb-3 flex items-center gap-2"><BookOpen className="h-4 w-4" style={{ color: appearance.accentColour }} /><strong className="text-sm">Troubleshooting checks</strong></div>
                  <div className="space-y-2">{selected.steps.map((step, index) => <label key={step} className="flex cursor-pointer gap-3 border border-slate-200 p-3 text-xs leading-5" style={{ borderRadius: Math.max(4, cardRadius - 4) }}><input type="checkbox" checked={completed.includes(index)} onChange={() => toggleStep(index)} className="mt-1 h-4 w-4" style={{ accentColor: appearance.accentColour }} /><span>{step}</span></label>)}</div>
                  <a href={selected.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-between border px-3 py-3 text-xs font-semibold" style={{ borderRadius: Math.max(4, cardRadius - 4), borderColor: `${appearance.accentColour}55`, backgroundColor: `${appearance.accentColour}12`, color: appearance.panelTextColour }}><span><strong className="block">Official supporting guide</strong>{selected.sourceTitle}</span><ExternalLink className="h-4 w-4 shrink-0" /></a>
                  <p className="mt-2 text-[10px] leading-4 opacity-60">Sousa Murray Domains explanation last reviewed {selected.reviewed}. The official provider page may be updated independently.</p>
                </div>

                {!resolved && !adviserRequested && <div className="grid gap-2 sm:grid-cols-2"><button type="button" onClick={() => setResolved(true)} className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white" style={{ borderRadius: Math.max(4, cardRadius - 4), backgroundColor: appearance.accentColour }}><CheckCircle2 className="h-4 w-4" />The issue is resolved</button><button type="button" onClick={() => document.getElementById('domain-support-description')?.focus()} className="flex items-center justify-center gap-2 border border-slate-300 px-4 py-3 text-xs font-bold" style={{ borderRadius: Math.max(4, cardRadius - 4) }}><UserRound className="h-4 w-4" />I still need help</button></div>}

                {resolved && <div className="border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950" style={{ borderRadius: cardRadius }}><strong className="block">Great — no enquiry has been created.</strong>You can return to the troubleshooting list if another issue appears.</div>}

                {!resolved && !adviserRequested && <div className="border border-slate-200 p-4" style={{ borderRadius: cardRadius }}><label htmlFor="domain-support-description" className="text-xs font-bold">Tell the Head Office adviser what is still happening</label><textarea id="domain-support-description" value={description} onChange={event => setDescription(event.target.value)} rows={4} maxLength={3000} placeholder={appearance.inputPlaceholder} className="mt-2 w-full border border-slate-300 bg-white p-3 text-sm text-slate-950 outline-none" style={{ borderRadius: Math.max(4, cardRadius - 4) }} /><button type="button" onClick={requestAdviser} disabled={busy || description.trim().length < 5} className="mt-3 flex w-full items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white disabled:opacity-50" style={{ borderRadius: Math.max(4, cardRadius - 4), backgroundColor: appearance.accentColour }}><Send className="h-4 w-4" />Send troubleshooting record to Head Office</button></div>}

                {adviserRequested && <div className="border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950" style={{ borderRadius: cardRadius }}><strong className="block">A Head Office Customer Adviser has been requested.</strong>The selected guide, completed checks and your description have been included. You should not need to repeat them.</div>}
                {messages.filter(message => message.senderType !== 'customer').map(message => <div key={message.id} className="border border-slate-200 p-4 text-sm leading-6" style={{ borderRadius: cardRadius }}><span className="mb-1 block text-[10px] font-bold uppercase tracking-wide opacity-60">{message.senderName}</span>{message.body}</div>)}
                {error && <div className="border border-red-200 bg-red-50 p-3 text-xs text-red-900" style={{ borderRadius: cardRadius }}>{error}</div>}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
