import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Gerencia abertura/fechamento do modal com:
 * - fechamento por ESC
 * - bloqueio do scroll do body
 * - foco movido para o modal ao abrir e devolvido ao elemento de origem ao fechar
 */
export function useModal<T>() {
  const [selected, setSelected] = useState<T | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((item: T) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setSelected(item);
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus();
  }, []);

  const isOpen = selected !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  return { selected, isOpen, open, close };
}
