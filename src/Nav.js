import React from 'react';
import "./nav.css";

function Nav() {
    return (
        <div className="navBar">
            <div className="navLogos">
                <img className="nav_Logo"
                 src="https://www.thebullwark.in/images/clients/netflix.jpg" alt="netflix logo">

                </img>
                <img className="nav_avatar_Logo"
                 src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/baffc96f5eccbde6402befe0_rw_600.png?h=cc45688ebccb59201761f059f3f4e5e3" alt="avatar">

                </img>
            </div>
        </div>
    )
}

export default Nav
