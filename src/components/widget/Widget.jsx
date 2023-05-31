import { useState, useEffect } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Widget = ({ type }) => {
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = "";
      switch (type) {
        case "user":
          url = "https://booking-backend-ei2v.onrender.com/api/users/count";
          break;
        case "Hotels":
          url = "https://booking-backend-ei2v.onrender.com/api/hotels/count";
          break;
        case "Rooms":
          url = "https://booking-backend-ei2v.onrender.com/api/rooms/count";
          break;
        default:
          break;
      }

      const response = await axios.get(url);
      const fetchedCount = response.data.count;
      setCount(fetchedCount);

      // Here you can calculate the difference if necessary
      // For example:
      // const previousCount = ... // Fetch the previous count from somewhere
      // const difference = fetchedCount - previousCount;
      // setDiff(difference);
    } catch (error) {
      console.log(error);
    }
  };

  let data;

  switch (type) {
    case "user":
      data = {
        title: <span style={{ color: "#3B79C9" }}>USERS</span>,
        isMoney: false,
        link: (
          <Link to="/users" className="link" style={{ color: "#3B79C9" }}>
            See all users
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Hotels":
      data = {
        title: <span style={{ color: "#3B79C9" }}>Hotel</span>,
        isMoney: false,
        link: (
          <Link to="/hotels" className="link" style={{ color: "#3B79C9" }}>
            View all Hotels{" "}
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Rooms":
      data = {
        title: <span style={{ color: "#3B79C9" }}>Rooms</span>,
        isMoney: true,

        link: (
          <Link to="/rooms" className="link" style={{ color: "#3B79C9" }}>
            View all rooms{" "}
          </Link>
        ),

        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive" style={{ color: "#3B79C9" }}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

Widget.propTypes = {
  type: PropTypes.string,
};

export default Widget;
