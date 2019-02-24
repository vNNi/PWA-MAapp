import React, { Component } from 'react';
import st from './style.js';
import cp from '../../CopyDeck';
import Input from '../../Components/Input/index';
import Button from '../../Components/Button/index';
import APIService from '../../Service/APIService';
import Error from '../../Components/ErrorSpan/index';
import {Link} from 'react-router-dom';
export default class Login extends Component {
    constructor(props) {
        super();
        this.apiservice = new APIService();
    }
    state = {
        email: '',
        password: '',
        disableButton: true,
        badEmail: false,
        badPassword: false,
        okEmail: false,
        okPassword: false,
    }
    login = () => {
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
    }
    onBlurEmail = (e) => {
        if(!e.target.value.includes('@') || e.target.value.length === 0){
           return this.setState({
                badEmail: true,
            });
        }
        this.setState({
            badEmail: false,
            okEmail: true,
        });
    }
    onBlurPassword = (e) => {
        if(e.target.value.length < 4){
            return this.setState({
                 badPassword: true,
             });
         }
         this.setState({
             badPassword: false,
             okPassword: true,
         });
    }
    render() {

        const unauthorizedError = (
                <Error text="Faça login para continuar !" />);

        const InputError = (props) => {
           return (<span style={{color:'red',fontFamily:'Roboto, sans-serif'}}>{props.text}</span>);
        }
        return (
            <div>
                <div style={st.imgBD}>
                    <div style={st.loginWrapper}>
                        {this.props.location.state ? (this.props.location.state.unauthorized ? unauthorizedError : null) : null}
                        <div style={st.loginContent}>
                            <div style={st.title}>
                                <p>{cp.yourSecurity}</p>
                            </div>
                                <div style={st.inputWrapper}>
                                    <Input type="email" placeholder="E-mail :" onChange={this.handleEmail} onBlur={this.onBlurEmail} />
                                </div>
                                    {
                                        this.state.badEmail?
                                    (<div>
                                        <InputError text="Verifique seu e-mail"/>
                                    </div>):null
                                    }
                                <div style={st.inputWrapper}>
                                    <Input type="text" placeholder="Senha :" onChange={this.handlePassword} onBlur={this.onBlurPassword}/>
                                </div>
                                {
                                        this.state.badPassword?
                                    (<div>
                                        <InputError text="Senha precisa ter no mínimo 4 caracters"/>
                                    </div>):null
                                    }
                                <div style={st.buttonWrapper}>
                                    <div onClick={this.login}>
                                        <Button text="Login" onClick={this.login} disable={!(this.state.okEmail && this.state.okPassword)}/>
                                    </div>
                                </div>
                        </div>
                        <div style={st.registerLink}>
                            <Link to="/register" style={st.link}>
                                <p>{cp.dontHasAccount}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
