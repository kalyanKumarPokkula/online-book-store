export default function totalamount(cartItems) {
  let amount = 0;
  if (cartItems.length > 0) {
    for (let item in cartItems) {
      amount += Number(cartItems[item].Book.price);
    }
  }

  return amount;
}
