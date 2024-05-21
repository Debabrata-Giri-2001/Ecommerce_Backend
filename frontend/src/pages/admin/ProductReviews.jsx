import React, { Fragment, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import TitleHeader from '../../components/layout/TitleHeader';

const ProductReviews = () => {

  const [productId, setProductId] = useState("");

  const columns = [
    { field: "id", headerName: "Review ID", minWidth: 200, flex: 0.5 },

    {
      field: "user",
      headerName: "User",
      minWidth: 200,
      flex: 0.6,
    },

    {
      field: "comment",
      headerName: "Comment",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      minWidth: 180,
      flex: 0.4,

      cellClassName: (params) => {
        return params.getValue(params.id, "rating") >= 3
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
            <button
              onClick={() =>
                deleteReviewHandler(params.getValue(params.id, "id"))
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


  const deleteReviewHandler = () => {

  }

  const productReviewsSubmitHandler = () => {

  }

  return (
    <Fragment>
      <TitleHeader title={`ALL REVIEWS - Admin`} />
      <div className="mt-6 px-4 py-2 bg-white shadow-md rounded-lg">
        <form className="flex items-center justify-between mb-4" onSubmit={productReviewsSubmitHandler}>
          <div className="flex items-center">
            <label htmlFor="productId" className="mr-4">Product ID:</label>
            <input
              type="text"
              id="productId"
              placeholder="Enter Product ID"
              required
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </form>

        {true ? (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        ) : (
          <div className="text-center text-gray-600">
            No Reviews Found
          </div>
        )}
      </div>
    </Fragment>

  )
}

export default ProductReviews
