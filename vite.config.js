import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

const diretivasCspBase = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https:",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
]

const cspProducao = [
  ...diretivasCspBase,
  "script-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
].join('; ')

const cspDesenvolvimento = [
  ...diretivasCspBase,
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' ws: wss:",
  "frame-ancestors 'none'",
].join('; ')

const cabecalhosComuns = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

const pluginCspMetaBuild = {
  name: 'html-csp-meta-producao',
  apply: 'build',
  transformIndexHtml(html) {
    const metaCsp = `    <meta http-equiv="Content-Security-Policy" content="${diretivasCspBase.concat(["script-src 'self'", "connect-src 'self'"]).join('; ')}" />\n`
    return html.replace('<meta charset="UTF-8" />\n', `<meta charset="UTF-8" />\n${metaCsp}`)
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    pluginCspMetaBuild,
  ],
  server: {
    fs: {
      strict: true,
    },
    headers: {
      ...cabecalhosComuns,
      'Content-Security-Policy': cspDesenvolvimento,
    },
  },
  preview: {
    headers: {
      ...cabecalhosComuns,
      'Content-Security-Policy': cspProducao,
    },
  },
  build: {
    sourcemap: false,
  },
})
