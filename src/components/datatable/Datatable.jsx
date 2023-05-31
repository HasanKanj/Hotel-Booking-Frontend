import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, reFetch } = useFetch(
    `https://booking-backend-ei2v.onrender.com/api/${path}`
  );
  const [editRowId, setEditRowId] = useState(null);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        await axios.delete(
          `https://booking-backend-ei2v.onrender.com/api/${path}/${id}`
        );
        setList(list.filter((item) => item._id !== id));
        await Swal.fire("Deleted!", "Your file has been deleted.", "success");
        window.location.reload();
      }
    } catch (err) {
      // Handle error
    }
  };
  const handleEdit = (id) => {
    setEditRowId(id);
  };

  const handleCancelEdit = () => {
    setEditRowId(null);
  };

  const handleSaveEdit = async (id, updatedData) => {
    try {
      // Perform the edit/update operation using the appropriate API
      await axios.put(
        `https://booking-backend-ei2v.onrender.com/api/${path}/${id}`,
        updatedData
      );
      // Refresh the data after successful edit
      reFetch();
      // Set the editRowId to null to exit the edit mode
      setEditRowId(null);
    } catch (err) {
      // Handle error
    }
  };

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleCellEditCommit = async ({ id, field, value }) => {
    // Update the specific field of the row in the backend
    try {
      // Example endpoint: `https://booking-backend-ei2v.onrender.com/api/${path}/${id}`
      // Perform the update operation using the appropriate API
      await axios.put(
        `https://booking-backend-ei2v.onrender.com/api/${path}/${id}`,
        {
          [field]: value,
        }
      );
    } catch (err) {
      // Handle error
    }
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="cellAction">
        {editRowId === params.row._id ? (
          <>
            <button
              className="saveButton"
              onClick={() => handleSaveEdit(params.row._id, params.row)}
            >
              Save
            </button>
            <button className="cancelButton" onClick={() => handleCancelEdit()}>
              Cancel
            </button>
          </>
        ) : (
          <button
            className="editButton"
            onClick={() => handleEdit(params.row._id)}
          >
            Edit
          </button>
        )}
        <button
          className="deleteButton"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </button>
      </div>
    ),
  };

  const editableColumns = columns.map((column) => ({
    ...column,
    editable: editRowId !== null,
  }));

  const columnsWithAction = [...editableColumns, actionColumn];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columnsWithAction}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick // Add this prop
        getRowId={(row) => row._id}
        components={{
          Toolbar: GridToolbar,
        }}
        onEditCellChangeCommitted={handleCellEditCommit}
        isCellEditable={(params) =>
          params.field !== "action" && editRowId !== null
        }
      />
    </div>
  );
};
Datatable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      // Add more PropTypes for other properties if necessary
    })
  ).isRequired,
};

export default Datatable;
