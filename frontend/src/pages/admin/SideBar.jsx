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
      <Menu>

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
