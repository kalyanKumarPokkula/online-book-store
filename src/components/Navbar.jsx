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
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.135"
                  height="22"
                  viewBox="0 0 25.135 22"
                >
                  <path
                    id="_8664909_heart_like_icon_1_"
                    data-name="8664909_heart_like_icon (1)"
                    d="M22.684,33.466a5.868,5.868,0,0,0-4.1-1.515,7.087,7.087,0,0,0-5.057,2.159l-.967,1-.967-1A7.089,7.089,0,0,0,6.54,31.951,6.267,6.267,0,0,0,2.4,33.466a7.067,7.067,0,0,0-.453,10.193l9.486,9.806a1.558,1.558,0,0,0,2.254,0l9.481-9.806A7.028,7.028,0,0,0,22.684,33.466Zm-1.2,8.555-8.917,9.221-8.92-9.221a4.716,4.716,0,0,1,.3-6.774,4.425,4.425,0,0,1,5.961.5l2.66,2.746,2.659-2.746c1.3-1.339,3.99-2.2,5.961-.5A4.708,4.708,0,0,1,21.481,42.021Z"
                    transform="translate(0.006 -31.948)"
                  ></path>
                </svg>
              </a>
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
