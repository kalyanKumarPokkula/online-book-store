import { atom } from "recoil";

export const cartState = atom({
  key: "authState",
  default: { cart: [], totalPrice: 0 },
});
