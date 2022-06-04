import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Banner.css'
import { requests } from './requests';
const baseURL = 'https://image.tmdb.org/t/p/original'


export const Banner = () => {


const [movie,setMovie] = useState([]);

useEffect(()=>{
async function fetchData(){
    const request= await axios.get(requests.fetchNetflixOriginals)

    setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);
    return request ;
}
fetchData();
},[])

// console.log(movie)

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1)+ "..." : str ;
}



  return (
    <header className='banner' style={{backgroundSize:"cover",
    backgroundImage:`url(${baseURL}${movie?.backdrop_path})`,
    // backgroundImage:`url("https://image.tmdb.org/t/p/original
    // /${movie?.backdrop_path}")`,
    backgroundPosition:"center center"
    }}> {/* Background image */}
        <div className="banner_content">
    {/* Title */}
    <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
    {/* div > 2 buttons  */}
    <div className='banner_buttons'> 

    <button className='banner_button'>Play</button>
    <button className='banner_button'>My List</button>

    </div>
    {/* description */}
    <h1 className='banner_description'>{movie?.overview}
    {/* {truncate(movie?.overview,20)} */}
    </h1>
    </div>

    <div className='banner_fadeBottom'></div>
    </header>
  )
}
