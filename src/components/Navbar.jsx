import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky">
      <nav className="nav border-bottom">
        <div className="toolbar">
          <div>
            <Link style={{ color: "#191817" }} to="/">
              <h2 class="text-3xl font-semibold">Book Store</h2>
            </Link>
          </div>
          <div className="toolbar-icons">
            <div className="head-icons">
              <Link to="/signin">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.842"
                    height="22"
                    viewBox="0 0 20.842 22"
                  >
                    <path
                      id="_9054995_bx_user_icon_1_"
                      data-name="9054995_bx_user_icon (1)"
                      d="M13.421,2a5.789,5.789,0,1,0,5.789,5.789A5.789,5.789,0,0,0,13.421,2Zm0,9.263a3.474,3.474,0,1,1,3.474-3.474A3.474,3.474,0,0,1,13.421,11.263ZM23.842,24V22.842a8.105,8.105,0,0,0-8.105-8.105H11.105A8.105,8.105,0,0,0,3,22.842V24H5.316V22.842a5.789,5.789,0,0,1,5.789-5.789h4.632a5.789,5.789,0,0,1,5.789,5.789V24Z"
                      transform="translate(-3 -2)"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="head-icons">
              <Link to="/search">
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 19 21"
                    style={{ color: "black" }}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g stroke="currentColor" stroke-width="0.5">
                      <g transform="translate(0.000000, 0.472222)">
                        <path d="M14.3977778,14.0103889 L19,19.0422222 L17.8135556,20.0555556 L13.224,15.0385 C11.8019062,16.0671405 10.0908414,16.619514 8.33572222,16.6165556 C3.73244444,16.6165556 0,12.8967778 0,8.30722222 C0,3.71766667 3.73244444,0 8.33572222,0 C12.939,0 16.6714444,3.71977778 16.6714444,8.30722222 C16.6739657,10.4296993 15.859848,12.4717967 14.3977778,14.0103889 Z M8.33572222,15.0585556 C12.0766111,15.0585556 15.1081667,12.0365 15.1081667,8.30827778 C15.1081667,4.58005556 12.0766111,1.558 8.33572222,1.558 C4.59483333,1.558 1.56327778,4.58005556 1.56327778,8.30827778 C1.56327778,12.0365 4.59483333,15.0585556 8.33572222,15.0585556 Z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="head-icons">
              <Link to="/cart">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.628"
                    height="22.183"
                    viewBox="0 0 19.628 22.183"
                  >
                    <path
                      id="_9004670_bag_shopping_store_shop_icon"
                      data-name="9004670_bag_shopping_store_shop_icon"
                      d="M5.064,21.983H17.155a3.664,3.664,0,0,0,3.635-4.122L19.644,8.7A3.668,3.668,0,0,0,16.012,5.5h-.322V4.58a4.58,4.58,0,1,0-9.16,0V5.5H6.207A3.668,3.668,0,0,0,2.572,8.7l-1.145,9.16a3.664,3.664,0,0,0,3.636,4.122Zm3.3-17.4a2.748,2.748,0,0,1,5.5,0V5.5h-5.5ZM3.245,18.092,4.39,8.933a1.832,1.832,0,0,1,1.817-1.6h.322V9.16a.916.916,0,0,0,1.832,0V7.328h5.5V9.16a.916.916,0,0,0,1.832,0V7.328h.322a1.832,1.832,0,0,1,1.817,1.6l1.145,9.16a1.832,1.832,0,0,1-1.819,2.059H5.064a1.832,1.832,0,0,1-1.817-2.059Z"
                      transform="translate(-1.294 0.1)"
                      stroke="#000"
                      stroke-width="0.2"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-container">
        <Link style={{ color: "#191817" }} to="/newandnoteworthy">
          <p className="link">NEW & NOTEWORTHY</p>
        </Link>
        <Link style={{ color: "#191817" }} to="/top50">
          <p className="link">TOP 50</p>
        </Link>
        <Link style={{ color: "#191817" }} to="/books">
          <p className="link">BOOKS</p>
        </Link>
        <Link style={{ color: "#191817" }} to="/books">
          <p className="link">KIDS BOOKS</p>
        </Link>
        <Link style={{ color: "#191817" }} to="/books">
          <p className="link">YOUNG ADULT</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
