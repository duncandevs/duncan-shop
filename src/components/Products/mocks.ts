import { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "prod_1",
    name: "Shower Foam",
    description: "Motivation and focus",
    price: 50,
    backgroundImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873129/duncan-shop/shower-bg_kwqecn.jpg",
    productImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873129/duncan-shop/shower-product_unjdxf.webp",
    keyIngredients: ["Warm Sugar", "Vanilla", "Fresh Pancakes"],
    subscriptionDiscount: 0.15,
  },
  {
    id: "prod_2",
    name: "Sea Foam",
    description: "Connection and joy",
    price: 50,
    backgroundImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873132/duncan-shop/foam-bg_ydb5f1.jpg",
    productImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873129/duncan-shop/foam-product_repwhf.webp",
    keyIngredients: ["Sea Salt, Beach Water, Fresh Coconut, Sprinkles"],
    subscriptionDiscount: 0.15,
  },
  {
    id: "prod_3",
    name: "Sweet Fluffy",
    description: "Deep, restorative sleep",
    price: 50,
    backgroundImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873130/duncan-shop/fluffy-bg_ww429t.jpg",
    productImage:
      "https://res.cloudinary.com/drip-shutter-images/image/upload/v1743873129/duncan-shop/fluffy-product_jhthss.webp",
    keyIngredients: ["Fresh Berries, Rainbow Sprinkles, Fairy Floss"],
    subscriptionDiscount: 0.15,
  },
];

// Seperates concerns btw Product and UI data which may come from contenful or other source
export const mockProductCardData = [
  {
    product_id: "prod_1",
    theme: "yellow",
  },
  {
    product_id: "prod_2",
    theme: "turquoise",
  },
  {
    product_id: "prod_3",
    theme: "rose",
  },
];
