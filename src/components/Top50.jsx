import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
function Top50() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function init() {
      try {
        let response = await axios.get("http://localhost:3000/books");
        console.log(response.data);
        setBooks([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    init();
  }, []);
  return (
    <div class="container mx-auto w-9/12 mt-6">
      <h2 className="text-2xl font-bold text-center mb-10">TOP 50</h2>
      <div class="flex flex-wrap justify-between mt-2 gap-y-10 gap-x-4">
        {books.map(book => (
          <ProductCard
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

export default Top50;
