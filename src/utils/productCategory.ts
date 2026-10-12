import type { Product } from '../types/product';

export type ProductCategoryId = 'celular' | 'acessorios' | 'tablets' | 'notebooks' | 'tvs';

/**
 * O JSON não traz categoria. Ela é deduzida por palavras-chave no nome do produto
 * (ex.: "iPhone" -> celular). Todos os itens atuais do JSON são celulares.
 */
const CATEGORY_KEYWORDS: Record<ProductCategoryId, string[]> = {
  celular: ['iphone', 'galaxy', 'smartphone', 'celular'],
  acessorios: ['capa', 'carregador', 'fone', 'cabo', 'pelicula'],
  tablets: ['ipad', 'tablet'],
  notebooks: ['notebook', 'macbook', 'laptop'],
  tvs: ['tv', 'televisor', 'televisao'],
};

const CATEGORY_PATTERNS = (Object.entries(CATEGORY_KEYWORDS) as [ProductCategoryId, string[]][]).map(
  ([id, keywords]) => [id, new RegExp(`\\b(${keywords.join('|')})`, 'i')] as const,
);

export function getProductCategory(product: Product): ProductCategoryId | null {
  const match = CATEGORY_PATTERNS.find(([, pattern]) => pattern.test(product.productName));
  return match ? match[0] : null;
}

/** "todos" devolve a lista inteira; as demais abas filtram pela categoria deduzida. */
export function filterByCategory(products: Product[], categoryId: string): Product[] {
  if (categoryId === 'todos') return products;
  return products.filter((product) => getProductCategory(product) === categoryId);
}

/**
 * Categoria principal (cards "Tecnologia", "Supermercado"...). Todo produto que se encaixa
 * em alguma subcategoria de tecnologia pertence a "tecnologia". O JSON só traz itens de
 * tecnologia, então as demais categorias principais ficam sem produtos.
 */
export function filterByMainCategory(products: Product[], mainCategoryId: string): Product[] {
  if (mainCategoryId !== 'tecnologia') return [];
  return products.filter((product) => getProductCategory(product) !== null);
}
