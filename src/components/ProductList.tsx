import { useAppSelector } from "../hooks";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts: products, grid } = useAppSelector(
    (store) => store.filters
  );

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search</h5>;
  }

  if (!grid) {
    return <ListView products={products} />;
  }

  // @ts-ignore
  return <GridView products={products} />;
};

export default ProductList;
