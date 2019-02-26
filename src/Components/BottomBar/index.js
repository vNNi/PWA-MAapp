import React from 'react'
import st from './style.js';
import listImg from '../../Images/list.svg';
import locationImg from '../../Images/Component.svg';
import gearsImg from '../../Images/settings-gears.svg';
import { Link } from 'react-router-dom'
export default function index() {
  return (
    <div style={st.container}>
      <div style={st.content}>
        <div style={st.navItem}>
          <Link to="/list">
            <img src={listImg} alt="ver lista!" />
          </Link>
        </div>
        <div style={st.navItemLocation}>
          <Link to="/location">
            <img src={locationImg} alt="fazer check-in ou check-out" />
          </Link>
        </div>
        <div style={st.navItem}>
          <Link to="/settings">
            <img src={gearsImg} alt="fazer check-in ou check-out" />
          </Link>
        </div>
      </div>
    </div>
  )
}
