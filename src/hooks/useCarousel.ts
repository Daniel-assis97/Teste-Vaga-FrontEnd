import { useCallback, useEffect, useState } from 'react';

/**
 * Controla a posição de um carrossel por "itens visíveis".
 * `index` é o índice do primeiro card visível.
 */
export function useCarousel(totalItems: number, visibleItems: number) {
  const maxIndex = Math.max(0, totalItems - visibleItems);
  const [index, setIndex] = useState(0);

  // Se a quantidade visível mudar (resize), garante que o índice continua válido.
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  return {
    index,
    prev,
    next,
    canPrev: index > 0,
    canNext: index < maxIndex,
  };
}
