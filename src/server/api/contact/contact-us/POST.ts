import type { Request, Response } from 'express';

const INBOX_ACCOUNT_ID = '1cafd619-b53f-4c5a-86ab-9fcf70e8b3ab';
const INBOX_API_BASE = 'https://conversations.api.godaddy.com';

export default async function handler(req: Request, res: Response) {
  try {
    const { conversation, user } = req.body as {
      conversation: {
        messages_attributes: { body: string }[];
        data?: Record<string, string>;
      };
      user: { email: string; name?: string };
    };

    if (!user?.email) {
      return res.status(400).json({ error: 'Email is required.' });
    }
    if (!conversation?.messages_attributes?.[0]?.body) {
      return res.status(400).json({ error: 'Message body is required.' });
    }

    const response = await fetch(
      `${INBOX_API_BASE}/v1/accounts/${INBOX_ACCOUNT_ID}/conversations`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversation, user }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('Inbox API error:', response.status, text);
      return res.status(502).json({ error: 'Failed to submit message. Please try again.' });
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
