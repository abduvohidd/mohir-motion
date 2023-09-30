import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default-layout" | "home-layout"
declare module "C:/Users/tonny/Documents/Tuts/mohir-motion/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}