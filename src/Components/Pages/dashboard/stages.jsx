import React, { useState, useEffect } from "react";
import MainCard from "../cards/maincard";
import firebase from "../../../firebase";

const getTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("tasks")
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((el) => ({
          id: el.id,
          ...el.data(),
        }));
        setTasks(newTasks);
      });
  }, []);

  return tasks;
};

const Stages = () => {
  const tasks = getTasks();
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
    return task.status === "pedingApproval";
  });

  const pendingImplementation = tasks.filter((task) => {
    return task.status === "pendingImplementation";
  });

  const done = tasks.filter((task) => {
    return task.status === "done";
  });
  return (
    <div className="project-columns d-flex flex-auto flex-column clearfix position-relative no-wrap ">
      <div className="project-columns-container d-flex flex-auto flex-row position-relative overflow-hidden">
        <div className="d-flex flex-auto flex-row width-full ">
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="requested total-task pt-1 pb-1 pl-2 pr-2 number">
                  {requested.length}
                </span>{" "}
                Requested
              </div>
              <div className="pt-2" >
                {requested.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="edit total-task pt-1 pb-1 pl-2 pr-2">{edit.length}</span> Edits
                Requested
              </div>
              <div className="pt-2">
                {edit.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="revision total-task pt-1 pb-1 pl-2 pr-2">{revision.length}</span> In
                Revision
              </div>
              <div className="pt-2">
                {revision.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="p-approval total-task pt-1 pb-1 pl-2 pr-2">{pendingApproval.length}</span>{" "}
                Pending Approval
              </div>
              <div className="pt-2">
                {pendingApproval.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="p-implementation total-task  pt-1 pb-1 pl-2 pr-2">{pendingImplementation.length}</span>{" "}
                Peding Implementation
              </div>
              <div className="pt-2">
                {pendingImplementation.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <div className="pb-4">
                <span className="bg-primary total-task pt-1 pb-1 pl-2 pr-2">{done.length}</span> Done
              </div>
              <div className="pt-2">
                {done.map((task) => (
                  <MainCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    tag={task.tag}
                    duedate={task.duedate}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
