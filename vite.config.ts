import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    publicDir: './src',
    plugins: [
        react({
            babel: {
                plugins: ["@emotion/babel-plugin"],
            },
            jsxImportSource: '@emotion/react'
        })
    ],
});
