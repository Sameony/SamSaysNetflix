import React from 'react';
import banner from './banner';
import "./homeScreen.css";
import Nav from './Nav';

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navigation */}
            <Nav></Nav>
            
            {/* Banner */}
            <banner></banner>
            {/* Row */}
        </div>
    )
}

export default HomeScreen;
