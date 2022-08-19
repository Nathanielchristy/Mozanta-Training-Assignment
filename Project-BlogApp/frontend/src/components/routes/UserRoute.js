import React from "react";
import { Routes, Route } from "react-router-dom";
import EditBlog from "../admin/EditBlog";
import UserHeader from "../header/UserHeader";

import Logout from "../logout/Logout";
import NotFound from "../notfound/NotFound";
import AddBlog from "../user/AddBlog";

import UserHome from "../user/UserHome";
import UserProfile from "../user/UserProfile";

export default function UserRoute() {
  return (
    <div>
      <UserHeader></UserHeader>
      <Routes>
        <Route path="/" element={<UserHome/>}></Route>
        <Route path="/addblog" element={<AddBlog/>}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/edit" element={<EditBlog />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
