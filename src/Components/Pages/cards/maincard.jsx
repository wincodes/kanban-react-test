import React, { useRef, useState } from "react";
import Category from "@material-ui/icons/Category";
import CalendarToday from "@material-ui/icons/CalendarToday";
import moment from "moment";

import { useDrag } from "react-dnd";

const MainCard = ({
  id,
  title,
  description,
  tag,
  duedate,
  isClicked,
  selected,
}) => {
  const [bg, setBg] = useState("");
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: "card", id, selectedIds: selected },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const doClick = (cmdKey, shiftKey, ctrlKey, id) => {
    isClicked(cmdKey, shiftKey, ctrlKey, id);

    if (selected.includes(id)) setBg("border-warning");
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <div
      className={`card mb-3 ${selected.includes(id) ? "border-warning" : ""}`}
      ref={ref}
      style={{ opacity }}
      onClick={(e) => doClick(e.metaKey, e.shiftKey, e.ctrlKey, id)}
    >
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{description}</p>
        <div className="tag">
          {" "}
          <span>
            <Category className="smallx" />
          </span>{" "}
          <span className="pl-2 pt-1">{capitalize(tag)}</span>
        </div>
        <hr />
        <div className="due-date">
          {" "}
          <span>
            <CalendarToday className="smallx" />
          </span>{" "}
          <span className="pl-2 pt-1">{moment(duedate).format("MM/DD/YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
