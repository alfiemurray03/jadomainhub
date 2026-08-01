export const onRequestGet = async (): Promise<Response> => {
  return Response.json({
    ok: true,
    service: 'JA Domain Hub',
    platform: 'Cloudflare Pages',
    timestamp: new Date().toISOString(),
  });
};
