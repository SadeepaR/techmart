import React from "react";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const { id: productId } = useParams();

  return <div>ProductScreen {productId}</div>;
};

export default ProductScreen;
