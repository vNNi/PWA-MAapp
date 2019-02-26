import React, {useState} from 'react';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import arrow from '../../Images/arrow.svg';
export default function index() {
    const [clickedMA, setClickedMA] = useState(false);
    const [clickedDev,setClickedDev] = useState(false);

    function onClickCollappse(){
        setClickedMA(!clickedMA);
    }
    function onClickCollappseDev(){
        setClickedDev(!clickedDev);
    }
  return (
      <div>
            <BottomNav/>
            <div style={st.container}>
                <div style={st.ctnHeader}>
                    <h1 style={st.title}>Configurações</h1>
                    <span style={st.subtitle}>Para mais detalhes/informações, entre em contato conosco!</span>
                </div>
                <div style={st.collapseContainer} onClick={onClickCollappse}>
                    <span style={st.collapseText}>Contate MA</span>
                    <img src={arrow} height="30" style={st.collapseImg(clickedMA)} alt="seta indicando component clicavel"/>
                </div>
                {clickedMA?(<div style={st.contact(clickedMA)}>
                    <ul style={st.ul}>
                        <li style={st.li}><a href="https://www.instagram.com/malvinegras/" style={st.link}>Instagram</a></li> 
                        <li style={st.li}><a href="https://twitter.com/MAlvinegras" style={st.link}>Twitter</a></li>
                        <li style={st.li}><a href="https://www.facebook.com/malvinegras/" style={st.link}>Facebook</a></li>
                    </ul>
                </div>):null}
                <div style={st.collapseContainer} onClick={onClickCollappseDev}>
                    <span style={st.collapseText}>Contate Desenvolvedor</span>
                    <img src={arrow} height="30" style={st.collapseImg(clickedDev)} alt="seta indicando component clicavel"/>
                </div>
                {clickedDev?(<div style={st.contact(clickedDev)}>
                    <ul style={st.ul}>
                    <li style={st.li}><a href="mailto:Vinicius_k2013@hotmail.com" style={st.link}>E-mail</a></li>
                    </ul>
                </div>):null}
            </div>
        </div>
    )
}
