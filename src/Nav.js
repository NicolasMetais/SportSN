import React, { Component } from 'react';
import NavLeft from './NavLeft';
import NavRigth from './NavRigth';

class Navigateur extends Component {
    render(){
        return (
            <div>  
                <NavLeft></NavLeft>
                <NavRigth></NavRigth>
            </div>
        )
    }
}

export default Navigateur;