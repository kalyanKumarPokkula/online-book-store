import CardItem from "./CardItem";
import "./Card.css";
import dayformons from "./assets/dayformons.webp";
import mylifeinfull from "./assets/mylifeinfull.webp";
import theboythemole from "./assets/theboythemole.webp";
import thelightwecarry from "./assets/thelightwecarry.webp";
import themotherineverknew from "./assets/themotherineverknew.webp";

function Card() {
  return (
    <div className="products-section">
      <h2 className="section-heading">New & Noteworthy</h2>
      <a class="more-link" href="/collections/summer-reads">
        View all
        {/* <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/files/211607_right_arrow_icon_dbcbcc3a-7990-40bb-ac39-cdd9f7a11823.svg?v=1662534674" alt="" class="rimage__image"> */}
        <img
          src="https://cdn.shopify.com/s/files/1/0648/3066/9017/files/211607_right_arrow_icon_dbcbcc3a-7990-40bb-ac39-cdd9f7a11823.svg?v=1662534674"
          alt="image"
        />
      </a>
      <div className="book-card">
        {/* <CardItem /> */}
        <div class="card" style={{ width: "14rem" }}>
          {/* <img src={summer} class="card-img-top" alt="..."> */}
          <img src={dayformons} alt="image" />
          <div class="card-body1">
            <h6 class="card-title">The School For Good...</h6>
            <p class="author">Jessamine Chan</p>
            <p class="mt-1 mb-1">₹ 450</p>

            <a href="#" class="product-btn">
              ADD TO BAG
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "14rem" }}>
          {/* <img src={summer} class="card-img-top" alt="..."> */}
          <img src={theboythemole} alt="image" />
          <div class="card-body1">
            <h6 class="card-title">The School For Good...</h6>
            <p class="author">Jessamine Chan</p>
            <p class="mt-1 mb-1">₹ 450</p>

            <a href="#" class="product-btn">
              ADD TO BAG
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "14rem" }}>
          {/* <img src={summer} class="card-img-top" alt="..."> */}
          <img src={thelightwecarry} alt="image" />
          <div class="card-body1">
            <h6 class="card-title">The School For Good...</h6>
            <p class="author">Jessamine Chan</p>
            <p class="mt-1 mb-1">₹ 450</p>

            <a href="#" class="product-btn">
              ADD TO BAG
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "14rem" }}>
          {/* <img src={summer} class="card-img-top" alt="..."> */}
          <img src={themotherineverknew} alt="image" />
          <div class="card-body1">
            <h6 class="card-title">The School For Good...</h6>
            <p class="author">Jessamine Chan</p>
            <p class="mt-1 mb-1">₹ 450</p>

            <a href="#" class="product-btn">
              ADD TO BAG
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "14rem" }}>
          {/* <img src={summer} class="card-img-top" alt="..."> */}
          <img src={mylifeinfull} alt="image" />
          <div class="card-body1">
            <h6 class="card-title">The School For Good...</h6>
            <p class="author">Jessamine Chan</p>
            <p class="mt-1 mb-1">₹ 450</p>

            <a href="#" class="product-btn">
              ADD TO BAG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
