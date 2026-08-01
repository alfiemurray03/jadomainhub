import { EMPTY_FORMAT_OVERRIDE_BUNDLE, type FormatOverrideBundle } from './format-overrides'

export const FORMAT_OVERRIDES_WILL_UPDATE_EVENT = 'airo:format-overrides-will-update'

let currentBundle: FormatOverrideBundle = EMPTY_FORMAT_OVERRIDE_BUNDLE
const listeners = new Set<() => void>()

export function getFormatOverrideBundle(): FormatOverrideBundle {
  return currentBundle
}

export function setFormatOverrideBundle(bundle: FormatOverrideBundle): void {
  currentBundle = bundle

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(FORMAT_OVERRIDES_WILL_UPDATE_EVENT, { detail: bundle }),
    )
  }

  for (const listener of listeners) {
    listener()
  }
}

export function subscribeFormatOverrideBundle(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
