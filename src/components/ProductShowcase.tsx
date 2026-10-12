import { useMemo, useState } from 'react';
import type { Product, RequestStatus } from '../types/product';
import { DEFAULT_CATEGORY_ID } from '../data/mainCategories';
import { filterByCategory, filterByMainCategory } from '../utils/productCategory';
import ProductCarousel from './ProductCarousel';
import ProductTabs from './ProductTabs';
import '../styles/components/ProductShowcase.scss';

interface ProductShowcaseProps {
  products: Product[];
  status: RequestStatus;
  error: string | null;
  categoryId: string;
  categoryLabel: string;
  onSelectProduct: (product: Product) => void;
}

function ProductShowcase({
  products,
  status,
  error,
  categoryId,
  categoryLabel,
  onSelectProduct,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState('celular');
  // O JSON não tem categoria: ela é deduzida do nome do produto (ver utils/productCategory).
  const isTechnology = categoryId === DEFAULT_CATEGORY_ID;
  const visibleProducts = useMemo(() => {
    const inMainCategory = filterByMainCategory(products, categoryId);
    return isTechnology ? filterByCategory(inMainCategory, activeTab) : inMainCategory;
  }, [products, categoryId, isTechnology, activeTab]);

  return (
    <section
      id="produtos-relacionados"
      className="product-showcase"
      aria-labelledby="product-showcase-title"
    >
      <div className="product-showcase__heading">
        <h2 id="product-showcase-title" className="product-showcase__title">
          Produtos relacionados
        </h2>
      </div>

      {/* As abas são subcategorias de tecnologia: só fazem sentido nessa categoria. */}
      {isTechnology && <ProductTabs activeId={activeTab} onChange={setActiveTab} />}

      <div className="product-showcase__content">
        {status === 'loading' && (
          <p className="product-showcase__message" role="status">
            Carregando produtos...
          </p>
        )}

        {status === 'error' && (
          <p className="product-showcase__message product-showcase__message--error" role="alert">
            Não foi possível carregar os produtos. {error}
          </p>
        )}

        {status === 'success' && visibleProducts.length === 0 && (
          <p className="product-showcase__message" role="status">
            {isTechnology
              ? 'Nenhum produto disponível nesta categoria.'
              : `Nenhum produto disponível em ${categoryLabel}.`}
          </p>
        )}

        {status === 'success' && visibleProducts.length > 0 && (
          <ProductCarousel
            key={`${categoryId}-${activeTab}`}
            products={visibleProducts}
            onSelectProduct={onSelectProduct}
          />
        )}
      </div>
    </section>
  );
}

export default ProductShowcase;
