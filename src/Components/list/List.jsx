import "./list.css";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../../Components/searchItem/SearchItem";
import axios from "axios";
import { useEffect } from "react";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/hotels?city=${destination}&min=${
          min || 0
        }&max=${max || 999}`
      );

      console.log(response, "im response");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [destination, min, max]);



  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
          
            
            <div className="lsItem">
              <h2 className="shadio">Options</h2>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price per night 
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default List;
