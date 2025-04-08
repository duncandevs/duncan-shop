import styles from "./styles.stylex";
import * as stylex from '@stylexjs/stylex';
import { 
    ProductCard,
    ProductCardBody, 
    ProductCardFooter, 
    ProductCardHeader, 
    ProductCardDescription, 
    ProductCardTitle,
    ProductCardKeyIngredients, 
} from '../ProductCard';
import { AddToCartButton, SubscribeButton } from '../ProductButton';
import { useState } from "react";
import { ProductCardData } from "../types";

type ProductListProps = {
    products: ProductCardData[]
};
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div {...stylex.props(styles.container)}>
            {products?.map((product)=>{
                const { 
                    theme, 
                    color, 
                    backgroundImage, 
                    productImage, 
                    name, 
                    description, 
                    keyIngredients, 
                    price,
                    subscriptionDiscount
                } = product;
                const [hovered, setIsHovered] = useState(false);

                return <ProductCard color={color} onHovered={setIsHovered}>
                    <ProductCardHeader           
                        backgroundImg={backgroundImage}
                        productImg={productImage} 
                        isHovered={hovered}
                        color={color}
                    />
                    <ProductCardBody>
                        <ProductCardTitle>{name}</ProductCardTitle>
                        <ProductCardDescription>{description + '*'}</ProductCardDescription>
                        <ProductCardKeyIngredients keyIngredients={keyIngredients} />
                    </ProductCardBody>
                    <ProductCardFooter>
                        <AddToCartButton price={price}/>
                        <SubscribeButton price={price} subscriptionDiscount={subscriptionDiscount} theme={theme} />
                    </ProductCardFooter>
                </ProductCard>}
            )}
        </div>
    )
};
