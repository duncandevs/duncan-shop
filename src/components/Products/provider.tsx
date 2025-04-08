import { createContext, useContext, useMemo } from "react";
import { mockProducts, mockProductCardData } from "./mocks";
import { productThemeColorMap } from "@/styles/tokens";
import { ProductCardData, ProductCardTheme } from "./types";

interface ProductDataContextValue {
  products: ProductCardData[];
};

const ProductDataContext = createContext<ProductDataContextValue | undefined>({
  products: [],
});

export const ProductDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const products = useMemo(() => {
    const themeMap = Object.fromEntries(
      mockProductCardData.map(({ product_id, theme }) => [product_id, theme]),
    );

    return mockProducts.map((product) => {
      const theme = themeMap[product.id] as ProductCardTheme;
      const color = productThemeColorMap[theme];
      return { ...product, theme, color };
    });
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProductData = () => {
  const context = useContext(ProductDataContext);
  if (!context)
    throw new Error("useProductData must be used within a ProductDataProvider");
  return context;
};
