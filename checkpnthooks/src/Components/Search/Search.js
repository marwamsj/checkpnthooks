import React from "react";
import './Search.css';
import Rating from "../Rating/Rating";
import { Form,FormControl} from 'react-bootstrap';

function Search({setSearchTerm,searchrate,setSearchrate}) {
  
  const handleChange = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
 return (
   <div className='chercher'>
      <div className="text">
    
    <Form inline>
     <FormControl type="text" placeholder="Search" className="mr-sm-2"
     onChange={handleChange} />
     </Form>
      </div >
      <div style={{paddingTop: "1.8%"}}>
      <Rating  searchrate={searchrate} setSearchrate={setSearchrate} />
      </div>
      </div>

  );
};
export default Search;