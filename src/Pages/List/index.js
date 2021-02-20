import React, { Component, Suspense, lazy, useState, useEffect } from 'react'
import cp from '../../CopyDeck';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Legend from '../../Components/Legend/index';
import { Redirect } from 'react-router-dom';
import Success from '../../Components/SucessSpan/index';
import APIService from '../../Service/APIService';
const ItemList = lazy(() => import('../../Components/ItemList/index'));

const Page = (props) => {
   const ApiService = new APIService();

    const [locationList, setLocationList] = useState([]);

        useEffect(() => {
            async function getLocations() {
                const data = await ApiService.getLocationList();
                    if(data){
                        setLocationList(locationList.concat(data.list));
                    }
            };
            getLocations();
        }, []); 

        const successLocation = (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Success text="Check Feito com sucesso!" />
            </div>
        );
        const loadingImg = <div style={{display: 'flex',justifyContent:'center'}}>
            <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
        </div>
        const list = (
            <div>
                <BottomNav />
                <div style={st.headerContainer}>
                    <h1 style={st.title}>{cp.checkList}</h1>
                    <p style={st.subtitle}>{cp.listSubtitle}</p>
                    {this.props.location.state ? (this.props.location.state.newLocation ? successLocation : null) : null}
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

export default Page;