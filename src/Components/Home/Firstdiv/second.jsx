import  { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag,  } from "antd";

import Error from "../components/Error";

function AdminBookingScreen() {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");
  
    const columns = [
      {
        title: "transactionid",
        dataIndex: "transactionid",
        key: "transactionid",
      },
      { title: "roomid", dataIndex: "roomid", key: "roomid" },
      { title: "room", dataIndex: "room", key: "room" },
      { title: "fromdate", dataIndex: "fromdate", key: "fromdate" },
      { title: "todate", dataIndex: "todate", key: "todate" },
      {
        title: "status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <>
            {status === "booked" ? (
              <Tag color="green">CONFIRMED</Tag>
            ) : (
              <Tag color="red">CANCELLED</Tag>
            )}
          </>
        ),
      },
    ];
  
    async function fetchMyData() {
      setError("");
      try {
        const data = (await axios.post("/api/bookings/getallbookings")).data;
        setBookings(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
  
    useEffect(() => {
      fetchMyData();
    }, []);
  
    return (
      <div className="row">
        <div className="col-md-12">
          {error.length > 0 ? (
            <Error msg={error}></Error>
          ) : (
            <Table columns={columns} dataSource={bookings} />
          )}
        </div>
      </div>
    );
  }
  
  export default AdminBookingScreen;
  