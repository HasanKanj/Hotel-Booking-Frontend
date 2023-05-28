import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Reserve.css";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomsData, setRoomsData] = useState([]);
  const { dates } = useContext(SearchContext);
  const { user } = useContext(AuthContext);


  const getDatesInRange = (startDate, endDate) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const date = new Date(start.getTime());

      const dates = [];

      while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
      }

      return dates;
    }

    return [];
  };

  const alldates = getDatesInRange(
    dates && dates.length > 0 ? dates[0].startDate : null,
    dates && dates.length > 0 ? dates[0].endDate : null
  );
  const fetchRooms = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/rooms/`);
      console.log(response);
      setRoomsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [hotelId]);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      // Log selected rooms
      console.log("Selected Rooms:", selectedRooms);
  
      // Fetch the hotel details from the server
      const hotelResponse = await axios.get(`http://localhost:5000/api/hotels/find/${hotelId}`);
      const hotelDetails = hotelResponse.data;
      console.log("Hotel Details:", hotelDetails);
  
      // Update room availability
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:5000/api/rooms/availability/${roomId}`,
            {
              dates: alldates,
            }
          );
          return res.data;
        })
      );
  
      const username = user.details.username;
      const email = user.details.email;
      const phone = user.details.phone;
  
      const currentDate = new Date().toLocaleString();
  
      const params = {
        username: username,
        email: email,
        phone: phone,
        date: currentDate,
        hotelName: hotelDetails.name,
        hotelAddress: hotelDetails.address,
        hotelcity: hotelDetails.city,
        hotelguests: hotelDetails.guests,


      };
  
      emailjs.send(
        "service_i65z4yo",
        "template_kz0prl9",
        params,
        "X3GWKBc5fNzTxb_rm"
      )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
  
      setOpen((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {roomsData &&
          roomsData.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">{item.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room" key={roomNumber._id}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

Reserve.propTypes = {
  setOpen: PropTypes.func,
  hotelId: PropTypes.string,
};

export default Reserve;
