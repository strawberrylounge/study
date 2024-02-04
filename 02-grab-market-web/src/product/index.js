import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>상품 상세페이지 {id} 상품</div>;
};

export default ProductPage;
