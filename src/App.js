import logo from './logo.svg';
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';
import Data from './components/SearchResult/data.json';

function App() {
  return(
    <div className="App">    
      {
            Data.map((postData)=>{ return<SearchResult data={postData}/>})   
      }
    </div>
  )
}

export default App;
