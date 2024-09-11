import { useNavigate } from "react-router-dom";
// import CardItem from "./CardItem";
import YouMayAlsoLikeCardItem from "./YouMayAlsoLikeCardItems";

function Youmayalsolike({ books, url }) {
  const navigate = useNavigate();
  return (
    <div className="w-5/5 h-5/5 container mx-auto mt-6 pr-16 pl-24">
      <h2 className="text-2xl font-bold text-left mt-10 mb-2">
        You may also like
      </h2>

      <p
        class="more-link"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/${url}`);
        }}
      >
        View all
        {/* <img src="https://cdn.shopify.com/s/files/1/0648/3066/9017/files/211607_right_arrow_icon_dbcbcc3a-7990-40bb-ac39-cdd9f7a11823.svg?v=1662534674" alt="" class="rimage__image"> */}
        <img
          src="https://cdn.shopify.com/s/files/1/0648/3066/9017/files/211607_right_arrow_icon_dbcbcc3a-7990-40bb-ac39-cdd9f7a11823.svg?v=1662534674"
          alt="image"
        />
      </p>
      <div className="book-card">
        {books.map((book) => (
          <YouMayAlsoLikeCardItem
            key={book.id}
            id={book.book_id}
            title={book.title}
            author={book.Author.name}
            price={book.price}
            posterUrl={book.posterurl}
          />
        ))}
      </div>
    </div>
  );
}

export default Youmayalsolike;
