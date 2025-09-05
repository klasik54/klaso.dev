// vite.config.js

import { resolve } from 'path'

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                privacy: resolve(__dirname, 'src/photo-to-pdf-privacy-policy.html')
            }
        }
    }
}
