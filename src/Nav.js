import React, { Component } from 'react';
import './NavLeft';
import './NavRigth';

class Nav extends Component {
    render(){
        return (
            <div>  
                <NavLeft></NavLeft>
                <NavRigth></NavRigth>
            </div>
        )
    }
}

export default Nav;