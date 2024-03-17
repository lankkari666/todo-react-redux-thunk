import { combineReducers } from "redux";
import { tasks } from "./tasks";
import {options} from "./options"
export default combineReducers({
	todos: tasks,
	options: options
});
