import { Link } from "react-router-dom";
import "./searchItem.css";
import PropTypes from "prop-types";


const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.url} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.description}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
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
    _id: PropTypes.number,



  })
};


export default SearchItem;
