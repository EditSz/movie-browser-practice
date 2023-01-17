//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AboutView from './component/AboutView';
import SearchView from './component/SearchView';
import MovieView from './component/MovieView';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';


function App() {

  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=164af455d7dfc6055a63f85c32701b68&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
  }, [searchText])
  
  
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />}>
          </Route>
      
        <Route path="/about" element={<AboutView/>} />

        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />

        <Route path="/movies/:id" element={<MovieView/>} />

        <Route path='*' element={<PageNotFound />}/>

      
      </Routes>
    </div>

      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    
  );
}

export default App;

//the SearchView didn't work as in the lesson because of the changes in React!!!
//you have to use the element={<Something>} method

/*console.log(searchText, "is the default")
setTimeout(() => {
  setSearchText("New text")
  console.log(searchText, "is the new text")
}, 2000)*/


/*<Route path="/search" keyword={searchText}  searchResults={searchResults}  element={<SearchView/>}>- doesn't work, it's just wrong in this form*/

//it was in the useEffect section -  console.log(searchText, "is the search text")


//  <Route path="/*" element={<PageView/>} />