import myStore from "../redux/Store";
const addTeacher = (teacherDetails) => {
  myStore.dispatch({
    type: "ADD_TEACHER",
    payload: teacherDetails,
  });
};

const deleteTeacher = (teacherDetails) => {
  myStore.dispatch({
    type: "DELETE_TEACHER",
    payload: teacherDetails,
  });
};

export { addTeacher, deleteTeacher };
