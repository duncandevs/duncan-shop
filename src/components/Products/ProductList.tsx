import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import {
  ProductCard,
  ProductCardBody,
  ProductCardFooter,
  ProductCardHeader,
  ProductCardDescription,
  ProductCardTitle,
  ProductCardKeyIngredients,
} from "@/components/Products/ProductCard";
import {
  AddToCartButton,
  SubscribeButton,
} from "@/components/Products/ProductButton";
import { ProductCardData } from "@/components/Products/types";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 36,
  },
});

type ProductListProps = {
  products: ProductCardData[];
};
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div {...stylex.props(styles.container)}>
      {products?.map((product) => {
        const {
          theme,
          color,
          backgroundImage,
          productImage,
          name,
          description,
          keyIngredients,
          price,
          subscriptionDiscount,
        } = product;
        const [hovered, setIsHovered] = useState(false);
        const formattedDescription = description + "*";

        return (
          <ProductCard onHovered={setIsHovered}>
            <ProductCardHeader
              backgroundImg={backgroundImage}
              productImg={productImage}
              isHovered={hovered}
              color={color}
            />
            <ProductCardBody>
              <ProductCardTitle>{name}</ProductCardTitle>
              <ProductCardDescription>
                {formattedDescription}
              </ProductCardDescription>
              <ProductCardKeyIngredients keyIngredients={keyIngredients} />
            </ProductCardBody>
            <ProductCardFooter>
              <AddToCartButton price={price} />
              <SubscribeButton
                price={price}
                subscriptionDiscount={subscriptionDiscount}
                theme={theme}
              />
            </ProductCardFooter>
          </ProductCard>
        );
      })}
    </div>
  );
};
