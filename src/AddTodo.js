import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from './action';
class AddTodo extends Component {
    state={
        inputText:''
    }
    handleChange=(event)=>{
        this.setState({
            inputText:event.target.value
        })
    }
    handelSubmit=(event)=>{
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText))
        this.setState({
            inputText:''
        })
    }
    render() { 
        return (
            <form onSubmit={this.handelSubmit}>
                <input value={this.state.inputText} onChange={this.handleChange}/>
                <button type='submit'>add </button>
            </form>
        );
    }
}
 
export default connect()(AddTodo);