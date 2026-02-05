// vite.config.js

import { resolve } from 'path'

export default {
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                photoToPdfPrivacyPolicy: resolve(__dirname, 'src/photo-to-pdf-privacy-policy.html'),
                nhiePrivacyPolicy: resolve(__dirname, 'src/nhie-privacy-policy.html'),
                phasioPrivacyPolicy: resolve(__dirname, 'src/phasio-privacy-policy.html')
            }
        }
    }
}
