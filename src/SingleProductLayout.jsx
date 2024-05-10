import theschool from "./assets/theschoolforgood.jpg";
import "./SingleProductLayout.css";
function SingleProductLayout() {
  return (
    <div class="w-4/5 h-4/5 container mx-auto mt-6 pr-16 pl-24  flex flex-row gap-24 ">
      <div class="basis-1/5">
        <img class="min-w-96" src={theschool} alt="image" />
      </div>
      <div className="basis-3/5 mt-10 ">
        <h2 className="product-title">The School For Good Mothers</h2>
        <p style={{ color: "#3C4F95" }} className="auther">
          Jessamine Chan
        </p>
        <h4 className="price">₹ 450</h4>
        <p style={{ fontSize: "13px" }}>(inclusive of all taxes)</p>
        <select
          class="w-16 mt-4 form-select"
          aria-label=".form-select-lg example"
        >
          <option selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <div class="mt-6">
          <button class="btn1 mr-8">ADD TO BAG</button>
          <button class="btn2">BUY IT NOW</button>
        </div>

        <div className="mt-8">
          <h2 class="description ">Description</h2>
          <p className="pt-4">
            Jessamine Chan's short stories have appeared in Tin House and Epoch.
            A former reviews editor at Publishers Weekly, she holds an MFA from
            Columbia University's School of the Arts and a BA from Brown
            University. She lives in Chicago with her husband and daughter. This
            is her first novel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductLayout;
