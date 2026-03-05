/**
 * PROJECT CONFIGURATION (WordPress Style)
 * Altere as cores e imagens aqui para refletir em todo o site instantaneamente.
 */

window.PROJECT_CONFIG = {
    // Paleta de Cores
    colors: {
        brandBlue: "#3B82F6",
        brandPurple: "#8B5CF6",
        brandPink: "#EC4899",
        gradient: "linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899)"
    },

    // Caminhos das Imagens (Localizadas em /assets/images/)
    images: {
        logo: "assets/images/logo-trendfy.png",
        heroDashboard: "assets/images/dashboard-hero.png",
        mockupDesktop: "assets/images/dashboard-mockup.png",
        step1: "assets/images/step-01.png",
        step2: "assets/images/step-02.jpeg",
        step3: "assets/images/step-03.png",
        step4: "assets/images/step-04.png",
        avatarAI: "assets/images/avatar-ai.png",
        interfaceMobile: "assets/images/interface-mobile.png"
    },

    // =============================================
    // SUPABASE — Configuração do Backend (Trendfy pv)
    // =============================================
    supabase: {
        url: "https://qpvacowyjswagnznjfoj.supabase.co",
        anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdmFjb3d5anN3YWduem5qZm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzUxNzgsImV4cCI6MjA4ODMxMTE3OH0.hPxFEEge24FTvnv_UJg_uYRPT04cP7sLs0NgY3taFeQ",
        publishableKey: "sb_publishable_thqLKgf05GSa_oqPUaim8w_CLBznX6R"
    }
};
