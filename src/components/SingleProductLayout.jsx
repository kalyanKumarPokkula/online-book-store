import "./SingleProductLayout.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import totalamount from "../helper";
import { cartState } from "../Store/CartState";
function SingleProductLayout() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [book, setBook] = useState(null);
  const setCartItems = useSetRecoilState(cartState);

  useEffect(() => {
    async function getBook() {
      try {
        let response = await axios.get(`http://localhost:3000/book/${id}`);
        console.log(response.data);
        setBook(response.data);
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
      let response = await axios.post("http://localhost:3000/cartitem", {
        ...body,
      });
      let responses = await axios.get(`http://localhost:3000/cartitems/${1}`);
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
        </div>
      )}
    </>
  );
}

export default SingleProductLayout;
