import type { SsrRenderResult } from './server/entry'

export async function render(_url: string): Promise<SsrRenderResult> {
  return { html: '', head: '', status: 200 }
}
