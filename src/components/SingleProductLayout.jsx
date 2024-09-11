import "./SingleProductLayout.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import totalamount from "../helper";
import { cartState } from "../Store/CartState";
import Card from "./Card";
import Youmayalsolike from "./Youmayalsolike";

function SingleProductLayout() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [book, setBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [review, setReview] = useState(true);
  const setCartItems = useSetRecoilState(cartState);

  useEffect(() => {
    async function getBook() {
      try {
        let response = await axios.get(
          `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/book/${id}`
        );
        let response1 = await axios.get(
          `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/books`
        );
        console.log(response.data);
        setBook(response.data);
        setBooks([...response1.data.slice(0, 5)]);
      } catch (error) {
        console.log(error);
      }
    }

    getBook();
  }, []);

  async function addToCart() {
    try {
      let body = {
        cart_id: 1,
        book_id: id,
        quantity: 1,
      };
      let response = await axios.post(
        `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/cartitem`,
        {
          ...body,
        }
      );
      let responses = await axios.get(
        `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/cartitems/${1}`
      );
      console.log(responses.data);
      setCartItems({
        cart: responses.data,
        totalPrice: totalamount(responses.data),
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {book && (
        <div class="w-4/5 h-4/5 container mx-auto mt-6 pr-16 pl-24  flex flex-row gap-24 ">
          <div class="basis-1/5">
            <img class="min-w-96" src={book.posterurl} alt="image" />
          </div>
          <div className="basis-3/5 mt-10 ">
            <h2 className="text-3xl font-semibold pb-2">{book.title}</h2>
            <p style={{ color: "#3C4F95" }} className="auther">
              {book.Author.name}
            </p>
            <h4 className="price text-3xl font-bold">₹ {book.price}</h4>
            <p style={{ fontSize: "13px" }}>(inclusive of all taxes)</p>
            <select
              class="w-16 mt-4 form-select"
              aria-label=".form-select-lg example"
            >
              <option selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <div class="mt-6">
              <button class="btn1 mr-8" onClick={addToCart}>
                ADD TO BAG
              </button>
              <button
                class="btn2"
                onClick={() => {
                  // addToCart();
                  navigator(`/checkout/cn/${id}/information`);
                }}
              >
                BUY IT NOW
              </button>
            </div>

            <div className="mt-8">
              <h2 class="text-2xl font-medium">Description</h2>
              <div className="pt-3">
                <p style={{ display: "inline" }}>
                  {book.description.substring(0, 200)}
                </p>
                <a style={{ textDecoration: "underline" }} href="#">
                  READMORE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {books && (
        <div>
          <Youmayalsolike books={books} url="books" />
        </div>
      )}
      {book && (
        <div class="w-4/5 h-4/5 container mx-auto mt-10 pr-16 pl-24 ">
          <div>
            <h2 class="text-2xl font-semibold">Product Description</h2>
            <p class="mt-3 text-base leading-7">{book.description}</p>
          </div>

          <p style={{ border: "2px solid #D6D9DC" }} class="mt-6"></p>

          <div class="mt-4 mb-6">
            <h2 class="text-2xl font-semibold">Author</h2>
            <p class="mt-3 text-base leading-7">{book.Author.bio}</p>
          </div>

          <p style={{ border: "2px solid #D6D9DC" }} class="mt-6"></p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div class="mt-2 mb-6">
              <h2 class="text-2xl font-semibold">Customer Reviews</h2>
              <p class="mt-3 text-base leading-7">
                5.00 out of 5 Based on 1 review
              </p>
            </div>
            <div>
              <button
                class="btn2 mr-8"
                onClick={() => {
                  if (review) {
                    setReview(false);
                  }
                  if (!review) {
                    setReview(true);
                  }
                }}
              >
                WRITE A REVIEW
              </button>
            </div>
          </div>
          {!review && (
            <div class="w-2/5 h-2/5 container mx-auto">
              <h2 class="text-2xl text-center mt-4 mb-4 font-semibold">
                Write a review
              </h2>
              <div class="mb-3">
                <label for="rating" class="form-label">
                  Rating
                </label>
                <select id="rating" name="rating" class="form-control">
                  <option value="1">1/5</option>
                  <option value="2">2/5</option>
                  <option value="3">3/5</option>
                  <option value="4">4/5</option>
                  <option value="5">5/5</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="review title" class="form-label">
                  Review Title
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Give your review a title"
                />
              </div>
              <div class="mb-3">
                <label for="review" class="form-label">
                  Review
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your comments here"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="review title" class="form-label">
                  Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="flex justify-between">
                <div class="text-center">
                  <button class="btn2 mr-8">Submit Review</button>
                </div>
                <div class="text-center">
                  <button
                    class="btn2 mr-8"
                    onClick={() => {
                      setReview(true);
                    }}
                  >
                    Cancel Review
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SingleProductLayout;
