import {SET_VISIBILITY_ACTION, SHOW_ALL} from './../action/actionType'
 const visibiityfilter = (state = SHOW_ALL, action )=>{
    switch (action.type) {
        case SET_VISIBILITY_ACTION:
            return action.filter
        default:
            return state; 
    }
}
export default visibiityfilter;