/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
