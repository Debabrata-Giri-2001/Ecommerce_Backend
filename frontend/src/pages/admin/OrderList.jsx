import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import TitleHeader from '../../components/layout/TitleHeader';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import SideBar from './SideBar';

const OrderList = () => {


  const rows = [];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "#00b32a"
          : "#d40707";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
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
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <FaRegEdit />
            </Link>

            <button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <MdDelete />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const deleteOrderHandler = (id) => {
    console.log(`Delete order with ID: ${id}`);
  };

  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full'>
          <TitleHeader title={`ALL ORDERS - Admin`} />
          <div className="p-4">
            <h1 className="text-2xl font-Kanit mb-4">ALL ORDERS</h1>
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
      </div>

    </Fragment>
  );
};

export default OrderList;
