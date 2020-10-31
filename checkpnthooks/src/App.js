import React,{useState} from 'react';
import './App.css';
import { itemArray } from "./data.js";
import Head from './Components/Head/Head';
import MovieList from './Components/MovieList/MovieList';
import Search from './Components/Search/Search';
import Add from './Components/Add/Add';

function App() {
  const [drama, setDrama] = useState(itemArray);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchrate, setSearchrate] = useState(0);
  const adddrama=(newadd)=>{
    if (newadd.title !== "") {
    setDrama([...drama,newadd])}
  }
  return (
    <div className="App">
      <div className="tete">
      <Head />
      <Add adddrama={adddrama}/>
      </div>
      <Search setSearchTerm={setSearchTerm} searchrate={searchrate} setSearchrate={setSearchrate}/> 
      
      <MovieList list={drama}  
                 searchTerm={searchTerm}
                 searchrate={searchrate}/>
     

    </div>
  );
}

export default App;
