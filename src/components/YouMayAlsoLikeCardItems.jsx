import { useNavigate } from "react-router-dom";
import "./CardItem.css";
import { cartState } from "../Store/CartState";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import totalamount from "../helper";
function YouMayAlsoLikeCardItem({ posterUrl, id, author, price, title }) {
  const navigate = new useNavigate();

  const setCartItems = useSetRecoilState(cartState);

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
    <div class="card" style={{ width: "14rem", cursor: "pointer" }}>
      <img
        src={posterUrl}
        alt="image"
        onClick={() => {
          window.location.href = `/book/${id}`;
          window.location.reload();
        }}
      />
      <div class="card-body1">
        <h6
          class="text-sg font-medium text-center mb-2"
          onClick={() => {
            window.location.href = `/book/${id}`;
            window.location.reload();
          }}
        >
          {title}
        </h6>
        <p class="author">{author}</p>
        <p class="mt-1 mb-1">₹ {price}</p>

        <a href="#" class="product-btn" onClick={addToCart}>
          ADD TO BAG
        </a>
      </div>
    </div>
  );
}

export default YouMayAlsoLikeCardItem;
