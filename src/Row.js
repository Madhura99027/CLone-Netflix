import React ,{ useState ,useEffect }from 'react'
import axios from './axios';
import './Row.css';
// import YouTube from "react-youtube";
const base_url ="https://image.tmdb.org/t/p/original/";

// use some es6 sugar for paring the prop objects as you can see the argument to tthe funtion 

function Row({title, fetchUrl ,isLargeRow}) {

     const [movies,setMovies]= useState([]);

    //as the row loads this snippet of code runs 
    useEffect(()=> {
        
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request);

            return request;
            }fetchData() ;

    }, [fetchUrl]);//if[] brackets blank it means run once when row loads and then don't for argument passed run every time argument value changes 

    // console.table  (movies);

    // const opts ={
    //     height:
    //     width:
    // }



    return (
        <div className="row">

            {/* title */}
            <h2>{title}</h2>


            <div className="row__posters">

            {/* container / poster */}


            {/* here es6 function is used as single statement no need of writing return  */}
            {movies.map(movie=>(

                // everything haing row poster and if additionally if it is a large row then we are adding another class to it
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

                ))

            }
            </div>

            {/* <YouTube videoId={XtMThy8QKqU&t=8143s} opts={opts}></YouTube> */}

        </div>
    )
}

export default Row
