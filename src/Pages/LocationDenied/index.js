import React from 'react';
import st from './style';
import map from '../../Images/map.svg';
import BottomNav from '../../Components/BottomBar/index'
export default function index() {
    function isIOS(platform) {
        return /iPad|iPhone|iPod/.test(platform);
    }
    function iosDesc(){
        return (<div>
        <p>1. Acesse as configurações do seu celular;</p>
        <p>2. Vá na aba de Privacidade;</p>
        <p>3. Entre em Serviços de Localização (ative caso esteja desativado);</p>
        <p>4. Encontre seu navegador que está utilizando e ative a permissão de localização!</p>
        <p>5. Após feito isso, clique aqui para voltar</p>
    </div>);
    }
    function otherDesc(){
        return(<div>
          <p>1. Aceite a permissão de localização;</p>
          <p>2. Faça seu check-in/check-out novamente;</p>
        </div>);
    }
        
    return(
        <div>
            <div style={st.ctnTop}>
                <h1 style={st.title}> Permissão de localização!</h1>
                <span style={st.subtitle}>Precisamos acessar sua localização para continuar</span>
            </div>
            <div style={st.ctnMap}>
                < img src={map} height="133px" alt="map" />
            </div>
            <div style={st.ctnDesc}>
                {isIOS(navigator.platform) ? iosDesc(): otherDesc()}
            </div> 
            < BottomNav /> 
        </div> 
        )   
}   
                            