import logo from './logo.svg';
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';
import Trending from './components/Trending/Trending';
import Data from './components/SearchResult/data.json';
import Trend from './components/Trending/trending.json';
import React from 'react';

<<<<<<< HEAD
export const MapData = () => {
  return(
    Trend.map((postData, index)=>{ 
      return(
        <div key={index}>
    <Trending data={postData}/>
    </div>
      )
    })
  )
}

export function App() {
=======
function App() {
>>>>>>> 76d6c0456a4775bdddd1c5d80ad47a6b050329d1
  return(
    <div className="App">    
      {
            Data.map((postData, index)=>{ 
              return(
                <div key={index}>
            <SearchResult data={postData}/>
            </div>
              )
            })
<<<<<<< HEAD
=======

>>>>>>> 76d6c0456a4775bdddd1c5d80ad47a6b050329d1
          }

    </div>
  )
}

export default App;
