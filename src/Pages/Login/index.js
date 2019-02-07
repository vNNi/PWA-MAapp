import React, { Component } from 'react';
import st from './style.js';
import cp from '../../CopyDeck';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div style={st.imgBD}>
                    <div style={st.loginWrapper}>
                        <div style={st.loginContent}>
                            <div style={st.title}>
                                <p>{cp.yourSecurity}</p>
                            </div>
                            <div style={st.inputWrapper}>
                                <Input type="email" placeholder="E-mail :" />
                            </div>
                            <div style={st.inputWrapper}>
                                <Input type="text" placeholder="Senha :" />
                            </div>
                            <div style={st.buttonWrapper}>
                                <Button text="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
