import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/action";

//////USER LIST
const Datatable = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.users)
  //const [data, setData] = useState(userRows)
  

  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const handleDelete = (id) => {
    data = data.filter((item) => item._id !== id);
    //setData(data.filter((item) => item.id !== id))
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
{/*             <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];

   if(data.length===0){
    return (<div>Cargando</div>)
  } 
  return (
    <div className="datatable">
{/*       <div className="datatableTitle">
        Users List
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        /* checkboxSelection */
      />
    </div>
  );
};

export default Datatable;
