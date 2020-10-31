import React,{useState} from 'react';
import { Form,Button,Modal} from 'react-bootstrap';
import './Add.css'

function Add({adddrama}) {
    
    const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
      
    
      
       const [newDrama, setNewDrama] = useState({
        id: Math.random(),
        title: "",
        posterUrl:``,
        description: "",
        rate:"",
      });
    return (
        <div className="adding">    
        
    <Form inline className="Click">
        <Button variant="outline-info" onClick={handleShow}>Add</Button>
        </Form>
       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Drama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <form className="formul">
            <label>Drama Title</label>
            <input
              required
              name="title"
              type="text"
              onChange={(e) =>
                setNewDrama({ ...newDrama, [e.target.name]: e.target.value })
              }
            />
            <label>Rating</label>
            <input
              required
              name="rate"
              type="number"
              onChange={(e) =>
                setNewDrama({ ...newDrama, [e.target.name]: e.target.value })
              }
            />
            <label>Image URL</label>
            <input
              required
              name="posterUrl"
              onChange={(e) =>
                setNewDrama({ ...newDrama, [e.target.name]: e.target.value })
              }
            />
            <label>Description</label>
            <input
              required
              name="description"
              onChange={(e) =>
                setNewDrama({ ...newDrama, [e.target.name]: e.target.value })
              }
            />
          </form>
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={(e)=> {
              adddrama(newDrama);
              handleClose();
              setNewDrama({
                id: Math.random(),
                title: "",
                posterUrl:``,
                description: "",
                 rate:"",
              });
            }}>Save </Button>{" "}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Add
