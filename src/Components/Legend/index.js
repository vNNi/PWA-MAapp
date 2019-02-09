import React from 'react';
import st from './style.js';
export default function index() {
    return (
        <div style={st.container}>
            <div style={st.content}>
                <div style={st.checkinBox}></div>
                <span>Check-in</span>
            </div>
            <div style={st.content}>
                <div style={st.checkoutBox}></div>
                <span>Check-out</span>
            </div>
        </div>
    )
}
