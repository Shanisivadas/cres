import React from "react";
import AddTeacher from "./Teacher/AddTeacher";
import TeacherList from "./Teacher/TeacherList";
import AddStudent from "./Student/AddStudent";
import StudentList from "./Student/StudentList";
class Home extends React.Component {
  render() {
    return (
      <div>
       <AddTeacher />
        <TeacherList />
        <AddStudent/>
        <StudentList/>
      </div>
    );
  }
}
export default Home;
