import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div class='f1 tc'>
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p>
        </div>
        )
    }
}


{/*
React Components are really just functions that take parameters that have attributes/values that render into the DOM.

const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{props.greeting}</p>
        </div>
    );
}

*/}
export default Hello;