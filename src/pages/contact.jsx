import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

class Contact extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <div className="contact" >
          <div className="contact-content">
          <h1>Contatos</h1>
          <p > <FaIcons.FaLinkedinIn fontSize={28}/> https://www.linkedin.com/in/arthur-dantas-5b5567131/</p >
          <p>  <FaIcons.FaGithub fontSize={28} /> https://github.com/aluisq </p>
          <p  > <FaIcons.FaMailBulk fontSize={28}/> arthurl.dan@gmail.com</p  >
          </div>
        </div>
        </>
    );
  }
}
export default Contact;