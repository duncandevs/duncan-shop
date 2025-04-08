import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import styles from "./styles.stylex";

export interface ProductCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImg: string;
  productImg: string;
  isHovered?: boolean;
  color: string;
}
export const ProductCardHeader = React.forwardRef<
  HTMLDivElement,
  ProductCardHeaderProps
>(({ backgroundImg, productImg, isHovered, color, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    {...stylex.props(styles.header)}
    style={{
      backgroundImage: backgroundImg ? `url(${backgroundImg})` : "",
    }}
  >
    <ProductCardHightlightBar color={color} isVisible={!!isHovered} />
    <img
      {...stylex.props(styles.productImg)}
      src={productImg}
      alt="Product Image"
      loading="eager"
    />
  </div>
));
ProductCardHeader.displayName = "ProductCardHeader";
type ProductCardHightlightBarProps = {
  color: string;
  isVisible: boolean;
};
export const ProductCardHightlightBar = ({
  color,
  isVisible,
}: ProductCardHightlightBarProps) => (
  <>
    {isVisible && (
      <div
        {...stylex.props(styles.highlightContainer)}
        style={{ backgroundColor: color }}
      />
    )}
  </>
);

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  onHovered?: (hovered: boolean) => void;
}
export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ onHovered, color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        onMouseEnter={() => onHovered && onHovered(true)}
        onMouseLeave={() => onHovered && onHovered(false)}
        {...stylex.props(styles.container)}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);
ProductCard.displayName = "ProductCard";

export interface ProductCardBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export const ProductCardBody = React.forwardRef<
  HTMLDivElement,
  ProductCardBodyProps
>(({ ...props }, ref) => (
  <div ref={ref} {...stylex.props(styles.body)} {...props}>
    {props.children}
  </div>
));
ProductCardBody.displayName = "ProductCardBody";

export interface ProductCardTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export const ProductCardTitle = React.forwardRef<
  HTMLParagraphElement,
  ProductCardTitleProps
>(({ ...props }, ref) => (
  <h2 ref={ref} {...stylex.props(styles.title)} {...props}>
    {props.children}
  </h2>
));
ProductCardTitle.displayName = "ProductCardTitle";

export interface ProductCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
export const ProductCardDescription = React.forwardRef<
  HTMLParagraphElement,
  ProductCardDescriptionProps
>(({ ...props }, ref) => (
  <p ref={ref} {...stylex.props(styles.description)} {...props}>
    {props.children}
  </p>
));
ProductCardDescription.displayName = "ProductCardDescription";

export interface ProductCardKeyIngredientsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  keyIngredients: string[];
}
export const ProductCardKeyIngredients = React.forwardRef<
  HTMLDivElement,
  ProductCardKeyIngredientsProps
>(({ keyIngredients, ...props }, ref) => (
  <div ref={ref} {...stylex.props(styles.keyIngredients)} {...props}>
    <span>
      <b>Key Ingredients: </b>
      {keyIngredients?.join(", ")}
    </span>
  </div>
));
ProductCardKeyIngredients.displayName = "ProductCardKeyIngredients";

export interface ProductCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export const ProductCardFooter = React.forwardRef<
  HTMLDivElement,
  ProductCardFooterProps
>(({ ...props }, ref) => (
  <div ref={ref} {...stylex.props(styles.footer)} {...props}>
    {props.children}
  </div>
));
ProductCardFooter.displayName = "ProductCardFooter";
