import React from 'react';
import Banner from './banner';
import "./homeScreen.css";
import Nav from './Nav';

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navigation */}
            <Nav></Nav>
            
            {/* Banner */}
            <Banner></Banner>
            {/* Row */}
        </div>
    )
}

export default HomeScreen;
