/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(1.5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle .15s linear 1 normal",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      {
        wankil: {
          primary: "#1D4ED8", // Bleu vif pour les éléments principaux
          "primary-content": "#eff3ff", // Texte clair sur éléments "primary"

          secondary: "#FACC15", // Jaune pour les éléments secondaires
          "secondary-content": "#1A1300", // Texte sombre sur "secondary"

          accent: "#4649e5", // Bleu-violet pour les accents
          "accent-content": "#eeeeff", // Texte clair sur "accent"

          // Backgrounds légèrement teintés en bleu
          "base-100": "#e0ecff", // Fond principal avec un bleu doux
          "base-200": "#c7dafe", // Sections secondaires
          "base-300": "#a5c1fc", // Arrière-plans contrastés
          "base-content": "#172754", // Texte sombre pour un contraste clair

          neutral: "#CBD5E1", // Gris bleuté neutre pour des éléments moins importants
          "neutral-content": "#1F2937", // Texte sombre sur fond "neutral"

          info: "#616f94", // Bleu ciel pour les messages informatifs
          "info-content": "#1E3A8A", // Texte sur fond "info"

          success: "#34D399", // Vert doux pour les confirmations
          "success-content": "#064E3B", // Texte sur fond "success"

          warning: "#F59E0B", // Orange vif pour les avertissements
          "warning-content": "#78350F", // Texte sur fond "warning"

          error: "#EF4444", // Rouge pour les erreurs
          "error-content": "#7F1D1D", // Texte sur fond "error"
        },
      },
    ],
    darkTheme: "wankil",
  },
};
