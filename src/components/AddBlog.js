import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebaseBlog";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout/Logout";

const AddBlog = () => {
  const [createdBy, setCreatedBy] = useState("");
  const [title, setTitle] = useState("");
  const [twitter, setTwitter] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [description5, setDescription5] = useState("");
  const [description6, setDescription6] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [createDate, setCreateDate] = useState(
    Timestamp.now().toDate().toLocaleDateString("us-EN")
  );

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(
      collection(db, "finalBlog"),
      {
        title,
        createdBy,
        description,
        description2,
        description3,
        description4,
        description5,
        description6,
        imgUrl,
        imgUrl2,
        createDate,
        twitter,
        category,
      }

      // setCreatedBy("");
      // setTitle("");
      // setDescription("");
      // setImgUrl("");
      // setCreateDate("");
    );
    navigate("/blogs/all");
  };
  // console.log(author);
  // const form = document.getElementById("my_form");
  // form.reset();

  // return (
  //   <div className="addblog-form">
  //     <p>Add new Blog</p>
  //     <form onSubmit={handleSubmit} id="my_form">
  //       <label>Name</label>
  //       <input
  //         type="text"
  //         name="username"
  //         placeholder=" bLOG CREATED by"
  //         onChange={(e) => {
  //           setCreatedBy(e.target.value);
  //         }}
  //       />

  //       <br></br>

  //       <label>Blog Title</label>
  //       <input
  //         name="title"
  //         type="text"
  //         placeholder="Enter
  //       Blog Title"
  //         onChange={(e) => {
  //           setTitle(e.target.value);
  //         }}
  //       />
  //       <br />
  //       <label>Twitter Handle</label>
  //       <input
  //         name="title"
  //         type="text"
  //         placeholder="Enter Twitter Link"
  //         onChange={(e) => {
  //           setTwitter(e.target.value);
  //         }}
  //       />
  //       <br />

  //       <label>Blog Description Para 1</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />

  //       <label>Description Para 2</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription2(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />

  //       <label>Description Para 3</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription3(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />
  //       <label>Blog Description After Image</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription4(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />

  //       <label>Blog Description Para 5</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription5(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />
  //       <label>Description Para 6</label>
  //       <textarea
  //         onChange={(e) => {
  //           setDescription6(e.target.value);
  //         }}
  //         type="text"
  //         placeholder="Write your Blog"
  //       ></textarea>
  //       <br />

  //       <label>Category</label>
  //       <input
  //         name="category"
  //         type="text"
  //         placeholder="Enter Category"
  //         onChange={(e) => {
  //           setCategory(e.target.value);
  //         }}
  //       />
  //       <br />

  //       <label>Image URL</label>
  //       <input
  //         name="image"
  //         placeholder="Paste Image Url"
  //         type="text"
  //         onChange={(e) => {
  //           setImgUrl(e.target.value);
  //         }}
  //       />
  //       <label>Image in the center URL</label>
  //       <input
  //         name="image"
  //         placeholder="Paste Image Url"
  //         type="text"
  //         onChange={(e) => {
  //           setImgUrl2(e.target.value);
  //         }}
  //       />

  //       <div className="btn-container">
  //         <button type="submit"> Submit</button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="flex justify-between  px-5">
        <h1 className="flex items-center pt-5 pb-2 text-5xl font-extrabold dark:text-white">
          Jamesons' Blogs
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            PRO
          </span>
        </h1>

        <Logout />
      </div>

      <form
        onSubmit={handleSubmit}
        id="my_form"
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Blog Information</p>
            <p className="text-xs">All the information related to blog! </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full  sm:col-span-3 ">
              <label htmlFor="firstname" className="text-sm">
                Creator Name
              </label>
              <input
                id="firstname"
                type="text"
                name="username"
                placeholder="bLOG CREATED by"
                onChange={(e) => {
                  setCreatedBy(e.target.value);
                }}
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="ugssol"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Blog Title
              </label>
              <input
                id="lastname"
                name="title"
                type="text"
                placeholder="Enter 
        Blog Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="3w4ho"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                Twitter Handle
              </label>
              <input
                id="state"
                name="title"
                type="text"
                placeholder="Enter Twitter Link"
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="j92pzf"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Blog Description</p>
            <p className="text-xs">Write your best!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Blog Category
              </label>
              <input
                id="username"
                name="category"
                type="text"
                placeholder="Enter Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="bcxbv8"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Banner Image
              </label>
              <input
                id="website"
                name="image"
                placeholder="Paste Image Url"
                type="text"
                onChange={(e) => {
                  setImgUrl(e.target.value);
                }}
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="m6fi2r"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Second Image between the Paragraphs
              </label>
              <input
                id="website"
                name="image"
                placeholder="Paste Image Url"
                type="text"
                onChange={(e) => {
                  setImgUrl2(e.target.value);
                }}
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                fdprocessedid="m6fi2r"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para 1
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para 2
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription2(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para 3
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription3(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para After Image
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription4(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para 5
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription5(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Description Para 6
              </label>
              <textarea
                id="bio"
                onChange={(e) => {
                  setDescription6(e.target.value);
                }}
                type="text"
                placeholder="Write your Blog"
                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm"></label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://media.licdn.com/dms/image/D4D0BAQGeJclPbLtDag/company-logo_200_200/0/1662366268251?e=2147483647&v=beta&t=uTteQqDaAQBTwcFpdsiz1qFnZbNtB235gkZIxvw2l8o"
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border rounded-md dark:border-gray-100"
                  fdprocessedid="g5gr3c"
                >
                  Submit Blog!
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddBlog;
