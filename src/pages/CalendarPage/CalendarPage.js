import React from "react";
import Calendar from "../../components/calendar/Calendar";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../ListTable/ListTable.scss";

const ListTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Calendar />
      </div>
    </div>
  );
};

export default ListTable;
