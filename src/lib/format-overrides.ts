export interface FormatOverrideTarget {
  file: string
  tagName: string
  sourceKind: 'bound-expression' | 'content-key'
  contentKey: string | null | undefined
  contentKeyTemplate: string | null | undefined
  expressionHash: string | null | undefined
}

export interface FormatOverrideMarks {
  bold?: boolean
  italic?: boolean
  color?: string | null
}

export interface FormatOverrideEntry {
  target: FormatOverrideTarget
  marks: FormatOverrideMarks
  updatedAt: string
}

export interface FormatOverrideSidecar {
  version: 1
  overrides: Record<string, FormatOverrideEntry>
}

export interface FormatOverrideBundle {
  version: 1
  scopes: Record<string, FormatOverrideSidecar>
}

export const EMPTY_FORMAT_OVERRIDE_BUNDLE: FormatOverrideBundle = {
  version: 1,
  scopes: {},
}

export type FindResult =
  | { status: 'missing' }
  | { status: 'applicable'; marks: FormatOverrideMarks }
  | { status: 'guard-mismatch'; expected: FormatOverrideTarget; actual: FormatOverrideTarget }

function normalise(v: string | null | undefined): string | null {
  return v == null ? null : v
}

export function targetsMatch(a: FormatOverrideTarget, b: FormatOverrideTarget): boolean {
  return (
    a.file === b.file &&
    a.tagName === b.tagName &&
    a.sourceKind === b.sourceKind &&
    normalise(a.contentKey) === normalise(b.contentKey) &&
    normalise(a.contentKeyTemplate) === normalise(b.contentKeyTemplate) &&
    normalise(a.expressionHash) === normalise(b.expressionHash)
  )
}

export function deriveFormatOverrideScope(file: string): { key: string; filePath: string } {
  // Must be a simple src/pages/<name>.tsx with no dynamic segments or dots in the stem
  const match = file.match(/^src\/pages\/([a-zA-Z0-9/_-]+)\.tsx$/)
  if (!match) {
    return { key: 'shared', filePath: 'format-overrides/shared.json' }
  }
  const key = `pages/${match[1]}`
  return { key, filePath: `format-overrides/${key}.json` }
}

export function findApplicableFormatOverride(
  bundle: FormatOverrideBundle,
  devId: string,
  target: FormatOverrideTarget,
): FindResult {
  const scope = deriveFormatOverrideScope(target.file)
  const sidecar = bundle.scopes[scope.key]
  if (!sidecar) return { status: 'missing' }

  const entry = sidecar.overrides[devId]
  if (!entry) return { status: 'missing' }

  // Validate shape
  if (!entry.target || !entry.marks || typeof entry.updatedAt !== 'string') {
    console.warn('[format-overrides] Ignoring malformed override entry.', { scope: scope.key, devId })
    return { status: 'missing' }
  }

  if (!targetsMatch(entry.target, target)) {
    return { status: 'guard-mismatch', expected: entry.target, actual: target }
  }

  return { status: 'applicable', marks: entry.marks }
}

export function buildFormatOverrideStyle(marks: FormatOverrideMarks): React.CSSProperties {
  const style: React.CSSProperties = {}
  if (marks.bold) style.fontWeight = 700
  if (marks.italic) style.fontStyle = 'italic'
  if (marks.color) style.color = marks.color
  return style
}
