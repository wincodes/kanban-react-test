import React from "react";

const Stages = () => {
  return (
    <div className="project-columns d-flex flex-auto flex-column clearfix position-relative no-wrap ">
      <div className="project-columns-container d-flex flex-auto flex-row position-relative overflow-hidden">
        <div className="d-flex flex-auto flex-row width-full ">
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="requested pt-1 pb-1 pl-2 pr-2 number">24</span>{" "}
              Requested
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="edit pt-1 pb-1 pl-2 pr-2">0</span> Edits
              Requested
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="revision pt-1 pb-1 pl-2 pr-2">1</span> In
              Revision
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="p-approval pt-1 pb-1 pl-2 pr-2">5</span> Pending
              Approval
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="p-implementation  pt-1 pb-1 pl-2 pr-2">1</span>{" "}
              Peding Implementation
            </div>
          </div>
          <div className="project-column position-relative d-flex flex-auto flex-column overflow-hidden pl-2 pt-2">
            <div className="p-2">
              <span className="bg-primary  pt-1 pb-1 pl-2 pr-2">4</span> Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
