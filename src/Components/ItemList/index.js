import React from 'react'
import st from './style.js'
export default function index(props) {
    console.log(props);
    function dateToString(date) {
        return date.split('T')[0].replace(/-/g, '/');
    }
    function hourToString(date) {
        return date.split('T')[1].slice(0, 5).replace(':', 'h');
    }
    return (
        <div style={st.container(props.dataLocation.status)}>
            <div style={st.content}>
                <div style={st.leftInformation}>
                    <span style={st.name}>
                        {props.dataLocation.alias}
                    </span>
                    <span style={st.address}>
                        {props.dataLocation.address}
                    </span>
                </div>
                <div style={st.rightInformation}>
                    <span style={st.center}>
                        {dateToString(props.dataLocation.date)}
                    </span>
                    <span style={st.center}>
                        {hourToString(props.dataLocation.date)}
                    </span>
                </div>
            </div>
        </div>
    )
}
