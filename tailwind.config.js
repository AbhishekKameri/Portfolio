/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   extend: {
  colors: {
    darkbg: "#0B1220",
    cardbg: "#121A2B",
    primary: "#22D3EE",   // Soft cyan
    secondary: "#0EA5E9",
    lighttext: "#E2E8F0",
    muted: "#94A3B8",
    borderSoft: "#1E293B",
  },
},
  },
  plugins: [],
}