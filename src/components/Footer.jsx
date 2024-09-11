import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="container1">
        <div class="row">
          <div class="col-md-3">
            <h4 class="text-xl font-semibold mb-3">About Us</h4>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="text-xl font-semibold mb-3">Help</h4>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="text-xl font-semibold mb-3">Follow Us</h4>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-twitter" aria-hidden="true"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="text-xl font-semibold mb-3">Newsletter</h4>
            <p>Stay up to date with our latest releases and promotions!</p>
            <form>
              <input
                type="email"
                style={{
                  padding: " 10px 40px",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
                placeholder="Enter your email address"
              />
              <button class="btn2" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p class="copyright">
          Copyright 2024 Online Book Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
