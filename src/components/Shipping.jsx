import { useParams } from "react-router-dom";
import { cartState } from "../Store/CartState";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import axios from "axios";

function Shipping() {
  const [book, setBook] = useState(null);
  const CartItems = useRecoilValue(cartState);
  const { id } = useParams();

  useEffect(() => {
    if (Number(id) > 0) {
      console.log(typeof id);
      console.log("inside the Shipping", id);
      async function getBook() {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/book/${id}`
          );
          setBook(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getBook();
    }
  }, []);
  return (
    <div class="w-4/5 h-4/5 container mx-auto flex flex-row">
      <div class="basis-7/12 p-14">
        <h1 class="text-2xl font-bold mb-8">Shipping</h1>
      </div>
      <div style={{ backgroundColor: "#F4F4F4" }} className="basis-5/12">
        <div class="p-12 ">
          {Number(id) === 0 &&
            CartItems &&
            CartItems.cart.map((book) => (
              <div class="pr-6 pl-6 flex mt-3 justify-between items-center">
                <div class="flex gap-8 items-center">
                  {" "}
                  <img
                    style={{ width: "40px", height: "70px", objectFit: "fill" }}
                    src={book.Book.posterurl}
                    alt="image"
                  />
                  <h2>{book.Book.title}</h2>
                </div>
                <p>₹ {book.Book.price}</p>
              </div>
            ))}
          {Number(id) > 0 && book && (
            <div class="pr-6 pl-6 flex mt-3 justify-between items-center">
              <div class="flex gap-8 items-center">
                {" "}
                <img
                  style={{ width: "40px", height: "70px", objectFit: "fill" }}
                  src={book.posterurl}
                  alt="image"
                />
                <h2>{book.title}</h2>
              </div>
              <p>₹ {book.price}</p>
            </div>
          )}
          <div class="mt-12 flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <h2>Subtotal</h2>
              {Number(id) === 0 && CartItems.cart.length > 0 && (
                <p class="font-bold">₹ {CartItems.totalPrice}</p>
              )}
              {Number(id) > 0 && book && (
                <p class="font-bold">₹ {book.price}</p>
              )}
            </div>
            <div class="flex justify-between items-center">
              <h2>Shipping</h2>
              <p class="font-bold">FREE</p>
            </div>
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-bold">Total</h2>
              {Number(id) === 0 && CartItems.cart.length > 0 && (
                <p class="text-lg font-bold">₹ {CartItems.totalPrice}</p>
              )}
              {Number(id) > 0 && book && (
                <p class="text-lg font-bold">₹ {book.price}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
