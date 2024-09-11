import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: { cart: [], totalPrice: 0 },
});
