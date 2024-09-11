import OrderItem from "./OrderItem";

function Orders() {
  const books = [
    {
      id: 1,
      title: "Book 1",
      price: 500,
      posterurl:
        "https://anime-059.s3.ap-south-1.amazonaws.com/books/gabrielgarciamarquez.webp",
    },
    {
      id: 2,
      title: "Book 2",
      price: 1000,
      posterurl:
        "https://anime-059.s3.ap-south-1.amazonaws.com/books/gabrielgarciamarquez.webp",
    },
  ];

  return (
    <div class="container mx-auto w-9/12 mt-6 mb-10">
      <h2 className="text-3xl font-bold text-center mb-10">Orders</h2>
      <div class="flex flex-wrap justify-start mt-2 gap-y-10 gap-x-10">
        {books.map((book) => (
          <OrderItem />
        ))}
      </div>
    </div>
  );
}

export default Orders;
