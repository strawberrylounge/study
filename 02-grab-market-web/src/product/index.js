import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductPage;
