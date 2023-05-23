import "./featuredProperties.css";
import { useEffect, useState } from "react";

const FeaturedProperties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/hotels?featured=true&limit=4"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div key={item._id}>
              <img src={item.url} alt=""  />
              <span >{item.name}</span>
              <span >{item.city}</span>
              <span >
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div >
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      
    </div>
  );
};

export default FeaturedProperties;
