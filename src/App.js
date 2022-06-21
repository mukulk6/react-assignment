import logo from './logo.svg';
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';
import Data from './components/SearchResult/data.json';
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";

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
    </div>
  )
}

export default App;
