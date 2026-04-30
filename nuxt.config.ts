export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
      runtimeConfig: {
        supabaseKey: process.env.SUPABASE_KEY,
        zoteroApiKey: process.env.ZOTERO_API_KEY,
        zoteroUserId: process.env.ZOTERO_USER_ID,
        public: {
            supabaseUrl: process.env.SUPABASE_URL
        }
    },
    modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/supabase', '@nuxtjs/i18n'],
    css: ['~/assets/main.css'],
    supabase: {
        redirect: false,
    }

});

