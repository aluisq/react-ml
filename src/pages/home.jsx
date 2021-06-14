import React, { useEffect, useState, useContext } from 'react';
import {Modal, Button}  from 'react-bootstrap'
import { Context } from '../components/Context/AuthContext';
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar';
import { api } from '../service/apiMl';


export default function Home() {

  // 1º Modal
  const [modalOne, setModalOne] = useState(false);
  
  const modalOneShow = () => setModalOne(true);

  const modalOneClose = () => setModalOne(false);


  // 2º Modal

  const [modalTwo , setModalTwoShow] = useState(false)

  const modalTwoShow = () => setModalTwoShow(true)

  const modalTwoClose = () => setModalTwoShow(false)

  const {handleLogout} = useContext(Context)


  // 3º Modal

  const [modalThree, setModalThree] = useState(false)

  const modalThreeShow = () => setModalThree(true)

  const modalThreeClose = () => setModalThree(false)

  
  useEffect(()=>{
    
    async function getUsers(){

      const users = await api.get('/mongo/users/arthur')

      .then(res=>{
        console.log(res.data)
      })
      .catch(e=>{
        if(e.response.status !== 200){
          alert("Algo inesperado aconteceu, por favor tente fazer o login novamente!")
          handleLogout()
        } 
      })
    }
  },[])

  return (
    <>
    <Navbar/>
    <div className="home">
      <div className="homeDivOne">
        <img src="https://xtech.com.br/config/imagens_conteudo/blogs/afinal-como-o-machine-learning-pode-afetar-a-area-de-ti.jpg'" alt="" />
      </div>
      <div className="homeDivTwo">
      <button onClick={modalOneShow}>
        Deep Learning
      </button>
      <button onClick={modalTwoShow}> 
        Machine Learning
      </button>
      <button onClick={modalThreeShow}>
        Artificial Intelligence
      </button>
    </div>


    <Modal show={modalOne} onHide={modalOneClose}>
    <Modal.Header>
          <Modal.Title>Deep Learning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deep Learning, ou aprendizagem profunda em português, é uma 
                  subcategoria do aprendizado de máquina que se baseia em Redes Neurais Artificiais 
                  (RNA) para realizar o treinamento. Então, antes de continuar, precisamos entender 
                  basicamente o conceito de redes neurais. As RNA’s são modelos computacionais 
                  inspirados no funcionamento dos neurônios do cérebro humano. O conhecimento é 
                  adquirido pela rede a partir de seu ambiente através de um processo de 
                  aprendizagem. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalOneClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={modalTwo} onHide={modalTwoClose}>
        <Modal.Header>
              <Modal.Title>Machine Learning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Machine Learning, ou Aprendizado de Máquina em português, é um campo 
                        de estudo que já existe há vários anos. É uma subárea de Inteligência Artificial que 
                        não teve o devido destaque por muitos anos. Esse assunto despertou atenção 
                        novamente com a evolução da capacidade de processamento dos computadores e 
                        também com a necessidade de técnicas de análises e previsões a partir de grandes 
                        massas de dados.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalTwoClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>

    <Modal show={modalThree} onHide={modalThreeClose}>
    <Modal.Header>
          <Modal.Title>Artificial Intelligence </Modal.Title>
        </Modal.Header>
        <Modal.Body>A inteligência artificial se baseia no princípio de que a inteligência humana pode ser definida de forma que uma máquina possa facilmente imitá-la e executar tarefas,
          desde as mais simples até as mais complexas. Veja como ela se comporta:
          <img className="imgModal" src='https://www.intel.com.br/content/dam/www/public/us/en/ai/images/ai-machine-learning-deep-learning-rwd.png.rendition.intel.web.480.270.png' alt='globo Machine Learning' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalThreeClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    <Footer/>
    </>
  )
}
