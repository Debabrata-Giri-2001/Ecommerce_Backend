import React, { Fragment, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { DataGrid } from '@mui/x-data-grid';
import TitleHeader from '../../components/layout/TitleHeader';
import SideBar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { allUserListFetch } from '../../redux/stores/UserListSlice';
import Loader from '../../components/core/Loader';
import Error from '../../components/core/Error';

const UsersList = () => {


  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList.user);
  const status = useSelector(state => state.userList.state);

  useEffect(() => {
    dispatch(allUserListFetch());
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
    { field: "_id", headerName: "User ID", minWidth: 300 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 300,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 200,
    },
    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 100,
      renderCell: (params) => {
        const style = {
          color: params.value === "admin" ? '#be1c1c' : '#1cbe1c',
        };
        return <span style={style}>{params.value}</span>;
      },
    },
    {
      field: "phone",
      headerName: "Number",
      minWidth: 150,
    },

    {
      field: "actions",
      headerName: "Actions",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <div className='flex flex-row space-x-3 items-center self-center'>
            <button onClick={() => {
            }}>
              <FaRegEdit color='#1cbe1c' size={22} />
            </button>

            <button
              onClick={() =>
                deleteUserHandler(params?.id, "id")
              }>
              <MdDelete color='#be1c1c' size={22} />
            </button>
          </div>
        );
      },
    },
  ];

  const deleteUserHandler = (id) => {
    console.log("id-->", id)
  }


  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className="w-full">
          <TitleHeader title={`ALL USERS - Admin`} />
          <div className="p-4">
            {userList?.users?.length > 0 ?
              <>
                <DataGrid
                  rows={userList?.users}
                  columns={columns}
                  pageSize={10}
                  disableSelectionOnClick
                  className="productListTable"
                  autoHeight
                  getRowId={(row) => row._id}
                />
              </> :
              <div>
                <h1>No data Here</h1>
              </div>
            }
          </div>
        </div>
      </div>


    </Fragment>
  )
}

export default UsersList
