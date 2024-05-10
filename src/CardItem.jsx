import theschool from "./assets/theschoolforgood.jpg";
import "./CardItem.css";
function CardItem() {
  return (
    <div class="card" style={{ width: "14rem" }}>
      {/* <img src={summer} class="card-img-top" alt="..."> */}
      <img src={theschool} alt="image" />
      <div class="card-body1">
        <h6 class="card-title">The School For Good...</h6>
        <p class="author">Jessamine Chan</p>
        <p class="mt-1 mb-1">₹ 450</p>

        <a href="#" class="product-btn">
          ADD TO BAG
        </a>
      </div>
    </div>
  );
}

export default CardItem;
