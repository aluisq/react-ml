import React from 'react';
import Navbar from '../components/Navbar/navbar';
import perfilPhoto from '../img/perfil.jpg'


export default function About() {
  return (
        <div className="about">
          <Navbar/>
          <div className="about-content">
            <img src={perfilPhoto} alt="perfil" />
            <h1>
              Arthur Dantas 
            </h1>
            <span>
            Atualmente trabalho na Unimed Recife e procuro contribuir positivamente na área em que atuo tentando ser um colaborador de impacto e assim ser
            reconhecido pelos meus esforços podendo utilizar as minhas soft skills para desenvolver meu crescimento profissional e pessoal.
            </span>
            <h3>Formação</h3>
            <ul>
              <li>
              Bacharel em Ciências Econômicas – UFPE - 2016
              </li>
              <li>
              Análise e Desenvolvimento de Sistemas - FICR- Faculdade Imaculada Conceição do Recife - 2021.2
              </li>
            </ul>
            <h3>Informações Adicionais</h3>
            <ul>
                <li>Inglês intermediário (Conversação)</li>
                <li>Inglês intermediário-avançado (Leitura)</li>
                <li>Boa convivência e comunicação</li>
                <li>Familiaridade com a linguagem de programação Python </li>
                <li>Desenvolvimento Web com Flask, Django, Bootstrap, Git e Heroku</li>
                <li>Biblioteca Pandas para análise de Dados</li>
                <li>Integração de bancos SQL e NoSQL(MongoDB) para análise de dados</li>
                <li>Conhecimento das ferramentas: Jupyter Notebook e Colab</li>
                <li>Noções de Linguagem SQL</li>
            </ul>
            
          </div>
        </div>
  )
}