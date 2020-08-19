import React from "react";
import Category from "@material-ui/icons/Category";
import CalendarToday from "@material-ui/icons/CalendarToday";

const MainCard = ({ title, description, tag, duedate }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{description}</p>
        <div className="tag">
          {" "}
          <span>
            <Category className="smallx" />
          </span>{" "}
          {tag}
        </div>
        <hr />
        <div className="due-date">
          {" "}
          <span>
            <CalendarToday className="smallx" />
          </span>{" "}
          {duedate}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
