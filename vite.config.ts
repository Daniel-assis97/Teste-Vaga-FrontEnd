import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O JSON do teste fica em outro domínio e pode não liberar CORS para o navegador.
// Em dev/preview, o próprio Vite busca o arquivo (servidor -> servidor) e o expõe
// em /api/produtos, na mesma origem da página, evitando o bloqueio.
const productsProxy = {
  '/api/produtos': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    secure: true,
    rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
};

export default defineConfig({
  plugins: [react()],
  server: { proxy: productsProxy },
  preview: { proxy: productsProxy },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
});
