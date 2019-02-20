import React from 'react'
import st from './style.js';
import errorImg from '../../Images/404.svg';
import CopyDeck from '../../CopyDeck.js';
import { Link } from 'react-router-dom';
import BottomNav from '../../Components/BottomBar/index';

export default function index() {
    return (
        <div>
            <div style={st.container}>
                <img src={errorImg} style={st.img} alt="pagina triste" />
                <span style={st.textError}> {CopyDeck.notFoundPage}</span>
                <Link to="/list" style={st.link}>Clique aqui para voltar</Link>
            </div>
            <BottomNav/>
        </div>
    )
}
