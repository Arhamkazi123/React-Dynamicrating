import { FaStar } from "react-icons/fa";
import "./Star.css";
import { useState } from "react";

function Star() {
  const [rating, setrating] = useState(null);
  const [hover, sethover] = useState(null);
  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratevalue = i + 1;
          return (
            <label key={i} className="star">
              <input
                type="radio"
                value={ratevalue}
                className="radiobtn"
                onClick={() => setrating(ratevalue)}
              />
              <FaStar
                size={100}
                onMouseEnter={() => sethover(ratevalue)}
                onMouseLeave={() => sethover(null)}
                color={ratevalue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
        <h1>The rating is {rating}</h1>
      </div>
    </>
  );
}

export default Star;
