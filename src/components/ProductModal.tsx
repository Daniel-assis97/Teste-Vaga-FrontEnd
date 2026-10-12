import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { Product } from '../types/product';
import { formatCurrency } from '../utils/formatCurrency';
import { CloseIcon } from './Icons';
import QuantitySelector from './QuantitySelector';
import '../styles/components/ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function ProductModal({ product, onClose }: ProductModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [quantity, setQuantity] = useState(1);

  // Move o foco para dentro do modal ao abrir (o hook useModal devolve ao fechar).
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  // Mantém o Tab dentro do modal enquanto ele está aberto.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;

    const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="product-modal" onMouseDown={handleOverlayClick} onKeyDown={handleKeyDown}>
      <div
        ref={dialogRef}
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="product-modal__close"
          aria-label="Fechar"
          onClick={onClose}
        >
          <CloseIcon size={20} />
        </button>

        <div className="product-modal__media">
          <img className="product-modal__image" src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__info">
          <h2 id={titleId} className="product-modal__title">
            {product.productName}
          </h2>
          <p className="product-modal__price">{formatCurrency(product.price)}</p>
          <p className="product-modal__description">{product.descriptionShort}</p>
          {/* Não há página de detalhes no escopo do teste: evita que o clique altere a URL. */}
          <a
            className="product-modal__link"
            href="#detalhes"
            onClick={(event) => event.preventDefault()}
          >
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <button type="button" className="product-modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
