import  { Fragment } from "react";

import Footer from "../Components/Footer/Footer.jsx";
// import AdminNavbar from "../components/navbar/Navbar.jsx";
import AdminRouter from "../routers/AdminRouter.jsx";

const AdminLayout = () => {
  return (
    <Fragment>
      <div>
        <AdminRouter />
      </div>
      <Footer />
    </Fragment>
  );
}; 

export default AdminLayout;
