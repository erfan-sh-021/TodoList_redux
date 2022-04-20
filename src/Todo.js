import React, { Component } from 'react';
class Todo extends Component {
    render() {
        let{text,onClick,compelete} =this.props
      return(
          <li 
              onClick={onClick}
              style={{textDecoration : compelete ? 'line-through' : 'none'}}
              >
            {text}
          </li>
        );
    }
}
 
export default Todo;