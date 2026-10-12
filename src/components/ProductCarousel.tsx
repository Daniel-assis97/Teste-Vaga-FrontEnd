import type { CSSProperties } from 'react';
import { useCarousel } from '../hooks/useCarousel';
import { useVisibleItems } from '../hooks/useVisibleItems';
import type { Product } from '../types/product';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import ProductCard from './ProductCard';
import '../styles/components/ProductCarousel.scss';

interface ProductCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductCarousel({ products, onSelectProduct }: ProductCarouselProps) {
  const visibleItems = useVisibleItems();
  const { index, prev, next, canPrev, canNext } = useCarousel(products.length, visibleItems);

  const style = {
    '--visible': visibleItems,
    '--index': index,
  } as CSSProperties;

  return (
    <div
      className="product-carousel"
      style={style}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Lista de produtos relacionados"
    >
      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--prev"
        aria-label="Produtos anteriores"
        disabled={!canPrev}
        onClick={prev}
      >
        <ChevronLeftIcon size={26} />
      </button>

      <div className="product-carousel__viewport">
        <ul className="product-carousel__track">
          {products.map((product, i) => {
            const isVisible = i >= index && i < index + visibleItems;
            return (
              <li
                key={`${product.productName}-${i}`}
                className="product-carousel__slide"
                aria-hidden={!isVisible}
                // `inert` ainda não existe nos tipos do React 18: via spread para não quebrar o tsc.
                {...(!isVisible ? { inert: '' } : {})}
              >
                <ProductCard product={product} onSelect={onSelectProduct} />
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--next"
        aria-label="Próximos produtos"
        disabled={!canNext}
        onClick={next}
      >
        <ChevronRightIcon size={26} />
      </button>
    </div>
  );
}

export default ProductCarousel;
