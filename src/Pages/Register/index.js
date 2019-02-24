import React, { useState } from 'react'
import st from './style.js';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
import APIService from '../../Service/APIService';
import {Link} from 'react-router-dom';
import cp from '../../CopyDeck.js';

export default function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alias, setAlias] = useState("");
    const [badEmail, setBadEmail] = useState(false);
    const [badAlias, setBadAlias] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [okMail, setOkMail] = useState(false);
    const [okPassword, setOkPassword] = useState(false);
    const [okAlias, setOkAlias] = useState(false);

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleAlias(e) {
        setAlias(e.target.value);
    }
    function register() {
        const apiservice = new APIService();
        return apiservice.register(email, alias, password);
    }
    function onBlurEmail(e){
        if(!e.target.value.includes('@') || e.target.value.length === 0){
            return setBadEmail(true);
         }
         setBadEmail(false);
         setOkMail(true);
    }
    function onBlurAlias(e){
        if(e.target.value < 3){
            return setBadAlias(true);
        }
        setBadAlias(false);
        setOkAlias(true);
    }
    function onBlurPassword(e){
        if(e.target.value < 6){
            return setBadPassword(true);
        }
        setBadPassword(false);
        setOkPassword(true);
    }
    const InputError = (props) => {
        return (<span style={{color:'red',fontFamily:'Roboto, sans-serif'}}>{props.text}</span>);
     }
    return (
        <div>
            <div style={st.imgBD}>
                <div style={st.registerWrapper}>
                    <div style={st.registerContent}>
                        <div style={st.inputWrapper}>
                            <Input type="email" placeholder="E-mail: " onChange={handleEmail} onBlur={onBlurEmail} />
                        </div>
                        <div style={{textAlign:'center'}}>
                            {
                                badEmail? <InputError text="Verifique o E-mail"/>:null
                            }
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="text" placeholder="Apelido: " onChange={handleAlias} onBlur={onBlurAlias}/>
                        </div>
                        <div style={{textAlign:'center'}}>
                            {
                                badAlias? <InputError text="Verifique o apelido"/>:null
                            }
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="password" placeholder="Senha: " onChange={handlePassword} onBlur={onBlurPassword} />
                        </div>
                        <div style={{textAlign:'center'}}>
                            {
                                badPassword? <InputError text="Verifique a senha"/>:null
                            }
                        </div>
                        <div style={st.buttonWrapper}>
                            <div>
                                <Button text="Cadastrar" disable={!(okAlias && okMail && okPassword)} onClick={register}/>
                            </div>
                        </div>
                    </div>
                    <div style={st.registerLink}>
                        <Link to="/" style={st.link}>
                            <p>{cp.hasAccount}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
