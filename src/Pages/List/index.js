import React, { Component } from 'react'
import cp from '../../CopyDeck';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Legend from '../../Components/Legend/index';
import ItemList from '../../Components/ItemList/index';
import { Redirect } from 'react-router-dom';
import Success from '../../Components/SucessSpan/index';
import APIService from '../../Service/APIService';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.apiservice = new APIService();
    }
    state = {
        locationList: []
    }
    componentWillMount() {
        const locationList = this.apiservice.getLocationList();
        this.setState({ locationList: this.state.locationList.concat(locationList) });
    }
    render() {
        const sucessLocation = (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Success text="Check Feito com sucesso!" />
            </div>
        );
        const list = (
            <div>
                <BottomNav />
                <div style={st.headerContainer}>
                    <h1 style={st.title}>{cp.checkList}</h1>
                    <p style={st.subtitle}>{cp.listSubtitle}</p>
                    {this.props.location.state ? (this.props.location.state.newLocation ? sucessLocation : null) : null}
                </div>
                <div style={st.legendWrapper}>
                    <Legend />
                </div>
                <div style={st.listWrapper}>
                    {this.state.locationList.map((location) => {
                        return <ItemList dataLocation={location} />;
                    })}

                </div>
            </div>
        );
        const logged = localStorage.getItem('token');
        return (
            <div>
                {
                    logged ? list : <Redirect to={{ pathname: '/', state: { unauthorized: true } }} />
                }
            </div>
        )
    }
}
