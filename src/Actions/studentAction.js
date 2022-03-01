import myStore from "../redux/Store";

const addStudent = (studentDetails) => {
  myStore.dispatch({
    type: "ADD_STUDENT",
    payload: studentDetails,
  });
};

const deleteStudent = (studentDetails) => {
  myStore.dispatch({
    type: "DELETE_STUDENT",
    payload: studentDetails,
  });
};

export { addStudent, deleteStudent };
