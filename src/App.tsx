import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
} from "./pages";
import { Navbar, Footer, Sidebar } from "./components";
import { getProducts } from "./features/products/productsSlice";
import { transferProducts } from "./features/filters/filterSlice";
import { calculateTotals } from "./features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.products);
  const { cart } = useAppSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(transferProducts());
  }, [products]);

  useEffect(() => {
    dispatch(calculateTotals());
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
