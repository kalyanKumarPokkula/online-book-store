import "./information.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { cartState } from "../Store/CartState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

function Information() {
  const [book, setBook] = useState(null);
  const CartItems = useRecoilValue(cartState);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (Number(id) > 0) {
      console.log(typeof id);
      console.log("inside the cart", id);
      async function getBook() {
        try {
          const response = await axios.get(`http://localhost:3000/book/${id}`);
          setBook(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      getBook();
    }
  }, []);

  function paymentHandler(e) {
    e.preventDefault();
    async function createCheckout() {
      try {
        let body;
        if (id === 0) {
          body = {
            name: book.Book.title,
            price: book.Book.price,
            quantity: 1,
            image: book.Book.posterurl,
          };
        } else {
          body = {
            name: book.title,
            price: book.price,
            quantity: 1,
            image: book.posterurl,
          };
        }
        let response = await axios.post(
          "http://localhost:4242/create_checkout-session",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        window.location.href = response.data.url;
      } catch (error) {
        console.log(error);
      }
    }
    console.log("invalid response");
    createCheckout();
  }

  return (
    <div class="w-4/5 h-4/5 container mx-auto flex flex-row">
      <div class="basis-7/12 p-14">
        <h1 class="text-2xl font-bold mb-8">Information</h1>
        <form class="row g-3">
          <div class="col-12">
            <h2 class="text-lg font-bold mb-3">Contact</h2>
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Email me with news and offers
              </label>
            </div>
          </div>
          <h2 style={{ marginTop: "35px" }} class="text-lg font-bold">
            Shipping address
          </h2>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First
            </label>
            {/* <input type="email" class="form-control" id="inputEmail4"> */}
            <input type="text" class="form-control" id="inputemail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last
            </label>
            <input type="text" class="form-control" id="inputemail4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Phone Number"
            ></input>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Save this information for next time
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="shipping-btn" onClick={paymentHandler}>
              Continue to Shipping
            </button>
          </div>
        </form>
      </div>
      <div style={{ backgroundColor: "#F4F4F4" }} className="basis-5/12">
        <div class="p-12 ">
          {Number(id) === 0 &&
            CartItems &&
            CartItems.cart.map(book => (
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

export default Information;
