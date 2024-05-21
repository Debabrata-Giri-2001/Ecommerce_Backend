import React, { Fragment, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import TitleHeader from '../../components/layout/TitleHeader';

const UsersList = () => {

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <FaRegEdit />
            </Link>

            <button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <MdDelete />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  const deleteUserHandler = () => { }

  return (
    <Fragment>
      <TitleHeader title={`ALL USERS - Admin`} />

      <div className="">
        <div className="p-4">
          <h1 className="text-2xl font-Kanit mb-4">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  )
}

export default UsersList
