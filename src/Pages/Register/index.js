import React from 'react'
import st from './style.js';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
export default function index() {
    return (
        <div>
            <div style={st.imgBD}>
                <div style={st.registerWrapper}>
                    <div style={st.registerContent}>
                        <div style={st.inputWrapper}>
                            <Input type="email" placeholder="E-mail: " />
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="text" placeholder="Apelido: " />
                        </div>
                        <div style={st.inputWrapper}>
                            <Input type="password" placeholder="Senha: " />
                        </div>
                        <div style={st.buttonWrapper}>
                            <Button text="Cadastrar" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
