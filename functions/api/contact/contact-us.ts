const INBOX_ACCOUNT_ID = '1cafd619-b53f-4c5a-86ab-9fcf70e8b3ab';
const INBOX_API_BASE = 'https://conversations.api.godaddy.com';

interface ContactPayload {
  conversation?: {
    messages_attributes?: Array<{ body?: string }>;
    data?: Record<string, string>;
  };
  user?: {
    email?: string;
    name?: string;
  };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export const onRequestPost = async (context: { request: Request }): Promise<Response> => {
  const { request } = context;

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return json({ error: 'Content-Type must be application/json.' }, 415);
  }

  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > 50_000) {
    return json({ error: 'Request is too large.' }, 413);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const email = payload.user?.email?.trim() ?? '';
  const name = payload.user?.name?.trim() ?? '';
  const message = payload.conversation?.messages_attributes?.[0]?.body?.trim() ?? '';

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return json({ error: 'A valid email address is required.' }, 400);
  }

  if (!message) {
    return json({ error: 'Message body is required.' }, 400);
  }

  if (message.length > 10_000 || name.length > 200 || email.length > 320) {
    return json({ error: 'One or more fields are too long.' }, 400);
  }

  const upstreamPayload = {
    conversation: {
      messages_attributes: [{ body: message }],
      data: payload.conversation?.data ?? {},
    },
    user: {
      email,
      ...(name ? { name } : {}),
    },
  };

  try {
    const response = await fetch(
      `${INBOX_API_BASE}/v1/accounts/${INBOX_ACCOUNT_ID}/conversations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'JA-Domain-Hub-Cloudflare-Contact/1.0',
        },
        body: JSON.stringify(upstreamPayload),
      },
    );

    if (!response.ok) {
      console.error('GoDaddy Conversations API error', response.status, await response.text());
      return json({ error: 'Failed to submit message. Please try again.' }, 502);
    }

    return json({ ok: true }, 201);
  } catch (error) {
    console.error('Contact form function error', error);
    return json({ error: 'An unexpected error occurred.' }, 500);
  }
};
