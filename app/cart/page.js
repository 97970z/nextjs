import Data from "./data.js";

export default function Cart() {
  let products = ["Tomatoes", "pasta"];
  return (
    <div>
      <h4 className="title">장바구니</h4>
      <Data />
      <CartItem products={products[0]} />
      <CartItem products={products[1]} />
      <Banner name="롯데" />
      <RedButton color="blue" />
    </div>
  );
}

const RedButton = ({ color }) => {
  return <button style={{ background: color }}>버튼임</button>;
};

const Banner = ({ name }) => {
  return <h5>{name}할인 중</h5>;
};

const CartItem = ({ products }) => {
  return (
    <div className="cart-item">
      <p>{products}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
};
