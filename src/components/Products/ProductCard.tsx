import * as React from "react";
import * as stylex from "@stylexjs/stylex";

const growAnimation = stylex.keyframes({
  "0%": { width: "0%" },
  "100%": { width: "100%" },
});

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 378,
    height: 832,
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    ":hover": {
      boxShadow: "4px 4px 16px rgba(216, 216, 216, 0.74)",
      transitionProperty: "transform",
      transitionDuration: "0.1s",
      transitionTimingFunction: "ease-in-out",
      transform: "scale(1.02)",
    },
  },
  highlightContainer: {
    position: "relative",
    top: 0,
    height: "4px",
    width: "100%",
    overflow: "hidden",
    animationName: growAnimation,
    animationDuration: "0.25s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "forwards", // Keeps the final state
    backgroundColor: "black", // fallback if color isn't passed
  },
  header: {
    position: "relative",
    width: "100%",
    height: 293,
    backgroundImage: `url('https://res.cloudinary.com/drip-shutter-images/image/upload/v1743878187/duncan-shop/allison-saeng-ecwIyHRmThI-unsplash_z86qdd.jpg')`, // Default Product Image
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: 86,
  },
  productImg: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "auto",
    zIndex: 1,
  },
  body: {
    textAlign: "start",
    padding: 24,
    paddingTop: 40,
    flexGrow: 1, // Ensures body covers the remaining space
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
  },
  description: {
    fontSize: 20,
    fontWeight: 300,
  },
  keyIngredients: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    height: "fit",
    gap: 24,
    paddingBottom: 32,
  },
});

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
  onHovered?: (hovered: boolean) => void;
}
export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ onHovered, ...props }, ref) => {
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
