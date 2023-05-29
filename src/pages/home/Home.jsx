import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";

import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainerx">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="Hotels" />
          <Widget type="Rooms" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      
      
      </div>
    </div>
  );
};

export default Home;
