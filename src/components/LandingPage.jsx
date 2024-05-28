import Card from "./Card";
import { useEffect, useState } from "react";
import summer from "../assets/summer.jpg";
import giftcard from "../assets/giftcard.jpg";
import halfprice from "../assets/half-price.jpg";
import axios from "axios";

function LandingPage() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);
  useEffect(() => {
    async function init() {
      try {
        let newbooks = await axios.get("http://localhost:3000/books/year/2024");
        let response = await axios.get("http://localhost:3000/books");
        console.log(response.data);
        setBooks([...response.data.slice(0, 10)]);
        setNewBooks([...newbooks.data.slice(0, 5)]);
      } catch (error) {
        console.log(error);
      }
    }

    init();
  }, []);
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
      <Card
        title={"New & Noteworthy"}
        books={newBooks}
        url="newandnoteworthy"
      />
      <Card title={"Books"} books={books.slice(5, 10)} url="books" />
    </div>
  );
}

export default LandingPage;
