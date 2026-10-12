import type { Product, ProductsResponse } from '../types/product';

export const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

// Rota local (proxy do Vite, ver vite.config.ts) que evita bloqueio de CORS.
const PROXY_URL = '/api/produtos';

async function requestProducts(url: string, signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Falha ao carregar produtos (HTTP ${response.status})`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inválida da API de produtos');
  }

  return data.products;
}

/**
 * Tenta primeiro o proxy local e, se ele não existir (ex.: build publicado em
 * um servidor estático) ou falhar, cai para a URL original do JSON.
 */
export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  let lastError: unknown;

  for (const url of [PROXY_URL, PRODUCTS_URL]) {
    try {
      return await requestProducts(url, signal);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') throw error;
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Erro desconhecido ao buscar produtos');
}
