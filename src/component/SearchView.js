import Hero from "./Hero";
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
 

  return (
  <div className="card m-2 text-center p-2" style=    {{width:'18em'}}>
        <img src={posterUrl} className="card-img-top poster-img p-1" alt={movie.original_title}/>
      <div className="card-body">
        <h6 className="card-title">{movie.original_title}</h6>
        <Link to={detailUrl} className="btn btn-primary">Show details</Link>
    </div>
  </div>

  )
}



const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`
  const PageNotFound = require('./404 yoda.png')
  const resultsHtml = searchResults.map((obj, i) =>{
    return <MovieCard movie={obj} key={i} />
  
  })
 


  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container-details ">
          
            {resultsHtml}
         
        </div>
      }

      <div className="container text-center">
      <img src={PageNotFound} className="col-md-8 img-fluid shadow" alt="not_found" />
      </div>
     
    </>
  );
};

export default SearchView;


//it was under the const title =... -  console.log(searchResults, "are the search results")

//it was in const resultHtml - <div key={i}>{obj.original_title}</div>