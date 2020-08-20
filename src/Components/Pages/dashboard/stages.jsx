import React, { useCallback } from "react";
import { DndProvider } from "react-dnd";
import firebase from "../../../firebase";
import Task from "./Task";
import HTML5Backend from "react-dnd-html5-backend";

const Stages = ({ tasks }) => {
  const requested = tasks.filter((task) => {
    return task.status === "requested";
  });

  const edit = tasks.filter((task) => {
    return task.status === "edit";
  });

  const revision = tasks.filter((task) => {
    return task.status === "revision";
  });

  const pendingApproval = tasks.filter((task) => {
    return task.status === "pendingApproval";
  });

  const pendingImplementation = tasks.filter((task) => {
    return task.status === "pendingImplementation";
  });

  const done = tasks.filter((task) => {
    return task.status === "done";
  });

  const changeTaskStatus = useCallback(
    (id, status, targetStatus) => {
      let task = tasks.find((task) => task.id === id.id);
      if (task !== undefined) {
        task.status = targetStatus;
        delete task.id;
        firebase
          .firestore()
          .collection("tasks")
          .doc(id.id)
          .update(task);
      }
    },
    [tasks]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="project-columns d-flex flex-auto flex-column clearfix position-relative no-wrap ">
        <div className="project-columns-container d-flex flex-auto flex-row position-relative overflow-hidden">
          <div className="d-flex flex-auto flex-row width-full ">
            <Task
              data={requested}
              changeTaskStatus={changeTaskStatus}
              targetStatus="requested"
              name="Requested"
            />
            <Task
              data={edit}
              changeTaskStatus={changeTaskStatus}
              targetStatus="edit"
              name="Edits Requested"
            />
            <Task
              data={revision}
              changeTaskStatus={changeTaskStatus}
              targetStatus="revision"
              name="Revision"
            />
            <Task
              data={pendingApproval}
              changeTaskStatus={changeTaskStatus}
              targetStatus="pendingApproval"
              name="Pending Approval"
            />
            <Task
              data={pendingImplementation}
              changeTaskStatus={changeTaskStatus}
              targetStatus="pendingImplementation"
              name="Pending Implementation"
            />
            <Task
              data={done}
              changeTaskStatus={changeTaskStatus}
              targetStatus="done"
              name="Done"
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Stages;
