import React from "react";
import { useSelector } from "react-redux";

function TeacherList() {
  const teachers = useSelector((state) => state.teachers);

  return (
    <div>
      <table className="table table-hover">
        <tr>
          {" "}
          <th>Id</th>
          <th>IName</th>
        </tr>
        {teachers && teachers.length > 0 ? (
          teachers.map((teacher, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{teacher.name}</td>
              </tr>
            );
          })
        ) : (
          <div>NO TEACHER AVAILABLE</div>
        )}
      </table>
    </div>
  );
}

export default TeacherList;
