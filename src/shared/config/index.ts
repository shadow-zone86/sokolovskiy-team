import type { InjectionKey } from 'vue'
import type { SiteContentStore } from './siteContent'

export const appTitle = 'Sokolovskiy Team'
export { siteContent } from './siteContent'
export type { SiteContent, SiteContentStore } from './siteContent'

export const SITE_CONTENT_STORE: InjectionKey<SiteContentStore> = Symbol('siteContentStore')
