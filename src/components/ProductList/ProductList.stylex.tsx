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
import { mockProducts } from '../../mocks/products';
import { mockProductCards } from '../../mocks/products';
import { ProductButtonTheme } from "../ProductButton/ProductButton.stylex";
import { useState } from "react";
import { productThemeColorMap } from "../../styles/tokens";


export const ProductList = () => {
    const productThemeMap = Object.fromEntries(
        mockProductCards.map(({ product_id, theme }) => [product_id, theme])
    );

    return (
        <div {...stylex.props(styles.container)}>
            {mockProducts?.map((product)=>{
                const theme = productThemeMap[product.id] as ProductButtonTheme;
                const color = productThemeColorMap[theme];
                const [hovered, setIsHovered] = useState(false); // TODO: replace this pattern with css selectors for a cleaner design

                return <ProductCard color={color} onHovered={setIsHovered}>
                            <ProductCardHeader           
                                backgroundImg={product.backgroundImage}
                                productImg={product.productImage} 
                                isHovered={hovered}
                                color={color}
                                />
                            <ProductCardBody>
                                <ProductCardTitle>{product.name}</ProductCardTitle>
                                <ProductCardDescription>{product.description + '*'}</ProductCardDescription>
                                <ProductCardKeyIngredients keywords={product.keyIngredients} />
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
