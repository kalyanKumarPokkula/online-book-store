function Helper() {
  const orderDetails = {
    orderNumber: "123456",
    totalAmount: 1500,
    paymentMethod: "Credit Card",
    deliveryDate: "2024-07-15",
    items: [
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
    ],
  };
  return (
    <div>
      <h2 class="text-3xl font-bold text-center mt-6 mb-10">
        Order Confirmation
      </h2>
      <div class="container mx-auto flex w-10/12 h-full mt-6 mb-10 gap-4">
        <div
          style={{
            width: "100%",
            border: "0.5px solid #eaeaea",
            borderRadius: "5px",
            boxShadow: "0 0 3px #eaeaea",
            padding: "37px 41px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
          className="basis-8/12"
        >
          <h3 class="text-2xl font-medium text-center mt-2">
            Thank you for your purchase!
          </h3>
          <p class="text-xl text-center mt-1">
            Your order has been placed successfully.
          </p>
          <div class="order-details mt-1">
            <h4 class="text-xl font-medium">Order Details</h4>
            <div class="flex justify-between mt-3">
              <span class="text-lg">Order Number:</span>
              <span class="text-lg font-bold">{orderDetails.orderNumber}</span>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-lg">Total Amount:</span>
              <span class="text-lg font-bold">
                ₹ {orderDetails.totalAmount}
              </span>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-lg">Payment Method:</span>
              <span class="text-lg font-bold">
                {orderDetails.paymentMethod}
              </span>
            </div>
            <div class="flex justify-between mt-3">
              <span class="text-lg">Estimated Delivery:</span>
              <span class="text-lg font-bold">{orderDetails.deliveryDate}</span>
            </div>
          </div>
        </div>
        <div
          class="basis-4/12"
          style={{
            width: "100%",
            border: "0.5px solid #eaeaea",
            borderRadius: "5px",
            boxShadow: "0 0 3px #eaeaea",
            padding: "37px 41px",
          }}
        >
          <h2 class="text-2xl font-medium">Order Summary</h2>
          <div class="mt-8">
            {orderDetails.items.map((book) => (
              <div class="pr-6 pl-6 flex mt-3 justify-between items-center">
                <div class="flex gap-8 items-center">
                  {" "}
                  <img
                    style={{ width: "40px", height: "70px", objectFit: "fill" }}
                    src={book.posterurl}
                    alt="image"
                  />
                  <h2>{book.title}</h2>
                </div>
                <p>₹ {book.price}</p>
              </div>
            ))}
          </div>
          <div class="flex justify-between mt-10">
            <h2 class="text-xl">Total Amount:</h2>
            <p class="text-2xl font-bold">₹ {orderDetails.totalAmount}</p>
          </div>
          <p class="text-base">(inclusive of taxes)</p>
        </div>
      </div>
    </div>
  );
}

export default Helper;
