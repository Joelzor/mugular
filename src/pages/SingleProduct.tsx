import { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../features/products/singleProductSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleProduct } = useAppSelector((store) => store.singleProduct);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [id]);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
