import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Scheduler from "../../components/calendar/Calendar";
import Chart from "../../components/charts/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/blogs/all");
  };

  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <section className="py-6 pb-60  w-full h-full dark:bg-violet-400 dark:text-gray-900">
        <div className="container  mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Why Write Blogs!
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            There are plenty of benefits to blogging -- it helps drive traffic
            to your website, it enables you to better convert that traffic into
            leads, it allows your business to establish authority in an
            industry, and it continues to help your business grow and attract
            new customers months and even years after publication.
          </p>

          <button
            className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
            fdprocessedid="3890lq"
            onClick={handleSubmit}
          >
            Welcome to Jamesons' Blogs
          </button>
        </div>
      </section>
    </div>
  );
};

//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="employee" />
//           <Widget type="" />
//           <Widget type="" />
//           <Widget type="" />
//         </div>
//         <div className="charts">
//           {/* <Scheduler /> */}
//           <Featured />
//           <Chart title="Last 6 months Revenue" aspect={2 / 1} />
//         </div>
//         <div className="listContainer">
//           <div className="listTitle">Latest Transactions</div>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
