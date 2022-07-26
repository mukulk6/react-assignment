import logo from './logo.svg';
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';
import Trending from './components/Trending/Trending';
import Data from './components/SearchResult/data.json';
import Trend from './components/Trending/trending.json';
import React from 'react';
import ModalReusable from './components/Modal/Modal';


function App()
{
return(
    <div className="App">   
      {
        Data.map((postData, index)=>{ 
          return(
            <div key={index}>
        <SearchResult data={postData} />
        </div>
          )
        })       
          }
    </div>
)
        }

export default App;
