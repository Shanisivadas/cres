import React, { useState } from "react";
import { useDispatch } from "react-redux";
function AddStudent() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const saveStudent = () => {
    dispatch({
      type: "ADD_STUDENT",
      payload: { name },
    });
  };
  return (
    <div classname="Container mt-5">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header text-white">
              <h2>Student Registration Form</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                 Name:{" "}
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter the name"
                  className="form-control"
                />
              </div>
              <button
                className="btn btn-primary px-5 mt-2"
                onClick={saveStudent}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="cols-sm-4"></div>
      </div>
    </div>
  );
}
export default AddStudent;
