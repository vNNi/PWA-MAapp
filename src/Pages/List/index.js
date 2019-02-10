import React, { Component } from 'react'
import cp from '../../CopyDeck';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Legend from '../../Components/Legend/index';
import ItemList from '../../Components/ItemList/index';
import { Redirect } from 'react-router-dom';
export default class index extends Component {
    render() {
        const list = (
            <div>
                <BottomNav />
                <div style={st.headerContainer}>
                    <h1 style={st.title}>{cp.checkList}</h1>
                    <p style={st.subtitle}>{cp.listSubtitle}</p>
                </div>
                <div style={st.legendWrapper}>
                    <Legend />
                </div>
                <div style={st.listWrapper}>
                    <ItemList />
                </div>
            </div>
        );
        const logged = localStorage.getItem('token');
        return (
            <div>
                {
                    logged ? list : <Redirect to="/" />
                }
            </div>
        )
    }
}
