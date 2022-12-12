import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const userColumns = [
  { field: "id", headerName: "ID", width: 290 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
      {/*     <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          <AccountCircleIcon/>
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 350,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


