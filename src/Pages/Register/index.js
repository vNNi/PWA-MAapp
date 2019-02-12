import React, { useState } from 'react'
import st from './style.js';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
import APIService from '../../Service/APIService';
export default function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alias, setAlias] = useState("");

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
    return (
        <div>
            <div style={st.imgBD}>
                <div style={st.registerWrapper}>
                    <div style={st.registerContent}>
                        <div style={st.inputWrapper}>
                            <Input type="email" placeholder="E-mail: " onChange={handleEmail} />
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="text" placeholder="Apelido: " onChange={handleAlias} />
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="password" placeholder="Senha: " onChange={handlePassword} />
                        </div>
                        <div style={st.buttonWrapper}>
                            <div onClick={register}>
                                <Button text="Cadastrar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
