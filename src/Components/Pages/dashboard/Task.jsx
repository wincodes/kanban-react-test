import React, { useRef, useState } from "react";
import MainCard from "../cards/maincard";
import { useDrop } from "react-dnd";

const Task = ({ data, name, targetStatus, changeTaskStatus }) => {
  const [selected, setSelected] = useState([]);
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(id, status) {
      const { selectedIds } = id;
      if (selectedIds.length === 0) {
        changeTaskStatus(id, status, targetStatus);
      } else {
        selectedIds.forEach((el) => {
          const id = { id: el };
          changeTaskStatus(id, status, targetStatus);
        });
      }
    },
  });
  drop(ref);

  const selectCard = (cmdKey, shiftKey, ctrlKey, id) => {
    if (cmdKey || shiftKey || ctrlKey) {
      const existingSelection = selected;
      if (!existingSelection.includes(id)) existingSelection.push(id);
      setSelected(existingSelection);
    } else {
      setSelected([]);
    }
  };

  return (
    <div
      className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2"
      ref={ref}
    >
      <div className="p-2">
        <div className="pb-4">
          <span className={`${targetStatus} total-task pt-1 pb-1 pl-2 pr-2`}>
            {data.length}
          </span>{" "}
          {name}
        </div>
        <div className="pt-2">
          {data.map((task) => (
            <MainCard
              isClicked={selectCard}
              selected={selected}
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
