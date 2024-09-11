import "./Cart.css";
import Cart_Card from "./Cart_Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../Store/CartState";
import totalamount from "../helper";
import { useNavigate } from "react-router-dom";
import { authState } from "../Store/AuthState";
import Signin from "./Signin";

function Cart() {
  const cartItems = useRecoilValue(cartState);
  const newCartItems = useSetRecoilState(cartState);
  const user = useRecoilValue(authState);
  const navigator = useNavigate();

  // useEffect(() => {
  //   console.log(user.email, user.userId);
  //   if (user.userId == null) {
  //     navigator("/signin");
  //   }
  // });

  function deleteHandler(id) {
    async function deleteCartItem() {
      try {
        let response = await axios.delete(
          `${
            import.meta.env.VITE_APIGATEWAY_HOST
          }/bookservice/api/cartitem/${id}`
        );
        console.log(response.data);
        let responses = await axios.get(
          `${
            import.meta.env.VITE_APIGATEWAY_HOST
          }/bookservice/api/cartitems/${1}`
        );
        console.log(responses.data);
        newCartItems({
          cart: responses.data,
          totalPrice: totalamount(responses.data),
        });

        return;
      } catch (error) {
        console.log(error);
      }
    }

    deleteCartItem();
  }
  console.log(cartItems);
  return (
    <div>
      <h2 class="text-3xl font-bold text-center mt-6 mb-10">My Bag</h2>
      {cartItems.cart.length === 0 && (
        <h3 class="mt-10 mb-10">
          <p class="text-2xl font-medium p-24 m-10 text-center">
            There Are No Items In Your Cart
          </p>
        </h3>
      )}
      {cartItems.cart.length > 0 && (
        <div class="container mx-auto flex w-10/12 h-full mt-6 gap-4">
          <div
            style={{
              width: "100%",
              border: "0.5px solid #eaeaea",
              borderRadius: "5px",
              boxShadow: "0 0 3px #eaeaea",
              padding: "37px 41px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
            className="basis-8/12"
          >
            {cartItems.cart &&
              cartItems.cart.map((item) => (
                <Cart_Card
                  key={item.cart_item_id}
                  id={item.cart_item_id}
                  title={item.Book.title}
                  price={item.Book.price}
                  image={item.Book.posterurl}
                  quantity={item.quantity}
                  onDelete={deleteHandler}
                />
              ))}
          </div>
          <div
            class="basis-4/12 max-h-80"
            style={{
              width: "100%",
              border: "0.5px solid #eaeaea",
              borderRadius: "5px",
              boxShadow: "0 0 3px #eaeaea",
              padding: "37px 41px",
            }}
          >
            <h2 class="text-2xl font-medium">Order Summary</h2>
            <div class="flex justify-between mt-10">
              <h2 class="text-xl">Amount Payable:</h2>
              <p class="text-2xl font-bold">₹ {cartItems.totalPrice}</p>
            </div>
            <p class="text-base">(inclusive of taxes)</p>
            <button
              class="cart-btn"
              onClick={() => {
                navigator(`/checkout/cn/${0}/information`);
              }}
            >
              proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
