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


    
  );
}

export default App;
