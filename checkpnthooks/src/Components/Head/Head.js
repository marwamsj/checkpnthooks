import React from 'react'
import { Navbar,Nav} from 'react-bootstrap';


function Head() {
    return (
    
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">KDrama</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Drama List</Nav.Link>
      <Nav.Link href="#features">Anime List</Nav.Link>  
    </Nav>
  
    </Navbar>
    

    )
}

export default Head
