import { defineStore } from 'pinia'
import { siteContent, type SiteContent } from '@/shared/config'

export const useSiteContentStore = defineStore('siteContent', {
  state: (): { content: SiteContent } => ({
    content: siteContent,
  }),
})
