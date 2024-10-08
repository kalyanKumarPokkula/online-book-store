import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [email, setemail] = useState();
  const navigator = useNavigate();
  const [password, setpassword] = useState();
  const [username, setusername] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null) {
      navigator("/logout");
    }
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:3002/api/signup", {
        Email: email,
        UserName: username,
        Password: password,
      });
      console.log(response.data);
      if (response.data.success) {
        navigator("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="w-full h-4/5 container mx-auto px-8 py-8 mt-6 flex gap-20 justify-center items-center md:flex-row">
      <form
        style={{ backgroundColor: "#FFA500" }}
        class="basis-4/12 p-12 rounded-lg"
        onSubmit={submitHandler}
      >
        <h1 class="text-3xl mb-8 font-bold text-center">Sign Up</h1>
        <div class="mb-6">
          {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Email
          </label> */}
          <input
            class="shadow appearance-none border rounded w-full pt-3 pb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required
          />
        </div>
        <div class="mb-6">
          {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
            Password
          </label> */}
          <input
            class="shadow appearance-none border rounded w-full pt-3 pb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
        </div>
        <div class="mb-6">
          {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            E-mail address
          </label> */}
          <input
            class="shadow appearance-none border rounded w-full pt-3 pb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="email"
            placeholder="Email-address"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            style={{ backgroundColor: "#191817" }}
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div class="mt-6 flex justify-between ">
          <p>Have an account?</p>

          <Link to="/signin">
            <a style={{ color: "#191817" }} href="#">
              Sign In
            </a>
          </Link>
        </div>

        {/* <p class="text-center mt-6 mb-6">or you can sign in with</p>
        <div class="flex justify-center gap-2">
          <svg
            viewBox="0 0 24 24"
            width="2em"
            height="2em"
            class="icon__1Md2 icon__3F7K"
            // onClick={HandlerGoogle}
          >
            <path
              fill-rule="evenodd"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm.044-5.213c2.445 0 4.267-1.551 4.556-3.781v-1.891h-4.519v1.89h2.602a2.893 2.893 0 0 1-2.724 1.93c-1.194 0-2.677-1.1-2.677-2.843 0-1.621 1.161-2.876 2.677-2.876.739 0 1.413.279 1.922.736l1.399-1.376a4.744 4.744 0 1 0-3.236 8.212z"
            ></path>
          </svg>

          <svg
            viewBox="0 0 24 24"
            width="2em"
            height="2em"
            class="icon__1Md2 icon__3F7K"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
            ></path>
          </svg>
        </div> */}
      </form>
    </div>
  );
}

export default Signup;
