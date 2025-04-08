import "@/styles/App.css";

import { ProductList } from "@/components/Products/ProductList";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Tabs } from "radix-ui";
import { useProductData } from "@/components/Products/provider";

function App() {
  const { products } = useProductData();

  return (
    <div>
      <header></header>
      <div className="card">
        <Tabs.Root defaultValue="product-cards">
          <div>
            <Tabs.List
              style={{
                position: "absolute",
                display: "flex",
                top: 10,
                left: 10,
                gap: 8,
              }}
            >
              <Tabs.Trigger value="product-cards" className="menu-button">
                Product Cards
              </Tabs.Trigger>
              <Tabs.Trigger value="animated-button" className="menu-button">
                Animated Button
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <div>
            <Tabs.Content value="product-cards">
              <ProductList products={products} />
            </Tabs.Content>

            <Tabs.Content value="animated-button">
              <AnimatedButton title="add to cart" />
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default App;
