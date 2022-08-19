import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../admin/AdminHome";
import AdminProfile from "../admin/AdminProfile";
import EditBlog from "../admin/EditBlog";
import AdminHeader from "../header/AdminHeader";

import Logout from "../logout/Logout";
import NotFound from "../notfound/NotFound";

export default function AdminRoute() {
  console.log("Working as admin");
  return (
    <div>
      <AdminHeader></AdminHeader>
      <Routes>
        <Route path="/" element={<AdminHome />}></Route>
        <Route path="/edit" element={<EditBlog />}></Route>
        <Route path="/profile" element={<AdminProfile />}></Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
