import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCardUserProfile from "./DataCardUserProfile";
import ReactPaginate from "react-paginate";

function UserProfile(props) {
  const [data, setData] = new useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  var userInfo = localStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const get = async () => {
    let uid = userInfo.uid;

    let res = await api.post(`/api/v2/fetchuid/?uid=${uid}`, config);
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    get();
  }, []);
  let pagedata = data;
  const BlogPerPage = 10;
  const pageVisited = pageNumber * BlogPerPage;
  pagedata = data.slice(pageVisited, pageVisited + BlogPerPage);
  const pageCount = Math.ceil(data.length / BlogPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  return (
    <>
      <div
        style={{
          paddingLeft: "500px",
          fontSize: "50px",
          fontFamily: "cursive",
        }}
      >
        {userInfo.firstName} {userInfo.lastName} Blog Feed
      </div>
      <div style={{ paddingLeft: "500px" }}>
        {pagedata.map((i) => (
          <DataCardUserProfile key={i.id} dataArray={i} />
        ))}
      </div>
      <div style={{padding:"50px 0px 50px 250px"}}>
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousBtns"}
          nextLinkClassName={"nextBtns"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}

export default UserProfile;
