import React, { useState, useEffect } from 'react';
import {Modal, Button}  from 'react-bootstrap'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar';
import {api} from '../service/apiMl'


export default function Home() {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="home">
      <div className="homeDivOne">
        <img src="https://xtech.com.br/config/imagens_conteudo/blogs/afinal-como-o-machine-learning-pode-afetar-a-area-de-ti.jpg'" alt="" />
      </div>
      <div className="homeDivTwo">
      <button>
        Deep Learning
      </button>
      <button onClick={handleShow}> 
        Machine Learning
      </button>
      <button>
        Artificial Intelligence
      </button>

    </div>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <Footer/>
    </div>
    </>
  )
}
