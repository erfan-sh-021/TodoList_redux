import { combineReducers } from "redux";
import { todos } from "./Todos";
import visibiityfilter from './VisibilityFilter'

export default combineReducers({
    todos ,
    visibiityfilter 
})