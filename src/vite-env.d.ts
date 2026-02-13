/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLAWDBOT_WEBCHAT_URL: string
  readonly VITE_HUBSPOT_PORTAL_ID: string
  readonly VITE_HUBSPOT_FORM_ID: string
  readonly VITE_BLAND_AI_PHONE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
