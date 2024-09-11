import "./OrderItem.css";
import order from "../assets/order.png";

function OrderItem({ posterUrl, id, title }) {
  return (
    <div class="card" style={{ width: "14rem", cursor: "pointer" }}>
      <img
        src={order}
        alt="image"
        onClick={() => {
          navigator(`/book/${id}`);
        }}
      />
      <div class="card-body1">
        <p class="text-xl mt-1 mb-1">
          Date: <scan class="text-base">12/6/2024</scan>
        </p>

        <a href="#" class="product-btn">
          DETAILS
        </a>
      </div>
    </div>
  );
}

export default OrderItem;
