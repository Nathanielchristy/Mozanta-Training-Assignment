import React from "react";


function DataCard(props) {

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

export default DataCard;
