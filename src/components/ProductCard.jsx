import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cartState } from "../Store/CartState";
import { useSetRecoilState } from "recoil";
import totalamount from "../helper";
function ProductCard({ id, posterUrl, title, author, price }) {
  const navigate = useNavigate();
  const setCartItems = useSetRecoilState(cartState);
  console.log(id, posterUrl, title, author, price);
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
    <div class="card" style={{ width: "15rem", cursor: "pointer" }}>
      <img
        src={posterUrl}
        alt="image"
        onClick={() => {
          navigate(`/book/${id}`);
        }}
      />
      <div class="card-body1">
        <h6
          class="text-base font-semibold text-center mb-2"
          onClick={() => {
            navigate(`/book/${id}`);
          }}
        >
          {title}
        </h6>
        <p class="author">{author}</p>
        <p class="mt-1 mb-1">₹ {price}</p>

        <button class="product-btn" onClick={addToCart}>
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
