import type { Product } from '../types/product';
import { formatCurrency, getInstallment, getOldPrice } from '../utils/formatCurrency';
import '../styles/components/ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, photo, price } = product;

  // O clique no card inteiro abre o modal. O botão COMPRAR é um <button> real
  // (acessível por teclado) e seu clique "borbulha" até este handler.
  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <div className="product-card__media">
        <img className="product-card__image" src={photo} alt={productName} loading="lazy" />
      </div>

      <h3 className="product-card__name">{productName}</h3>

      <p className="product-card__old-price">
        <span className="visually-hidden">De </span>
        <del>{formatCurrency(getOldPrice(price))}</del>
      </p>
      <p className="product-card__price">
        <span className="visually-hidden">Por </span>
        {formatCurrency(price)}
      </p>
      <p className="product-card__installments">
        ou 2x de {formatCurrency(getInstallment(price))} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>

      <button
        type="button"
        className="product-card__button"
        aria-label={`Comprar ${productName}`}
      >
        Comprar
      </button>
    </article>
  );
}

export default ProductCard;
