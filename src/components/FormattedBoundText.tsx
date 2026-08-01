import { useSyncExternalStore } from 'react'

import {
  buildFormatOverrideStyle,
  findApplicableFormatOverride,
  type FormatOverrideTarget,
} from '@/lib/format-overrides'
import {
  getFormatOverrideBundle,
  subscribeFormatOverrideBundle,
} from '@/lib/format-overrides-store'

interface FormattedBoundTextProps {
  devId: string
  guard: FormatOverrideTarget
  children: React.ReactNode
}

export function FormattedBoundText({ devId, guard, children }: FormattedBoundTextProps) {
  const bundle = useSyncExternalStore(subscribeFormatOverrideBundle, getFormatOverrideBundle)
  const result = findApplicableFormatOverride(bundle, devId, guard)

  if (result.status === 'guard-mismatch') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[format-overrides] Ignoring stale override for bound text.', {
        devId,
        expected: result.expected,
        actual: result.actual,
      })
    }
    return <>{children}</>
  }

  if (result.status === 'missing') {
    return <>{children}</>
  }

  const { marks } = result
  const style = buildFormatOverrideStyle(marks)

  return (
    <span
      data-airo-formatted-bound-text="true"
      {...(marks.bold != null ? { 'data-airo-format-bold': String(marks.bold) } : {})}
      {...(marks.italic != null ? { 'data-airo-format-italic': String(marks.italic) } : {})}
      {...(marks.color != null ? { 'data-airo-format-color': marks.color } : {})}
      style={style}
    >
      {children}
    </span>
  )
}
