import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: { username: null, email: null, userId: null },
});
