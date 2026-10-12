import Banner from './components/Banner';
import BenefitsBar from './components/BenefitsBar';
import CategoryList from './components/CategoryList';
import CategoryMenu from './components/CategoryMenu';
import Header from './components/Header';
import ProductModal from './components/ProductModal';
import ProductShowcase from './components/ProductShowcase';
import { DEFAULT_CATEGORY_ID, MAIN_CATEGORIES } from './data/mainCategories';
import { useModal } from './hooks/useModal';
import { useProducts } from './hooks/useProducts';
import { useState } from 'react';
import type { Product } from './types/product';

function App() {
  const { products, status, error } = useProducts();
  const { selected, open, close } = useModal<Product>();
  const [categoryId, setCategoryId] = useState(DEFAULT_CATEGORY_ID);
  const categoryLabel = MAIN_CATEGORIES.find((c) => c.id === categoryId)?.label ?? '';

  return (
    <>
      <BenefitsBar />
      <Header />
      <CategoryMenu />
      <main>
        <Banner />
        <CategoryList activeId={categoryId} onChange={setCategoryId} />
        <ProductShowcase
          products={products}
          status={status}
          error={error}
          categoryId={categoryId}
          categoryLabel={categoryLabel}
          onSelectProduct={open}
        />
      </main>
      {selected && <ProductModal key={selected.productName} product={selected} onClose={close} />}
    </>
  );
}

export default App;
