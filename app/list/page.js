"use client";
import Image from "next/image";
import imageFile from "/public/food0.png";
import imageFile2 from "/public/food1.png";
import imageFile3 from "/public/food2.png";
import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "pasta", "Coconut"];
  const [stock, setStock] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((item, index) => {
        return (
          <div className="food" key={index}>
            <Image
              src={
                index === 0 ? imageFile : index === 1 ? imageFile2 : imageFile3
              }
              className="foodImg"
            />
            <h4>{products[index]} $80</h4>
            <span>{stock[index]}</span>
            <button
              onClick={() => {
                let copy = [...stock];
                copy[index] += 1;
                setStock(copy);
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                if (stock[index] > 0) {
                  let copy = [...stock];
                  copy[index] -= 1;
                  setStock(copy);
                }
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
