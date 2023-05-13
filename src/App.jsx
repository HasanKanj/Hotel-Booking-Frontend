import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import AdminBookingScreen from "./Components/Home/Firstdiv/second"
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";
axios.defaults.withCredentials = true;
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" index element={<LoginPage />} />
          <Route path="/register" index element={<RegisterPage />} />
          <Route path="/AdminBookingScreen" index element={<AdminBookingScreen />} />

        </Route>
      </Routes>
  );
}

export default App;
