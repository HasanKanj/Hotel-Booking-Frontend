import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Loginn from '../pages/Loginn'
import About from "../Components/AboutUs/About";
// import Login from "../pages/LoginPage";
import ScrollToTop from "../Components/Home/ScrolltoTop/Scroll";
import Home from "../Components/Home/Home";
import Contactus from "../Components/ContactUs/Contactus";
import axios from "axios";
// import Page404 from "../Components/404 Page/Page404";

axios.defaults.baseURL = "http://127.0.0.1:5000";
axios.defaults.withCredentials = true;
const Routers = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home/>}>
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/About" element={<About />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default Routers;
