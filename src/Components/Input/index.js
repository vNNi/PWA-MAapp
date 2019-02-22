import React, { Component } from 'react';
import st from './style.js';

export default class index extends Component {
    render() {
        return (
            <div>
                <label style={st.label}>{this.props.placeholder}</label>
                <input type={this.props.type} style={st.input} onChange={this.props.onChange} onBlur={this.props.onBlur}></input>
            </div>
        )
    }
}
