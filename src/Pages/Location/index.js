import React from 'react';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Button from '../../Components/Button/index';
import cp from '../../CopyDeck';
import APIService from '../../Service/APIService';
export default function index() {
    function checkIn() {
        const apiservice = new APIService();
        return apiservice.newLocation(1, "check-in");
    }
    return (
        <div style={st.imgBd}>
            <BottomNav />
            <div style={st.locationTitle}>
                <span>{cp.doCheckinOrCheckout}</span>
            </div>
            <div style={st.buttonWrapper}>
                <Button text="Check-in" backgroundColor="black" color="" onClick={checkIn} />
                <Button text="Check-out" backgroundColor="white" color="black" />
            </div>
        </div>
    )
}
