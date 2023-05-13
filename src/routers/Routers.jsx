import { Route, Routes } from "react-router-dom";
import Loginn from "../pages/Loginn";
import Layout from "../Layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import ScrollToTop from "../Components/Home/ScrolltoTop/Scroll";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";
axios.defaults.withCredentials = true;
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login"  element={<Loginn />} />
          <Route path="/register"  element={<RegisterPage />} />

        </Route>
        <ScrollToTop />

      </Routes>
  );
}

export default App;
