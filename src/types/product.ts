export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
}

export type RequestStatus = 'loading' | 'success' | 'error';
