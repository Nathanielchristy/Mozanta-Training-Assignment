import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Logout() {
    let navigate = useNavigate();
    const redirecthome = async () => {
        await navigate("/", { replace: true });
      };
      useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
          localStorage.removeItem('userInfo');
          redirecthome();
        }
      });
  return (
    <div>Logout</div>
  )
}
