import React, { Component } from 'react'
import st from './style.js';
export default class index extends Component {
    render() {
        return (
            <div>
                <button style={st.button}>{this.props.text}</button>
            </div>
        )
    }
}
