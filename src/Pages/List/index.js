import React, { Component, Suspense, lazy } from 'react'
import cp from '../../CopyDeck';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Legend from '../../Components/Legend/index';
import { Redirect } from 'react-router-dom';
import Success from '../../Components/SucessSpan/index';
import APIService from '../../Service/APIService';
const ItemList = lazy(() => import('../../Components/ItemList/index'));
export default class index extends Component {
    constructor(props) {
        super(props);
        this.apiservice = new APIService();
    }
    state = {
        locationList: [],
    }
    componentDidMount() {
        this.apiservice.getLocationList().then((data) => {
            if(data){
            this.setState({
                locationList: this.state.locationList.concat(data.list),
            });
            }
        })
    };
    render() {
        const sucessLocation = (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Success text="Check Feito com sucesso!" />
            </div>
        );
        const loadingImg = <div className="album-img">
            <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
        </div>
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

                    {this.state.locationList.map((location, index) => {
                        return (
                            <Suspense key={index} fallback={loadingImg}>
                                <ItemList dataLocation={location} />
                            </Suspense>
                        );
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
