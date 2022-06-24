import logo from './logo.svg';
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';
import Trending from './components/Trending/Trending';
import Data from './components/SearchResult/data.json';
import Trend from './components/Trending/trending.json';
import React from 'react';

function App() {
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

          }
          <React.Fragment>
          {
            Trend.map((postData, index)=>{ 
              return(
                <div key={index}>
            <Trending url="/trending" data={postData}/>
            </div>
              )
            })

          }
            </React.Fragment>  
    </div>
  )
}

export default App;
