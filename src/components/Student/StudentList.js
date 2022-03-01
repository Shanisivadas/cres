import React from "react";
import { useSelector } from "react-redux";

function StudentList() {
  const students = useSelector((state) => state.students);

  return (
    <div>
      <table className="table table-hover">
        <tr>
          {" "}
          <th>Id</th>
          <th>IName</th>
        </tr>
        {students && students.length > 0 ? (
          students.map((students, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{students.name}</td>
              </tr>
            );
          })
        ) : (
          <div>NO STUDENT AVAILABLE</div>
        )}
      </table>
    </div>
  );
}

export default StudentList;
