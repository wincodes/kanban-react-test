import React, { useCallback, useRef } from "react";
import Category from "@material-ui/icons/Category";
import CalendarToday from "@material-ui/icons/CalendarToday";

import { useDrag, useDrop } from "react-dnd";

const MainCard = ({ id, title, description, tag, duedate }) => {
  const ref = useRef(null);
  const [{ isDragging, }, drag] = useDrag({
    item: { type: "card", id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  return (
    <div className="card mb-3" ref={ref} style={{ opacity }}>
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
