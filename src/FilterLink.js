import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from './action';
class FilterLink extends Component {

    render() { 
        let {children,active,onClick} = this.props;
        return (
            <button onClick={ onClick} disabled={active} style={{marginLeft : '4px'}}>{children}</button>
        );
    }
}
const mapStateToProps = (state , ownProps)=>{
    return {
        active : ownProps.filter === state.visibiityfilter
    }
} 

const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        onClick : () =>dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterLink);