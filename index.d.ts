import { Attacher } from 'unified'

export interface WikiLinkOptions {
  permalinks?: string[]
  pageResolver?: (name: string) => string[]
  hrefTemplate?: (permalink: string) => string
  wikiLinkClassName?: string
  newClassName?: string
  aliasDivider?: string
}

export const wikiLinkPlugin: Attacher<[WikiLinkOptions]>
