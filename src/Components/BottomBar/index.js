import React from 'react'
import st from './style.js';
import listImg from '../../Images/list.svg';
import locationImg from '../../Images/Component.svg';
import gearsImg from '../../Images/settings-gears.svg';
export default function index() {
  return (
    <div style={st.container}>
      <div style={st.content}>
        <div style={st.navItem}>
          <img src={listImg} alt="ver lista!" />
        </div>
        <div style={st.navItemLocation}>
          <img src={locationImg} alt="fazer check-in ou check-out" />
        </div>
        <div style={st.navItem}>
          <img src={gearsImg} alt="fazer check-in ou check-out" />
        </div>
      </div>
    </div>
  )
}
