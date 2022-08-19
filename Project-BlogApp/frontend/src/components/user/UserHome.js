import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DataCardUser from "./DataCardUser";
import "./UserHome.css";

export default function UserHome() {
  const [data, setData] = new useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const get = async () => {
    let res = await api.get("/api/v2/fetch");
    setData(res.data);
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
  };

  return (
    <>
      <div
        style={{
          paddingLeft: "650px",
          fontSize: "50px",
          fontFamily: "cursive",
        }}
      >
        Blog Feed
      </div>
      <div style={{ paddingLeft: "500px" }}>
        {pagedata.map((i) => (
          <DataCardUser key={i.id} dataArray={i} />
        ))}
      </div>
      <div style={{ padding: "50px 0px 50px 250px" }}>
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
