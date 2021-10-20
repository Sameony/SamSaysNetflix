import React from 'react';
import { useState, useEffect }  from 'react';
import "./nav.css";

function Nav() {
    const [show, updateShow] = useState(false);
    const transitionNavBar = ()=>{
        if(window.scrollY > 50)
        {
            updateShow(true);
        }
        else
        {
            updateShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll",transitionNavBar);
        }
    }, [show])
    return (
        <div className={`navBar ${show && "nav__black"}`}>
            <div className="navLogos">
                <img className="nav_Logo"
                 src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo">

                </img>
                <img className="nav_avatar_Logo"
                 src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/baffc96f5eccbde6402befe0_rw_600.png?h=cc45688ebccb59201761f059f3f4e5e3" alt="avatar">

                </img>
            </div>

            
        </div>
        
    )
}

export default Nav
