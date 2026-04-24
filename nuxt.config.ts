import { execSync } from 'node:child_process';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: ['@nuxt/content', '@nuxtjs/supabase'],
    css: ['~/assets/main.css'],
    supabase: {
        redirect: false,
    }
});

