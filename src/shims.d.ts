import type { Mapp, MappOptions } from './models/map'

// global.d.ts

declare global {
  interface Window {
    Mapp: new (options: MappOptions) => Mapp // Add the Mapp type to globalThis
  }
}

// with unplugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
