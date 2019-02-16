import React, { useState } from 'react';
import st from './style.js';
export default function index(props) {
    const [isOpen, setIsOpen] = useState(true);

    if (isOpen) {
        return (
            <div style={st.sucessWrapper} onClick={() => setIsOpen(false)}>
                <span style={st.container}>{props.text}</span>
            </div>)
    }
    return null;
}
