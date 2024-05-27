import React, { Fragment, useState } from 'react'
import Loader from '../../components/core/Loader';
import { IoPersonCircle } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import TitleHeader from '../../components/layout/TitleHeader';
import SideBar from './SideBar';


const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const updateUserSubmitHandler = () => {

  }
  return (
    <Fragment>
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full'>
          <TitleHeader title="Update User" />
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
            {false ? (
              <Loader />
            ) : (
              <form className="space-y-6" onSubmit={updateUserSubmitHandler}>
                <h1 className="text-2xl font-semibold mb-4">Update User</h1>

                <div className="relative">
                  <IoPersonCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <MdOutlineVerifiedUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                // disabled={updateLoading || role === ""}
                >
                  Update
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UpdateUser
