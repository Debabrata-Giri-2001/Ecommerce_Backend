import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaBox } from "react-icons/fa";


const SideBar = () => {
  return (
    <Sidebar>
      <div className='flex flex-row items-center space-x-2 px-2 my-2'>
        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png" alt="logo_icon" className='w-14 h-14' />
        <p className='font-Kanit text-2xl text-color3'>E-commerce</p>
      </div>
      <Menu style={{ marginTop: '5rem' }}>
        <p className='px-3 text-gray-400 text-md'>General</p>
        <MenuItem icon={<FaHome />} component={<Link to="/admin/dashboard" />}> Documentation</MenuItem>
        <MenuItem icon={<FaBox />} component={<Link to="/admin/new-product" />}> Documentation</MenuItem>
        <MenuItem icon={<MdList />} component={<Link to="/admin/order-list" />}> Documentation</MenuItem>
        <MenuItem icon={<GiCycle />} component={<Link to="/admin/process-order" />}> Documentation</MenuItem>
        <MenuItem icon={<MdList />} component={<Link to="/admin/product-list" />}> Documentation</MenuItem>
        <MenuItem icon={<MdReviews />} component={<Link to="/admin/product-reviews" />}> Documentation</MenuItem>
        <MenuItem icon={<MdTipsAndUpdates />} component={<Link to="/admin/update-product" />}> Documentation</MenuItem>
        <MenuItem icon={<FaUserEdit />} component={<Link to="/admin/update-user" />}> Documentation</MenuItem>
        <MenuItem icon={<FiUsers />} component={<Link to="/admin/users-list" />}> Documentation</MenuItem>

      </Menu>
    </Sidebar>
  )
}

export default SideBar
