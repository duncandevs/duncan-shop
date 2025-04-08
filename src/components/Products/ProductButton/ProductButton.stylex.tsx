import * as React from "react"
import * as stylex from '@stylexjs/stylex';
import { variants, themes, styles } from "./styles.stylex";
import { InfoIcon } from "lucide-react";
import { productThemeColorMap } from '@/styles/tokens';

export type ProductButtonVariant = keyof typeof variants;
export type ProductButtonTheme = keyof typeof productThemeColorMap;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ProductButtonVariant;
    theme?: ProductButtonTheme;
};
export const ProductButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        {...stylex.props(
            variants.base, 
            variant && variants[variant], 
            theme && themes[theme])}
      />
    )
  }
);
ProductButton.displayName = "ProductButton";

interface CartButton extends ButtonProps {
    price: number;
    subscriptionDiscount?: number;
}
export const AddToCartButton = React.forwardRef<HTMLButtonElement, CartButton>(
    ({price, ...props }, ref) => {
        return (
            <ProductButton variant="primary" {...props} ref={ref}>
                <span>Add to Cart</span>
                <span {...stylex.props(styles.divider)}/>
                <span>${price.toFixed(2)}</span>
            </ProductButton>
        )
    }
);
AddToCartButton.displayName = "AddToCartButton";

export interface SubscribeButtonProps extends CartButton{
    theme: ProductButtonTheme;
}
export const SubscribeButton = React.forwardRef<HTMLButtonElement, SubscribeButtonProps>(
    ({price, subscriptionDiscount, theme, ...props}, ref) => {
        const discountPrice = subscriptionDiscount? price - (price * subscriptionDiscount) : price;
        return (
            <ProductButton variant="secondary" theme={theme} {...props} ref={ref}>
                <span><InfoIcon /></span>
                <span>Subscribe</span>
                <span {...stylex.props(styles.divider)} />
                <span>${discountPrice.toFixed(2)}</span>
            </ProductButton>
        )
    }
);
SubscribeButton.displayName = "SubscribeButton";