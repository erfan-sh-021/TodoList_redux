import React, { Component } from 'react';
import Filter from './FilterLink'
import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPELET} from './action/actionType'

class Footer extends Component { 
    render() { 
        return (
            <div>
                <span>show : </span>
                <Filter filter  = {SHOW_ALL}>all</Filter>
                <Filter filter  = {SHOW_ACTIVE}>active</Filter>
                <Filter filter  = {SHOW_COMPELET}>compelete</Filter>

            </div>
        );
    }
}
 
export default Footer;