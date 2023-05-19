import { Route, Routes } from "react-router-dom";
import Register from "../Components/Register/Register";
import Loginn from "../Components/Login/Loginn";
// import Loader from "../Components/Loader/"
import About from "../Components/AboutUs/About";
// import Login from "../pages/LoginPage";
import ScrollToTop from "../Components/Home/ScrolltoTop/Scroll";
import Home from "../Components/Home/Home";
import Contactus from "../Components/ContactUs/Contactus";
import Page404 from "../Components/404 Page/Page404";
import List from "../Components/list/List";
import Hotel from "../Components/hotel/Hotel";
const Routers = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/About" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/*" element={<Page404 />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default Routers;
