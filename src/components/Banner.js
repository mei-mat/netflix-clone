import React, { useEffect, useState } from 'react';
import axios, { requests } from '../axios';
import './Banner.css';

const truncate = (str, len) => {
    return (str.length > len) ? str.substr(0, len - 1) + '...' : str;
};

const Banner = () => {
    const [movie, setMovie] = useState({
        backdrop_path: "/iq5L971DFW1SwLJdvl7OpPI1QeZ.jpg",
    });

    useEffect(() => {
        async function fetchdata() {
            const res = await axios.get(requests.fetchNetflixOriginals);
            // console.log(requests.fetchNetflixOriginals);
            setMovie(
                res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
            );
            return res;
        }
        fetchdata();
    }, []);

    return (
        // --------------
        // This is also work, just try to use bootstrap as below
        // --------------
        // <div className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
        //     <div className="pt-3 ms-5">
        //         <h1 className="h3 font-weight-bold">{movie.title || movie.name || movie.original_name}</h1>
        //         <div className="py-3">
        //             <button className="btn btn-nf-transpatent-60 px-4 pt-0 pb-1 font-weight-bold">Play</button>
        //             <button className="btn btn-nf-transpatent-60 px-4 pt-0 pb-1 ms-2 font-weight-bold">My List</button>
        //         </div>
        //         <h6 className="banner-desc">{truncate(movie.overview ?? '', 150)}</h6>
        //     </div>
        //     <div className="banner-bottom" />
        // </div>

        // Try using boostrap's feature img-fluid
        <div className="bannerB">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="img-fluid" />
            <div className="bannerB-title">
                <h1 className="h3 font-weight-bold">{movie.title || movie.name || movie.original_name}</h1>
                <div className="py-3">
                    <button className="btn btn-gray33alpha60 px-4 pt-0 pb-1 font-weight-bold">Play</button>
                    <button className="btn btn-gray33alpha60 px-4 pt-0 pb-1 ms-2 font-weight-bold">My List</button>
                </div>
                <h6 className="bannerB-desc">{truncate(movie.overview ?? '', 150)}</h6>
            </div>
            <div className="bannerB-bottom" />
        </div>
    )
}

export default Banner;
