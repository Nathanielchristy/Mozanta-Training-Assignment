import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

export default function HomeRoute() {
  var userInfo = localStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);
  console.log(userInfo.role);
  return (
    <Routes>
      <Route
        path="*"
        element={userInfo.role === "admin" ? <AdminRoute /> : <UserRoute />}
      />
    </Routes>
  );
}
