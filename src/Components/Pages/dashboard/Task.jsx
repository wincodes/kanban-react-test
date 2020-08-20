import React, { useRef } from "react";
import MainCard from "../cards/maincard";
import { useDrag, useDrop } from "react-dnd";

const Task = ({ data, name, targetStatus, changeTaskStatus }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(id, status) {
      changeTaskStatus(id, status, targetStatus);
    },
  });
  drop(ref);

  return (
    <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2" ref={ref}>
      <div className="p-2">
        <div className="pb-4">
          <span className="edit total-task pt-1 pb-1 pl-2 pr-2">
            {data.length}
          </span>{" "}
          {name}
        </div>
        <div className="pt-2">
          {data.map((task) => (
            <MainCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              tag={task.tag}
              duedate={task.duedate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
