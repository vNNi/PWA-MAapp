import React, { Component } from 'react';
import st from './style.js';
import cp from '../../CopyDeck';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
import APIService from '../../Service/APIService';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.apiservice = new APIService();
    }
    state = {
        email: '',
        password: '',
    }
    login = (e) => {
        this.apiservice.login(this.state.email, this.state.password);
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
        console.log('222');
    }
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
                                <Input type="email" placeholder="E-mail :" onChange={this.handleEmail} />
                            </div>
                            <div style={st.inputWrapper}>
                                <Input type="text" placeholder="Senha :" onChange={this.handlePassword} />
                            </div>
                            <div style={st.buttonWrapper}>
                                <div onClick={this.login}>
                                    <Button text="Login" />
                                </div>
                            </div>
                        </div>
                        <div style={st.registerLink}>
                            <p>{cp.dontHasAccount}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
