import summer from "./assets/summer.jpg";
import giftcard from "./assets/giftcard.jpg";
import halfprice from "./assets/half-price.jpg";
import Card from "./Card";

function LandingPage() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={summer} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={giftcard} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={halfprice} class="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Card />
      <Card />
    </div>
  );
}

export default LandingPage;
