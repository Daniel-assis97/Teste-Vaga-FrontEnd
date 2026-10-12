export interface MainCategory {
  id: string;
  label: string;
}

export const DEFAULT_CATEGORY_ID = 'tecnologia';

export const MAIN_CATEGORIES: MainCategory[] = [
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'supermercado', label: 'Supermercado' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'ferramentas', label: 'Ferramentas' },
  { id: 'saude', label: 'Saúde' },
  { id: 'esportes', label: 'Esportes e Fitness' },
  { id: 'moda', label: 'Moda' },
];
