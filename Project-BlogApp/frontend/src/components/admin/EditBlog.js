import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditBlog(props) {
  var EditInfo = localStorage.getItem("EditInfo");
  EditInfo = JSON.parse(EditInfo);
  const navigate = useNavigate();
  const bid = EditInfo.bid;
  const title = EditInfo.title;
  const content = EditInfo.content;

  const [formValues, setFormValues] = useState({
    bid: bid,
    title: title,
    content: content,
  });
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleChange = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormValues({ ...formValues });
    console.log(formValues);
    let res = await api.put("/api/v2/update", { ...formValues }, config);
    console.log(res.data);
    alert("Blog Updated");
    localStorage.removeItem("EditInfo");
    navigate("/");
  };

  return (
    <div style={{ padding: "80px 500px 10px 500px" }}>
      <form>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={formValues.title}
            onChange={handleChange}
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="content"
            id="content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={formValues.content}
            onChange={handleChange}
          />
          <label
            htmlFor="content"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Content
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
