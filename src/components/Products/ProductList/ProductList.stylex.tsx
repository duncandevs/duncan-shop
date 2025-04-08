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
import { AddToCartButton, SubscribeButton } from '../../Products/ProductButton';
import { useState } from "react";
import { ProductCardData } from "../types";

type ProductListProps = {
    products: ProductCardData[]
};
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div {...stylex.props(styles.container)}>
            {products?.map((product)=>{
                const [hovered, setIsHovered] = useState(false);
                const { theme, color, backgroundImage, productImage, name, description, keyIngredients } = product;

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
                        <ProductCardKeyIngredients keywords={keyIngredients} />
                    </ProductCardBody>
                    <ProductCardFooter>
                        <AddToCartButton />
                        <SubscribeButton theme={theme} />
                    </ProductCardFooter>
                </ProductCard>}
            )}
        </div>
    )
};
