import React from 'react'
import st from './style.js'
export default function index() {
    return (
        <div style={st.container}>
            <div style={st.content}>
                <div style={st.leftInformation}>
                    <span style={st.name}>
                        Lais Alvarenga
                </span>
                    <span>
                        Rua pereira barreto - 195
                </span>
                </div>
                <div style={st.rightInformation}>
                    <span style={st.center}>
                        08/12/1999
               </span>
                    <span style={st.center}>
                        14h55
                </span>
                </div>
            </div>
        </div>
    )
}
