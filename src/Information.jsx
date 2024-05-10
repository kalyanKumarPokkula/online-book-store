import "./information.css";

function Information() {
  return (
    <div class="w-4/5 h-4/5 container mx-auto flex flex-row">
      <div class="basis-2/4 p-14">
        <form class="row g-3">
          <div class="col-12">
            <h2 class="form-title">Contact</h2>
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="Email"
            />
          </div>
          <h2 style={{ marginTop: "35px" }} class="form-title">
            Shipping address
          </h2>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First
            </label>
            {/* <input type="email" class="form-control" id="inputEmail4"> */}
            <input type="text" class="form-control" id="inputemail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Last
            </label>
            <input type="text" class="form-control" id="inputemail4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Phone Number"
            ></input>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Save this information for next time
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="shipping-btn">
              Continue to Shipping
            </button>
          </div>
        </form>
      </div>
      <div style={{ backgroundColor: "#F4F4F4" }} className="basis-2/4">
        <h1>Shipping</h1>
      </div>
    </div>
  );
}

export default Information;
