import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Carousel } from "antd";

import "./index.css";
import { API_URL } from "../config/constants.js";

dayjs.extend(relativeTime);

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생", error);
      });

    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banner, index) => {
          console.log("확인: ", banner);
          return (
            <Link to={banner.href}>
              <div id="banner">
                <img src={`${API_URL}/${banner.imageUrl}`} alt="" />
              </div>
            </Link>
          );
        })}
      </Carousel>
      <h1 id="product-headline">판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link to={`/products/${product.id}`} className="product-link">
                <div>
                  <img
                    src={`${API_URL}/${product.imageUrl}`}
                    className="product-img"
                    alt=""
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        src="images/icons/avatar.png"
                        className="product-avatar"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span className="product-date">
                      {dayjs(product.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
