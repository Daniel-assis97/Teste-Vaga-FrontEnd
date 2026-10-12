import { CrownIcon } from './Icons';
import '../styles/components/CategoryMenu.scss';

const MENU_ITEMS = [
  { id: 'all', label: 'Todas categorias' },
  { id: 'market', label: 'Supermercado' },
  { id: 'books', label: 'Livros' },
  { id: 'fashion', label: 'Moda' },
  { id: 'releases', label: 'Lançamentos' },
  { id: 'deals', label: 'Ofertas do dia', highlight: true },
  { id: 'subscription', label: 'Assinatura', icon: <CrownIcon size={20} /> },
];

function CategoryMenu() {
  return (
    <nav className="category-menu" aria-label="Categorias principais">
      <ul className="category-menu__list">
        {MENU_ITEMS.map(({ id, label, highlight, icon }) => (
          <li key={id}>
            <a
              className={`category-menu__link${highlight ? ' category-menu__link--highlight' : ''}`}
              href={`#${id}`}
            >
              {icon}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryMenu;
