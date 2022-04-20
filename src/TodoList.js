import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from './action'
import {SHOW_ALL,SHOW_COMPELET,SHOW_ACTIVE} from './action/actionType';

class TodoList extends Component {

    render() {
        let { todos } = this.props;

        return (
            <ul>
                {todos.map(todo => <Todo key={todo.id} {...todo}
                    onClick={() => this.props.dispatch(toggleTodo(todo.id))} />)}
            </ul>
        );
    }
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos
        case SHOW_COMPELET:
            return todos.filter(t=> t.compelete)
        case SHOW_ACTIVE:
            return todos.filter(t =>!t.compelete)

        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos,state.visibiityfilter)
    }
}
export default connect(mapStateToProps)(TodoList);