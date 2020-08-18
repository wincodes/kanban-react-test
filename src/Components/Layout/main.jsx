import React from "react";
import Sidebar from "./sidebar"
import Content from "./content"

const Main = () => {
  return (
    <div className="row">
      <div className="col-2 p-0">
        <Sidebar />
      </div>
      <div className="col-10 p-0">
        <Content />
      </div>
    </div>
  );
};

export default Main;
