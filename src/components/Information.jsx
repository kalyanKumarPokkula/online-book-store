import "./information.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { cartState } from "../Store/CartState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

function Information() {
  const [userId, setUserId] = useState(2);
  const [addressId, setAddressId] = useState();
  const [book, setBook] = useState(null);
  const CartItems = useRecoilValue(cartState);
  const { id } = useParams();
  const navigator = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (Number(id) > 0) {
      // console.log(typeof id);
      // console.log("inside the cart", id);
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

    // if (userId != null) {
    //   async function getAddress() {
    //     try {
    //       const response = await axios.get(
    //         `${
    //           import.meta.env.VITE_APIGATEWAY_HOST
    //         }/orderservice/api/address/user/${userId}`
    //       );
    //       console.log(response.data);
    //       setAddressLine1(response.data.addressLine1);
    //       setCity(response.data.city);
    //       setCountry(response.data.country);
    //       setState(response.data.state);
    //       setEmail(response.data.email);
    //       setFirstName(response.data.firstName);
    //       setLastName(response.data.lastName);
    //       setPhoneNumber(response.data.phoneNumber);
    //       setPostalCode(response.data.postalCode);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   getAddress();
    // }
  }, []);

  function paymentHandler(e) {
    e.preventDefault();
    // async function createAddress() {
    //   try {
    //     const payload = {
    //       firstName,
    //       lastName,
    //       country,
    //       city,
    //       state,
    //       postalCode,
    //       addressLine1,
    //       addressLine2,
    //       email,
    //       phoneNumber,
    //     };
    //     console.log(payload);
    //     let response = await axios.post(
    //       `${import.meta.env.VITE_APIGATEWAY_HOST}/orderservice/api/address`,

    //       payload,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     console.log(response.data);
    //     setAddressId(response.data.id);
    //   } catch (error) {
    //     console.log(error);
    //   }

    //   payment();
    // }
    // createAddress();
    async function createCheckout() {
      try {
        let body;
        if (id === 0) {
          body = {
            name: book.Book.title,
            price: book.Book.price,
            quantity: 1,
            image: book.Book.posterurl,
            addressId: addressId,
          };
        } else {
          body = {
            bookId: id,
            name: book.title,
            price: book.price,
            quantity: 1,
            image: book.posterurl,
            firstName,
            lastName,
            country,
            city,
            state,
            postalCode,
            addressLine1,
            addressLine2,
            email,
            phoneNumber,
          };
        }
        console.log(body);
        let response = await axios.post(
          `${
            import.meta.env.VITE_APIGATEWAY_HOST
          }/paymentservice/api/create_checkout-session`,
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
          <div class="col-12">
            <label for="inputCountry" class="form-label">
              Country
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCountry"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            ></input>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First
            </label>
            {/* <input type="email" class="form-control" id="inputEmail4"> */}
            <input
              type="text"
              class="form-control"
              id="inputemail4"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last
            </label>
            <input
              type="text"
              class="form-control"
              id="inputemail4"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
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
              onChange={(e) => setAddressLine1(e.target.value)}
              value={addressLine1}
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
              onChange={(e) => setAddressLine2(e.target.value)}
              value={addressLine2}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select
              id="inputState"
              class="form-select"
              onChange={(e) => setState(e.target.value)}
              value={state}
            >
              <option selected>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra and Nagar Haveli and Daman and Diu</option>
              <option>Delhi</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
            </select>
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="inputZip"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
            />
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
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
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
              Continue to Payment
            </button>
          </div>
        </form>
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

export default Information;
