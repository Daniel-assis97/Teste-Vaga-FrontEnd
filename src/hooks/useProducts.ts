import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import type { Product, RequestStatus } from '../types/product';

interface UseProductsResult {
  products: Product[];
  status: RequestStatus;
  error: string | null;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<RequestStatus>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(controller.signal)
      .then((list) => {
        setProducts(list);
        setStatus('success');
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setStatus('error');
      });

    return () => controller.abort();
  }, []);

  return { products, status, error };
}
