import "./logins.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import bb from "../../assets/bb.jpg";
import cc from "../../assets/personalization.png";
import dd from "../../assets/pp.png";

import axios from "axios";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://booking-backend-ei2v.onrender.com/api/auth/login",
        credentials
      );
      if (res.data.details.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const addClass = () => {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    };

    const removeClass = () => {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", addClass);
      input.addEventListener("blur", removeClass);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", addClass);
        input.removeEventListener("blur", removeClass);
      });
    };
  }, []);

  return (
    <div>
      <img className="wave" src={bb} />
      <div className="container">
        <div className="img">
          <img src={cc} />
        </div>
        <div className="login-content">
          <form onSubmit className="mt-8">
            <img src={dd} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
            <div>
              <button disabled={loading} onClick={handleClick} className="btn">
                Log in
              </button>
              {error && <span>{error.message}</span>}
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
