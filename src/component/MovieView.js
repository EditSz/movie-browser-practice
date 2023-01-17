import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
    const {id} = useParams()
    //console.log(id)
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
    const noPicture = require('./Nopic.png')
    const pageNotFound = require('./404 yoda.png')
   
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=879bbfb84a3910766ba2a13acbdfe9a5&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setTimeout(() => {
            setMovieDetails(data)
            setIsLoading(false)
          }, 1000) 
        })
    }, [id])



    function posterView () {
      if (movieDetails.poster_path == null) {
        return (
          <img src={noPicture} className="card-img-top poster-img p-1 shadow rounded" alt="not_found" />
          );
        } else {
          return (
          <img src={posterPath} className="card-img-top poster-img p-1 shadow rounded" alt={movieDetails.original_title} />
          )
        }
      }

    function renderMovieDetails() {
      if (isLoading) {
        return <Hero text="Loading..." />
      }
      if(movieDetails == null) {

        return <img src={pageNotFound} className="col-md-7 img-fluid shadow rounded" alt="not_found" />
      }else{
        //TOTO: deal with a possible missing image
        return (
          <>
            <Hero text={movieDetails.original_title}  backdrop={backdropUrl}/>
            <div className="container-details">
              <div>{posterView()}</div>
                <div className="col-md-9 show-details ">
                  <h2> {movieDetails.original_title}</h2>
                  <p className="overview">
                    {movieDetails.overview}
                  </p>
                </div>
            </div>
          </>
          );
        }
      }
    
    return renderMovieDetails()
};

export default MovieView;

//it was under useEffect -  console.log('make an api request', id)

/*<div className="col-md-3">
<img src={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
</div>

//<div className="row">*/