const data={
  teachers:[],
  students:[]
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_TEACHER":
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
