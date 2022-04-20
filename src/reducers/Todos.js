import {TOGGLE_TODO,ADD_TODO} from '../action/actionType'
export const todos = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    compelete: false,
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                return (todo.id === action.id)
                    ? { ...todo, compelete: !todo.complete }
                    : todo
            })

        default:
            return state;
    }
}