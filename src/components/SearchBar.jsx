import { useState } from "react";
import CardItem from "./CardItem";
import axios from "axios";

function SearchBar() {
  const [books, setBooks] = useState([]);
  const [word, setWord] = useState("");

  function searchHandler(e) {
    console.log(e.target.value);
    setWord(e.target.value);
    async function init() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APIGATEWAY_HOST}/bookservice/api/search`,
          {
            params: {
              q: e.target.value,
            },
          }
        );
        setBooks([...response.data]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (e.target.value != "") {
      init();
    }
  }
  return (
    <div class="container mx-auto w-9/12 mt-6">
      <h2 class="text-3xl font-bold text-center mb-10">Search for Books</h2>
      <div class="flex gap-2 flex-wrap justify-center mb-10">
        <input
          type="search"
          id="search-input"
          class="w-6/12 p-3 pl-10 text-sm text-gray-700"
          style={{ border: "2px solid black", borderRadius: "5px" }}
          placeholder="Search by title"
          onChange={searchHandler}
        />
        <button
          class="w-2/12 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          id="search-button"
        >
          <h2 style={{ color: "black", fontSize: "20px" }}>search</h2>
        </button>
      </div>
      {books.length > 0 && (
        <div class="flex flex-wrap justify-between mt-2 gap-y-10 gap-x-4">
          {books.map((book) => (
            <CardItem
              key={book.book_id}
              id={book.book_id}
              title={book.title}
              author={book.Author.name}
              price={book.price}
              posterUrl={book.posterurl}
            />
          ))}
        </div>
      )}
      {books.length === 0 && (
        <div class="flex flex-wrap justify-center mt-2 mb-2 gap-y-10 gap-x-4">
          <p class="text-2xl font-bold p-16">No search result matched</p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
