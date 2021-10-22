import React from 'react'
import './banner.css';

function banner() {
    return (
        <header
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80")`,
            backgroundPosition: "center center",
        }}>
        <div className="bannerContents">
            <h1 className="banner_title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="actualBannerButton">Play</button>
                <button className="actualBannerButton">My List</button>
            </div>
            <h1 className="banner_description"> Testing description</h1>
        </div>
        <div className="banner--fadeBottom:" />
        </header>
    )
}

export default banner
