import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr()],
  base: "/",
  publicDir: './public/',
  assetsInclude: ['**/*.otf'],
  build: {
    minify: true,
    manifest: true
  },
  ssr: {
    noExternal: ["styled-components", "@emotion/*"],
  }
}

export default config
