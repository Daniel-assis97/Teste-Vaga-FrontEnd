import type { ReactNode } from 'react';
import { MAIN_CATEGORIES } from '../data/mainCategories';
import {
  DrinksIcon,
  FashionIcon,
  FitnessIcon,
  HealthIcon,
  MarketIcon,
  TechnologyIcon,
  ToolsIcon,
} from './Icons';
import '../styles/components/CategoryList.scss';

const ICONS: Record<string, ReactNode> = {
  tecnologia: <TechnologyIcon size={64} />,
  supermercado: <MarketIcon size={64} />,
  bebidas: <DrinksIcon size={64} />,
  ferramentas: <ToolsIcon size={64} />,
  saude: <HealthIcon size={64} />,
  esportes: <FitnessIcon size={64} />,
  moda: <FashionIcon size={64} />,
};

interface CategoryListProps {
  activeId: string;
  onChange: (id: string) => void;
}

function CategoryList({ activeId, onChange }: CategoryListProps) {
  return (
    <section className="category-list" aria-labelledby="category-list-title">
      <h2 id="category-list-title" className="visually-hidden">
        Navegue por categoria
      </h2>
      <ul className="category-list__items">
        {MAIN_CATEGORIES.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <li key={id} className="category-list__item">
              <button
                type="button"
                className={`category-list__button${isActive ? ' category-list__button--active' : ''}`}
                aria-pressed={isActive}
                onClick={() => onChange(id)}
              >
                <span className="category-list__card">{ICONS[id]}</span>
                <span className="category-list__label">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CategoryList;
