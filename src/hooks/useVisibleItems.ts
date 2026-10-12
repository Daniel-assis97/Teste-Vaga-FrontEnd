import { useEffect, useState } from 'react';

/** Quantos cards cabem por vez: 4 no desktop (layout), menos em telas menores. */
function getVisibleItems(width: number): number {
  if (width >= 1100) return 4;
  if (width >= 800) return 3;
  if (width >= 520) return 2;
  return 1;
}

export function useVisibleItems(): number {
  const [visible, setVisible] = useState(() => getVisibleItems(window.innerWidth));

  useEffect(() => {
    const onResize = () => setVisible(getVisibleItems(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return visible;
}
