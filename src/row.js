import React, { useState,useEffect } from 'react' ;
import './row.css' ;
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer' ;
const baseURL = 'https://image.tmdb.org/t/p/original'
export const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl]= useState("");
    useEffect(()=>{
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        // console.log(request)
        setMovies(request.data.results)
        return request ;
      }
      fetchData();
},[fetchUrl])

const opts = {
  height:"390",
  width:"100%",
  playerVars:{
    autoplay:1,
  },
};
const handleClick = (movie)=>{
  if(trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.name || "")
    .then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get("v"));
    })
    .catch((error)=>console.log(error));
  }
};

// console.log(movies)

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="posterRows">
          {/* append data */}

          {movies.map((elem) => (
          
            <img key={elem.id} 
            onClick={()=> handleClick(elem)} 
             className={`insideRow ${isLargeRow && "largePosterRow"}`}
            src={`${baseURL}${ isLargeRow ? elem.poster_path : elem.backdrop_path}`} alt={elem.name}/>
            
            ))}

           </div>

            {/* <YouTube videoId="XtMThy8QKqU" opts={opts} /> */}
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }



    </div>
  )
}
