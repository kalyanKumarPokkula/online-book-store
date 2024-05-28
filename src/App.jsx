import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NewAndNoteworthy from "./components/NewAndNoteworthy";
import Books from "./components/Books";
import Top50 from "./components/Top50";
import Cart from "./components/Cart";
import SingleProductLayout from "./components/SingleProductLayout";
import Information from "./components/Information";
import { cartState } from "./Store/CartState";
import { useSetRecoilState } from "recoil";
import totalamount from "./helper";
import axios from "axios";

function App() {
  const setCartItems = useSetRecoilState(cartState);

  useEffect(() => {
    async function init() {
      try {
        console.log("inside the cart");
        let response = await axios.get(`http://localhost:3000/cartitems/${1}`);
        console.log(response.data);
        setCartItems({
          cart: response.data,
          totalPrice: totalamount(response.data),
        });
        // setCartItems({ totalPrice: totalamount(response.data) });
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/newandnoteworthy" element={<NewAndNoteworthy />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<SingleProductLayout />} />
        <Route path="/top50" element={<Top50 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/cn/:id/information" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
