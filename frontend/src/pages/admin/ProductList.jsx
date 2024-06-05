import React, { Fragment, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import TitleHeader from '../../components/layout/TitleHeader';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';
import { productListFetch } from '../../redux/stores/ProductAdminSlice';

const ProductList = () => {

  const dispatch = useDispatch();
  const productsAdmin = useSelector(state => state.productsListAdmin.products);
  const status = useSelector(state => state.productsListAdmin.status);

  useEffect(() => {
    dispatch(productListFetch());
  }, [dispatch]);

  // Render loading state
  if (status === 'loading') {
    return <Loader />;
  }

  // Render error state
  if (status === 'failed') {
    return <Error />;
  }


  const columns = [
    { field: "_id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 70,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "category",
      headerName: "Category",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className='flex flex-row space-x-3 items-center self-center'>
            <button onClick={() => {
            }}>
              <FaRegEdit color='#1cbe1c' size={22} />
            </button>

            <button
              onClick={() =>
                deleteProductHandler(params?.id, "id")
              }>
              <MdDelete color='#be1c1c' size={22} />
            </button>
          </div>
        );
      },
    },
  ];


  const deleteProductHandler = () => {

  }
  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full'>
          <TitleHeader title={`ALL PRODUCTS - Admin`} />
            <div className="p-4">
              <DataGrid
                rows={productsAdmin?.products}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                className="productListTable"
                autoHeight
                getRowId={(row) => row._id}
              />
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
