import React, { useEffect, useState } from 'react'
import './banner.css';
import axios from './axios';
import requests from './request';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchActionMovie);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
            );
            return request;
        }
    fetchData();
}, []);


console.log(movie);


function truncate(string, n)
{
    return string?.length>n?string.substring(0, n-1)+'...':string;
}

    return (
        <header
         className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
        <div className="bannerContents">
            <h1 className="banner_title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="actualBannerButton">Play</button>
                <button className="actualBannerButton">My List</button>
            </div>
            <h1 className="banner_description"> {truncate("Check check check check checkCheck check check check checkCheck check check check checkCheck check check check check", 140)}</h1>
        </div>
        <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
