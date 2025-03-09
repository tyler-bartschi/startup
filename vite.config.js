import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': 'https://localhost:4000',
        },
    },
});