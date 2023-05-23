import "./featured.css";
import { useEffect, useState } from "react";
import img1 from "../../../assets/beirut.jpg";
import img2 from "../../../assets/faraya.jpg";
import img3 from "../../../assets/Tyre.jpg";

const Featured = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/hotels/countByCity?cities=Madrid,Beirut"
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
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={img1} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1 className="locations">Beirut</h1>
              <h2 className="properties">{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={img2} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1 className="locations">Faraya</h1>
              <h2 className="properties">{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={img3} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1 className="locations">Tyre</h1>
              <h2 className="properties">{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;