import React, { Component } from 'react'
import st from './style.js';
import load from '../../Images/spinner.gif';
export default class index extends Component {
    render() {
        return (
            <div>
                <button style={st.button(this.props)} onClick={this.props.onClick} disabled={this.props.disable}>{this.props.text}{this.props.onLoading?<img src={load} height="20"/>:null}</button>
            </div>
        )
    }
}
