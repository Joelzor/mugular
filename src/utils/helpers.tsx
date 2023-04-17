import { ProductListI } from "../interfaces/Product";

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(number / 100);
};

export const getUniqueValues = (data: ProductListI[], type: string) => {
  const values = data.map((product) => product[type as keyof ProductListI]);

  return ["all", ...new Set(values)] as string[];
};
