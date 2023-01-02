import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from "../firebaseBlog";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout/Logout";

const BlogDisplay = () => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/blogs/new");
  };

  useEffect(() => {
    const blogref = collection(db, "finalBlog");
    const q = query(blogref, orderBy("createDate", "desc"));

    onSnapshot(q, (snapshot) => {
      const allBlogs = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));

      setBlogs(allBlogs);
    });
  }, []);
  // return (
  //   <div>
  //     {blogs.length === 0 ? (
  //       <p>No Blogs found!</p>
  //     ) : (
  //       blogs.map((blog) => (
  //         <div className="blog-container" key={blog.id}>
  //           <div className="section1">
  //             <p>{blog.title}</p>
  //             <p>{blog.createdBy}</p>
  //           </div>
  //           <div className="section2">
  //             <p>
  //               <img src={blog.imgUrl} alt="" />
  //             </p>
  //             {blog.description}
  //           </div>
  //           <div className="section3">
  //             <p> posted on = {blog.createDate}</p>
  //           </div>
  //         </div>
  //       ))
  //     )}
  //   </div>
  // );

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="flex justify-between  px-5">
        <div className="">
          <h1 className="flex items-center pt-5 pb-2 text-5xl font-extrabold dark:text-white">
            Jamesons' Blogs
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              PRO
            </span>
          </h1>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 mr-6 mt-8  font-semibold border rounded dark:border-violet-700 dark:text-gray-100"
            fdprocessedid="m4y18"
            onClick={handleClick}
          >
            Create New Blogs
          </button>
          <Logout />
        </div>
      </div>
      <hr className="mb-4 mx-auto w-480 h-1 bg-white rounded border-0 md:my-10 dark:bg-gray-700" />

      <div className="container max-w-6xl py-3 mx-auto space-y-6 sm:space-y-12">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={blog.imgUrl}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blog.title.split(".")[0]}
              </h3>
              <span className="text-xs dark:text-gray-400">
                {blog.createDate}
              </span>
              <p>{blog.description.slice(0, 600)} ...</p>
              {/* <a
                href="https://www.jamesonsinfosolutions.com/blogs"
                className="p-3 text-violet-500 hover:text-violet-600 active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
              >
                Read More
              </a> */}
            </div>
          </a>
        ))}
        {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={blog.imgUrl}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {blog.title}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {blog.createDate}
                </span>
                <p>{blog.description}</p>
              </div>
            </a>
          ))}
        </div> */}
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            fdprocessedid="8or1b"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDisplay;

// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// import { db } from "../firebaseConfig";
// import "../App.css";

// const BlogDisplay = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const blogref = collection(db, "Blog");
//     const q = query(blogref);

//     onSnapshot(q, (snapshot) => {
//       const allBlogs = snapshot.docs.map((docs) => ({
//         id: docs.id,
//         ...docs.data(),
//       }));

//       setBlogs(allBlogs);
//     });
//   }, []);
//   return (
//     <div>
//       {blogs.length === 0 ? (
//         <p>No Blogs found!</p>
//       ) : (
//         blogs.map((blog) => (
//           <div className="blog-container" key={blog.id}>
//             <div className="section1">
//               <p>{blog.title}</p>
//               <p>{blog.createdBy}</p>
//               <p>{blog.category}</p>
//             </div>
//             <div className="section2">
//               <p>
//                 <img src={blog.imgUrl} alt="" />
//               </p>
//               {blog.description}
//             </div>
//             <div className="section3">
//               <p> posted on = {blog.createDate}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BlogDisplay;
