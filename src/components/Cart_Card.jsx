import theschool from "../assets/theschoolforgood.jpg";

function Cart_Card({ id, title, image, price, quantity, onDelete }) {
  return (
    <div class="flex justify-between items-center border-y-violet-950">
      <img src={image} style={{ width: "88px", height: "136px" }} alt="" />
      <h2>{title}</h2>
      <p>₹ {price}</p>

      <div>
        <select class="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <p>₹ {price}</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={e => {
            onDelete(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.25"
            height="14"
            viewBox="0 0 12.25 14"
          >
            <path
              id="_8664938_trash_can_delete_remove_icon"
              data-name="8664938_trash_can_delete_remove_icon"
              d="M11.813,2.188H9.56L8.63.636A1.338,1.338,0,0,0,7.509,0H4.741A1.306,1.306,0,0,0,3.62.636L2.69,2.188H.438A.436.436,0,0,0,0,2.625v.438A.436.436,0,0,0,.438,3.5H.875v8.75A1.75,1.75,0,0,0,2.625,14h7a1.75,1.75,0,0,0,1.75-1.75V3.5h.438a.435.435,0,0,0,.438-.437V2.625A.436.436,0,0,0,11.813,2.188ZM4.7,1.391a.162.162,0,0,1,.139-.079H7.41a.162.162,0,0,1,.14.079l.478.8H4.222Zm4.925,11.3h-7a.437.437,0,0,1-.437-.437V3.5h7.875v8.75A.439.439,0,0,1,9.625,12.688ZM4.938,11.375a.439.439,0,0,0,.438-.437V5.25a.438.438,0,0,0-.875,0v5.688A.439.439,0,0,0,4.938,11.375Zm2.375,0a.437.437,0,0,0,.438-.437V5.25a.438.438,0,0,0-.875,0v5.688A.439.439,0,0,0,7.313,11.375Z"
            ></path>
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Cart_Card;
