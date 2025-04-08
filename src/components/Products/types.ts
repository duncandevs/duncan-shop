import { productThemeColorMap } from "@/styles/tokens";
export type ProductCardTheme = keyof typeof productThemeColorMap;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  productImage: string;
  backgroundImage: string;
  keyIngredients: string[];
  subscriptionDiscount: number;
}

export interface ProductCardData extends Product {
  theme: ProductCardTheme;
  color: string;
}
