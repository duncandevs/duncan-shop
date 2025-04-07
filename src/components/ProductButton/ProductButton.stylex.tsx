import * as React from "react"
import * as stylex from '@stylexjs/stylex';
import { variants, themes, styles } from "./styles.stylex";
import { InfoIcon } from "lucide-react";
import {productThemeColorMap} from '../../styles/tokens'

export type ProductButtonVariant = keyof typeof variants
export type ProductButtonTheme = keyof typeof productThemeColorMap

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


export const AddToCartButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({...props }, ref) => {
        return (
            <ProductButton variant="primary" {...props} ref={ref}>
                <span>Add to Cart</span>
                <span {...stylex.props(styles.divider)}/>
                <span>$50.00</span>
            </ProductButton>
        )
    }
);
AddToCartButton.displayName = "AddToCartButton";

export interface SubscribeButtonProps extends ButtonProps{
    theme: ProductButtonTheme;
}
export const SubscribeButton = React.forwardRef<HTMLButtonElement, SubscribeButtonProps>(
    ({theme, ...props}, ref) => {
        return (
            <ProductButton variant="secondary" theme={theme} {...props} ref={ref}>
                <InfoIcon />
                <span>Subscribe</span>
                <span {...stylex.props(styles.divider)} />
                <span>$41.50</span>
            </ProductButton>
        )
    }
);
SubscribeButton.displayName = "SubscribeButton";