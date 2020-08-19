import React, { useState } from "react";
import firebase from "../../../firebase";

const CreateModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [duedate, setDuedate] = useState("");
  const [error, setError] = useState("");

  const createTask = () => {
      setError('')
    if (title === "" || description === "" || tag === "" || duedate === "") {
      setError("All fields are compulsory");
    } else {
      firebase.firestore()
        .collection("tasks")
        .add({
          title,
          description,
          tag,
          duedate,
          status: 'requested'
        })
        .then(() => {
          setTitle("");
          setDescription("");
          setTag("");
          setDuedate("");
        });
    }
  };

  return (
    <div
      className="modal fade"
      id="createModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create a Task {error && <div className="text-danger"> {error}</div>}
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <label>Tag</label>
              <select
                className="custom-select"
                value={tag}
                onChange={(e) => setTag(e.currentTarget.value)}
              >
                <option value="">Choose...</option>
                <option value="seoarticle">Seo Article</option>
                <option value="longform">Longform</option>
                <option value="blogpost">Blog Post</option>
              </select>
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="date"
                value={duedate}
                onChange={(e) => setDuedate(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createTask}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
