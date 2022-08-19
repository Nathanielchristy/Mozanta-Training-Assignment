import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DataCardUserProfile(props) {
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleEdit = async () => {
    console.log(props.dataArray);
    localStorage.setItem("EditInfo", JSON.stringify(props.dataArray));
    navigate("/home/edit/");
  };
  const handleDelete = async () => {
    console.log(props.dataArray.bid);
    let bid = props.dataArray.bid;
    let payload = { bid: bid };
    let res = await api.delete(`/api/v2/delete/`, { params: payload }, config);
    alert(res.data);
    navigate("/home");
  };

  return (
    <div>
      <div style={{ padding: "30px" }}></div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        <div style={{ padding: "30px" }}></div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://c.tadst.com/gfx/600x337/barcelona-morning-sky.jpg?1"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {props.dataArray.title}
            </div>
            <p className="text-gray-700 text-base">{props.dataArray.content}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              style={{ marginLeft: "50px" }}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              style={{ marginLeft: "50px" }}
              onClick={handleDelete}
            >
              Delete
            </button>
            <p>
              <br></br>
            </p>
            <p>Published On - {props.dataArray.date}</p>
            <br></br>
            <p>Published By -  {props.dataArray.uid}  {props.dataArray.userName}</p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCardUserProfile;
