import '../styles/components/ProductTabs.scss';

export const PRODUCT_TABS = [
  { id: 'celular', label: 'Celular' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'tablets', label: 'Tablets' },
  { id: 'notebooks', label: 'Notebooks' },
  { id: 'tvs', label: 'TVs' },
  { id: 'todos', label: 'Ver todos' },
];

interface ProductTabsProps {
  activeId: string;
  onChange: (id: string) => void;
}

function ProductTabs({ activeId, onChange }: ProductTabsProps) {
  return (
    <nav className="product-tabs" aria-label="Categorias de produtos relacionados">
      <ul className="product-tabs__list">
        {PRODUCT_TABS.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <li key={id} className="product-tabs__item">
              <button
                type="button"
                className={`product-tabs__button${isActive ? ' product-tabs__button--active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => onChange(id)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ProductTabs;
