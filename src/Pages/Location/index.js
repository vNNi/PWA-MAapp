import React from 'react';
import st from './style.js';
import BottomNav from '../../Components/BottomBar/index';
import Button from '../../Components/Button/index';
import cp from '../../CopyDeck';
export default function index() {
    return (
        <div style={st.imgBd}>
            <BottomNav />
            <div style={st.locationTitle}>
                <span>{cp.doCheckinOrCheckout}</span>
            </div>
            <div style={st.buttonWrapper}>
                <Button text="Check-in" />
                <Button text="Check-out" />
            </div>
        </div>
    )
}