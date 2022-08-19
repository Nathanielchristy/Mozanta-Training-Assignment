import React, { useState } from "react";
import axios from "axios";

function DataCardUser(props) {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });
  const [d, setD] = useState(props.dataArray.like);
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const handleClick = async () => {
    console.log(props.dataArray.bid, d);
    let bid = props.dataArray.bid;
    let like = d;
    var userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    let uid=userInfo.uid;
    console.log(uid)
    try {
      let res = await api.put(`/api/v2/like/?uid=${uid}`, { bid, like }, config);
      console.log(res.data);

      setD(d + 1);
    } catch (error) {}
  };

  return (
    <>
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
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="red"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {d}
              <span></span>
            </button>
            <p>Published On - {props.dataArray.date}</p>
            <p>Published By - {props.dataArray.uid}    {props.dataArray.UserName}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default DataCardUser;
