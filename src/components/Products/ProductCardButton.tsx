import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { InfoIcon } from "lucide-react";
import { productThemeColorMap } from "@/styles/tokens";

const variants = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: 74,
    width: 310,
    borderRadius: 36,
    color: "white",
    backgroundColor: "black",
    gap: 8,
  },
  primary: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: "black",
    ":hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  secondary: {
    color: "black",
    border: "none",
    ":hover": {
      opacity: 0.5,
    },
  },
});

const themes = stylex.create({
  yellow: {
    backgroundColor: "var(--color-pastel-yellow)",
  },
  turquoise: {
    backgroundColor: "var(--color-pastel-turquoise)",
  },
  rose: {
    backgroundColor: "var(--color-pastel-rose)",
  },
});

const styles = stylex.create({
  divider: {
    flex: 1,
    maxWidth: 100,
    height: "2px",
    backgroundColor: "black",
    margin: "0 8px",
    alignSelf: "center",
  },
});

export type ProductCardButtonVariant = keyof typeof variants;
export type ProductCardButtonTheme = keyof typeof productThemeColorMap;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ProductCardButtonVariant;
  theme?: ProductCardButtonTheme;
}
export const ProductCardButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        {...stylex.props(
          variants.base,
          variant && variants[variant],
          theme && themes[theme],
        )}
      />
    );
  },
);
ProductCardButton.displayName = "ProductCardButton";

interface CartButton extends ButtonProps {
  price: number;
  subscriptionDiscount?: number;
}
export const AddToCartButton = React.forwardRef<HTMLButtonElement, CartButton>(
  ({ price, ...props }, ref) => {
    return (
      <ProductCardButton variant="primary" {...props} ref={ref}>
        <span>Add to Cart</span>
        <span {...stylex.props(styles.divider)} />
        <span>${price.toFixed(2)}</span>
      </ProductCardButton>
    );
  },
);
AddToCartButton.displayName = "AddToCartButton";

export interface SubscribeButtonProps extends CartButton {
  theme: ProductCardButtonTheme;
}
export const SubscribeButton = React.forwardRef<
  HTMLButtonElement,
  SubscribeButtonProps
>(({ price, subscriptionDiscount, theme, ...props }, ref) => {
  const discountPrice = subscriptionDiscount
    ? price - price * subscriptionDiscount
    : price;
  return (
    <ProductCardButton variant="secondary" theme={theme} {...props} ref={ref}>
      <span>
        <InfoIcon />
      </span>
      <span>Subscribe</span>
      <span {...stylex.props(styles.divider)} />
      <span>${discountPrice.toFixed(2)}</span>
    </ProductCardButton>
  );
});
SubscribeButton.displayName = "SubscribeButton";
