export interface Product {
  id: string;
  name:string;
  productId: string;
  variants?: string[];
  sizes?: string[];
  positiveKeywords?: string[];
  negativeKeywords?: string[];
  url?: string;
  imgUrl?: string;
  styleCode?: string;
}
