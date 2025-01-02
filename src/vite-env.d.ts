/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BANDIT_API_KEY: string
    readonly VITE_CAMPAIGN_ID: string
    readonly VITE_CLUSTER: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 