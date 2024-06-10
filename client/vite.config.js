import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        strictPort: true,
        port: 8000,
        proxy: {
            '/graphql': {
                target: 'http://localhost:4001',
                changeOrigin: true,
                secure: false,
            },
        },
    },
})