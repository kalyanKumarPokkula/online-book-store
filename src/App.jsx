import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import NewAndNoteworthy from "./NewAndNoteworthy";
import Books from "./Books";
import Top50 from "./Top50";
import Cart from "./Cart";
import SingleProductLayout from "./SingleProductLayout";
import Information from "./Information";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/newandnoteworthy" element={<NewAndNoteworthy />} />
        <Route path="/books" element={<Books />} />
        <Route path="/top50" element={<Top50 />} />
      </Routes>
    </>
  );
}

export default App;
