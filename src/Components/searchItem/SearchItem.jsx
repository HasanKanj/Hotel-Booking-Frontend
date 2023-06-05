import { Link } from "react-router-dom";
import "./searchItem.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate(`/hotels/${item._id}`);
    } else {
      // Store the desired URL in local storage
      localStorage.setItem("desiredURL", `/hotels/${item._id}`);
      navigate("/login");
    }
  };

  return (
    <div className="searchItem">
      <img src={item.url} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{item.address} </span>
        <span className="siFeatures">{item.description}</span>
        <span className="siFeatures">Cheapest Price per room {item.cheapestPrice}$</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          {user ? (
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          ) : (
            <button className="siCheckButton" onClick={handleClick}>
              See availability
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    distance: PropTypes.number,
    cheapestPrice: PropTypes.number,
    rating: PropTypes.number,
    description: PropTypes.string,
    address: PropTypes.string,

    _id: PropTypes.string,
  }),
};

export default SearchItem;
