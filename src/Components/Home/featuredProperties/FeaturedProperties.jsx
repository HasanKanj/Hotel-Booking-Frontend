import { Link } from "react-router-dom";
import "./featuredProperties.css";
import useFetch from "../../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    `https://booking-backend-ei2v.onrender.com/api/hotels?featured=true&limit=3`
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <Link to="/Hotels">
                <img src={item.url} alt="" className="fpImg" />
              </Link>
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
