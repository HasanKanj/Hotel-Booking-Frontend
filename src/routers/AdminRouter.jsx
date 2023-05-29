import Home from "../pages/home/Home";
import Logins from "../pages/login/Logins";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import NewUser from "../pages/new/NewUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { userInputs } from "./../formSource";
import "../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/AuthContext";
import {
  userColumns,
  hotelColumns,
  roomColumns,
  contactColumns,
} from "../datatablesource";
import NewHotel from "../pages/newHotel/NewHotel";
import NewRoom from "../pages/newRoom/NewRoom";
import NewContact from "../pages/newRoom/NewRoom";

import PropTypes from "prop-types";
function AdminRouter() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Logins />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <Home />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={userColumns} />
                </ProtectedRoute>
              }
            />
            <Route
              path=":userId"
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewUser inputs={userInputs} title="Add New User" />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="hotels">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={hotelColumns} />
                </ProtectedRoute>
              }
            />

            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <Single />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewHotel />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="rooms">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={roomColumns} />
                </ProtectedRoute>
              }
            />

            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <Single />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewRoom />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="contact">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={contactColumns} />
                </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <Single />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewContact />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

AdminRouter.propTypes = {
  children: PropTypes.shape({
    children: PropTypes.string,
  }),
};

export default AdminRouter;
