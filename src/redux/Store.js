import { createStore } from "redux";
import reducer from "../Reducers/reducer";

const myStore = createStore(reducer);

export default myStore;
