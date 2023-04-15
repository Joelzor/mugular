import { ProductI } from "../interfaces/Product";

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(number / 100);
};

export const getUniqueValues = (data: ProductI[], type: string) => {
  const values = data.map((product) => product[type as keyof ProductI]);

  return ["all", ...new Set(values)];
};
